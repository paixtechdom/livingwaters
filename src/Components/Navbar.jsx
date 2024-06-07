import { useContext, useState, useEffect } from "react"
import { AppContext } from "../App"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from '../assets/Constant'
import { Button } from "./Button"
import Cookie from "js-cookie"
import { ConfirmLogout } from "./ConfirmLogout"



const Navbar = () => {
    const {  currentNav, setCurrentNav } =useContext(AppContext)
    const [ showNav, setShowNav ] = useState(false)
    const navigate = useNavigate()
    const [ showNavbar, setShowNavbar ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ promptAction, setPromptAction ] = useState(false)
    const [ showPrompt, setShowPrompt ] = useState(false)


    const navs = [
        {
            nav: 'Home',
            to: ''
        },
        {
            nav: 'Messages',
            to: 'admin/messages'
        },
        {
            nav: 'Upload',
            to: 'admin/upload'
        },
    ]

    const handleScroll = () => {
        document.querySelectorAll('.parent').forEach((parent, i) =>{
            const pos = parent.getBoundingClientRect()
            if( pos.top > -10 && pos.top < 100) {
                setCurrentNav(i)
            } else{
                // setCurrentNav(99)
            }
        })
    
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
    }, [])
    useEffect(() => {
        const cookie = Cookie.get('adminCookie')
        // const adminCookie = JSON.parse(cookie)
        setLoggedIn(cookie !== undefined)
        setShowNavbar(document.URL.toLocaleLowerCase().includes('login') ? false : true)
        
        navs.forEach((nav, i) =>{
            if(document.URL.includes(nav.to)){
                setCurrentNav(i)
            }
        })
        
        document.documentElement.scrollTop = 0
    }, [document.URL])

    const Logout = () => {
        navigate('/admin/login')
        Cookie.remove('adminCookie', {path:'/'})
        setShowPrompt(false)
        setTimeout(() => {
            setPromptAction(false)
            document.body.style.overflowY = "auto"
        }, (300));
    }
    
    return(
        <>
            {
                showNavbar ? 
                <header className="center fixed top-0 left-0 h-[10vh] w-full z-50 bg-gradient-to-r from-blue-100 to-orange-100 lg:border-0 shadow-lg">
                <nav className="flex items-center justify-between w-11/12 lg:w-10/12 xl:w-9/12">
                
                    <Link to={"/"} className="flex items-center justify-start logo w-3/12 text-2xl font-bold">
                        L.W
                    </Link>

                
                    {/* NAVBAR TOGGLER */}
                    {
                        loggedIn &&
                        <i className={`bi bi-${showNav ? 'x-lg' : 'list'} text-2xl lg:hidden cursor-pointer text-black`} onClick={() => setShowNav(!showNav)}></i>                  
                    }
                

                    {/* CENTER NAV */}
                    <div className={`flex  items-center justify-center gap-5 ${loggedIn ? 'flex-col w-[100vw] fixed top-[8vh] md:top-[10vh] shadow-xl border-t-4 border-white lg:shadow-none bg-gradient-to-r from-blue-100 to-orange-100 h-[60vh] ' : ''} lg:from-transparent lg:to-transparent z-50  transition-all duration-1000
                    ${showNav ? 'left-0' : 'left-[100vw] lg:left-0'}

                    lg:flex-row lg:justify-center lg:gap-0 lg:h-fit lg:top-0 lg:relative w-10/12 lg:border-0`}>

                        <div className={`flex 
                        w-11/12 ${loggedIn && 'mt-6 flex-col '} gap-9 items-center lg:justify-end mr-9 xl:justify-center lg:top-0 lg:flex-row  text-sm lg:gap-12 xl:gap-14 lg:w-full text-[#000000] lg:mt-0`}>
                            {
                                loggedIn &&
                                navs.map((nav, i) => (
                                    <Link key={i} to={`/${nav.to}`} className={`cursor-pointer w-fit ${currentNav === i ? 'bg-white p-2 px-4 rounded-xl' : ''}`}
                                    onClick={() => setShowNav(false)}
                                >
                                        {nav.nav}
                                    </Link>
                                ))
                            }
                        </div> 
                        {
                            loggedIn ?
                            <div className={`flex justify-end  w-fit  gap-5 flex-col lg:mt-0 lg:w-3/12 lg:flex-row ${loggedIn && 'mt-9'}`}>
                                <Button text={'Logout'} type={'primary'} className={'w-[150px]'} 
                                func={() => {
                                    setShowNav(false)
                                    setPromptAction(true)
                                }}/>
                            </div> 
                            : 
                            <div className={`flex justify-end  w-fit  gap-5 flex-col lg:mt-0 lg:w-3/12 lg:flex-row ${loggedIn && 'mt-9'}`}>
                                <Button text={'Login'} type={'primary'} className={'w-[150px]'} 
                                func={() => {
                                    navigate('/admin/Login')
                                    setShowNav(false)
                                }}/>
                            </div> 
                        }

                    

                    </div>
                    
                </nav>
            
            </header> 
            
            : ''
            }


{
                promptAction ?
                <ConfirmLogout 
                    promptAction={promptAction} 
                    setPromptAction={setPromptAction} 
                    showPrompt={showPrompt}
                    setShowPrompt={setShowPrompt}
                    Logout={Logout}
                    prompt={<strong>Do you want to Logout?</strong>} /> 
                
                : ''
            }
        </>
    )

}

export default Navbar;