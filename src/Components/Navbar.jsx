import { useContext, useState, useEffect } from "react"
import { AppContext } from "../App"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from '../assets/Constant'
import { Button } from "./Button"
import Cookie from "js-cookie"



const Navbar = () => {
    const {  currentNav, setCurrentNav } =useContext(AppContext)
    const [ showNav, setShowNav ] = useState(false)
    const navigate = useNavigate()
    const [ showNavbar, setShowNavbar ] = useState(true)
    const [ loggedIn, setLoggedIn ] = useState(false)

    const navs = [
        {
            nav: 'Home',
            to: ''
        },
        {
            nav: 'upload',
            to: 'admin/upload'
        },
        {
            nav: 'admin',
            to: 'admin/messages'
        }
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
        const cookie = Cookie.get('adminCookie')
        // const adminCookie = JSON.parse(cookie)
        setLoggedIn(cookie !== undefined)

        document.addEventListener('scroll', handleScroll)
    }, [])
    useEffect(() => {
        setShowNavbar(document.URL.includes('login') ? false : true)
    }, [document.URL])

    
    return(
        <>
            {
                showNavbar ? 
                <header className="center fixed top-0 left-0 h-[8vh] lg:h-[10vh] w-full z-50 bg-gradient-to-r from-blue-50 to-orange-50 lg:border-0 shadow-lg">
                <nav className="flex items-center justify-between w-11/12 lg:w-10/12 xl:w-9/12">
                
                    <Link to={"/"} className="flex items-center justify-start logo w-3/12 text-2xl font-bold">
                        L.W
                    </Link>

                
                    {/* NAVBAR TOGGLER */}
                    <i className={`bi bi-${showNav ? 'x-lg' : 'list'} text-2xl lg:hidden cursor-pointer text-black`} onClick={() => setShowNav(!showNav)}></i>                  
                

                    {/* CENTER NAV */}
                    <div className={`flex flex-col items-center justify-center w-[100vw] gap-5 fixed top-[8vh] md:top-[10vh]  bg-gradient-to-r from-blue-50 to-orange-50 lg:from-transparent lg:to-transparent z-50 h-[70vh] transition-all duration-1000
                    ${showNav ? 'left-0' : 'left-[100vw] lg:left-0'}

                    lg:flex-row lg:justify-center lg:gap-0 lg:h-fit lg:top-0 lg:relative w-10/12 lg:border-0`}>

                        <div className={`flex flex-col 
                        w-11/12 mt-6 gap-9 items-center lg:justify-end xl:justify-center lg:top-0 lg:flex-row  text-sm lg:gap-12 xl:gap-14 lg:w-full text-[#000000] lg:mt-0`}>
                            {
                                navs.map((nav, i) => (
                                    <Link key={i} to={`/${nav.to}`} className={`cursor-pointer w-fit ${currentNav === i ? 'bg-white p-2 px-4 rounded-xl' : ''}`}
                                    onClick={() => setShowNav(false)}
                                >
                                        {nav.nav}
                                    </Link>
                                ))
                            }
                        </div> 
                        <div className="flex justify-end mt-9 w-fit  gap-5 flex-col lg:mt-0 lg:w-3/12 lg:flex-row">
                            <Button text={'Login'} type={'primary'} className={'w-[150px]'} 
                            func={() => {
                                navigate('/admin/login')
                                setShowNav(false)
                            }}/>
                        </div>

                    

                    </div>
                    
                </nav>
            
            </header> 
            
            : ''
            }
        </>
    )

}

export default Navbar;