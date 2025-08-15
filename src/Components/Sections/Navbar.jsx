import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logo, Navigation } from '../../../public/Constant'
import { Button } from "../Utils/Button"
import Cookie from "js-cookie"
import { ConfirmLogout } from "../Utils/ConfirmLogout"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav, toggleShowNav } from "../../assets/store/navigation/navigationSlice"
import { setLanguage } from "../../assets/store/AppSlice/AppSlice"
import { BiMenu, BiX } from "react-icons/bi"
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri"
import { TbSwitch, TbSwitch2, TbSwitch3 } from "react-icons/tb"
import { BsNintendoSwitch } from "react-icons/bs"
import { AiOutlineSwitcher } from "react-icons/ai"
// import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav, toggleShowNav } from "../store/navigation/navigationSlice.jsx"


const Navbar = () => {
    const navigate = useNavigate()  
    const [ showNavbar, setShowNavbar ] = useState(false)
    // to hide the navbar e.g in case of login
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ promptAction, setPromptAction ] = useState(false)
    const [ showPrompt, setShowPrompt ] = useState(false)


    const navigation = useSelector((state) => state.navigation)
    const appslice = useSelector((state) => state.appslice)
    const dispatch = useDispatch()
    const showNav = navigation.showNavbar
    const currentNav = navigation.currentNav
    const currentDropDownIndex = navigation.currentDropDownIndex
    const scrolledDown = navigation.scrolledDown
    const currentDropDown = navigation.currentDropDown

    const language = appslice.language



    const handleScroll = () => {
        document.querySelectorAll('.parent').forEach((parent, i) =>{
            const pos = parent.getBoundingClientRect()
            if( pos.top > -10 && pos.top < 100) {
                // setCurrentNav(i)
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
        
        Navigation[language].forEach((nav, i) =>{
            if(document.URL.includes(nav.link)){
                dispatch(setCurrentNav(i))
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
                <header className={`center fixed top-0 left-0 h-[8vh] md:h-[10vh] w-full z-50 
                ${!scrolledDown ? "bg-transparent" : "bg-gradient-to-l from-blue-200 via-white to-white shadow-lg"}`}>
                <nav className="flex items-center justify-between w-11/12 lg:w-10/12">
                
                    <Link to={"/"} className={`${!scrolledDown ? "mt-[12vh] md:mt-[15vh] lg:mt-[7%] w-4/12 md:w-2/12 lg:w-2/12" : "w-2/12 md:w-1/12"} flex items-center justify-start transition-all duration-1000 text-white`}>
                        <img src={Logo} alt="Living Waters Logo" className="w-9/12 z-50"/>
                    </Link>

                
                    {/* NAVBAR TOGGLER */}
                    <div className="flex gap-3 items-center ">
                        {
                            <div className={`flex justify-end w-fit gap-5 flex-col lg:mt-0 lg:w-3/12 lg:flex-row lg:hidden`}>
                                <Button 
                                    text={language==="eng" ? "Francais" : "English"} 
                                    type={'primary'} 
                                    className={'w-fit py-[6px]'} 
                                    func={() => {
                                        if(language === "eng"){
                                            dispatch(setLanguage('fr'))
                                        }else{
                                            dispatch(setLanguage('eng'))
                                        }
                                    }}
                                />
                            </div> 
                        }

                        <div onClick={() => dispatch(toggleShowNav(!showNav))}
                            className={`relative lg:hidden cursor-pointer  ${scrolledDown && !showNav ? "text-black" : "text-white"} z-50`}>
                            {
                                showNav ? 
                                <BiX className="text-5xl"/> :
                                <BiMenu className="text-3xl"/> 
                            }

                        </div>
                    </div>
                    
                

                    {/* LEFT NAV */}
                    <div className={`flex  items-center justify-center gap-5 flex-col w-full fixed top-0 shadow-xl lg:shadow-none bg-black bg-opacity-95 h-screen lg:bg-transparent z-40  transition-all duration-1000
                    ${showNav ? 'left-0' : 'left-[100vw] lg:left-0'}

                    lg:flex-row lg:gap-0 lg:h-fit lg:top-0 lg:relative w-10/12 lg:border-0`}>

                        <div className={`flex flex-col w-11/12 gap-9 items-center lg:justify-end xl:ju stify-center lg:top-0 lg:flex-row  text-sm lg:gap-12 xl:gap-14 lg:w-full text-[#000000] lg:mt-0`}>


                            {
                                Navigation[language].map((nav, i) => (
                                    <div key={i} className={`flex flex-col transition-all duration-1000 justify-between w-[200px] text-blue lg:border-0 relative lg:w-fit`}>

                                        <div className={`flex w-[200px] lg:w-fit py-4 px-[5%] lg:p-0 justify-between lg:justify-end lg:items-center cursor-pointer text-black bg-transparent
                                        ${!scrolledDown ? 
                                            'text-secondary text-white' 
                                        : 'text-white lg:text-black hover:bg-opacity-90 lg:hover:bg-transparent'} hover:bg-opacity-10`} 

                                        onClick={() => {
                                            if( nav.sublinks){
                                                dispatch(setCurrentDropDown(currentDropDown === nav.title ? '' : nav.title))

                                            }else{
                                                navigate(`/${nav.link}`)
                                                dispatch(setCurrentNav(i))
                                                dispatch(toggleShowNav())
                                                dispatch(setCurrentDropDown(""))
                                                DocscrollTop()
                                            }
                                        
                                        }}>
                                            <p className={` ${currentNav === i ? 
                                            'border-b border-secondary font-bold': ''}`}>{nav.title}</p>        
                                            {
                                                nav.sublinks ?
                                                currentDropDown == nav.title ?
                                                <RiArrowDropUpFill className="cursor-pointer h-5 scale-[2] w-9"/>  
                                                : 
                                                <RiArrowDropDownFill className="cursor-pointer h-5 scale-[2] w-9"/>  
                                                :  ''
                                            }
        
                                        </div>


                                        

                                        {
                                            nav.sublinks ?
                                            <div className={`center flex-col gap-[1px] w-full overflow-hidden transition-all duration-200 lg:duration-1000 lg:absolute lg:min-w-[250px] bg-opacity-10 lg:bg-opacity-100 bg-primary
                                            ${currentDropDown == nav.title ? 'lg:top-[7vh] lg:left-0' : 'h-0 lg:h-fit text-[0px]  lg:-top-[500px]'} lg:shadow-xl`}>
        
                                                {   
                                                    nav?.sublinks?.map((sublink, j) => (
                                                        <Link to={`/${sublink.link?.replaceAll(" ", "-")?.toLowerCase()}`} key={j} className={`flex gap-5 py-4 bg-white bg-opacity-[0.35] lg:bg-opacity-[1] hover:bg-opacity-[0] lg:hover:bg-opacity-[0.95] text-white lg:text-black
                                                        w-[200px] px-8 lg:px-5 text-sm transition-all duration-500
                                                        ${
                                                            currentNav == i && 
                                                            currentDropDownIndex == j ? 'font-bold text-secondary' :
                                                            ``
                                                        }
                                                         `} 
                                                         onClick={() => {
                                                            dispatch(toggleShowNav())
                                                            dispatch(setCurrentNav(i))
                                                            dispatch(setCurrentDropDownIndex(j))
                                                            dispatch(setCurrentDropDown(""))
                                                            DocscrollTop()
                                                        }}>
                                                        <p className={``}>{sublink.title}</p>
                                                    </Link>
                                                    ))
                                                }
                                            </div>  : ''
                                        }
                                    </div>
                                ))
                            }
                        </div> 

                        <div className={`lg:ml-5 w-fit hidden lg:flex`}>
                            <Button 
                                text={language==="eng" ? "Francais" : "English"} 
                                type={'primary'} 
                                className={'w-fit py-[6px]'} 
                                func={() => {
                                    if(language === "eng"){
                                        dispatch(setLanguage('fr'))
                                    }else{
                                        dispatch(setLanguage('eng'))
                                    }
                                }}
                            />
                        </div> 


                        
                        {/* {
                            loggedIn ?
                            <div className={`flex justify-end w-fit  gap-5 flex-col lg:mt-0 lg:w-3/12 lg:flex-row ${loggedIn && 'mt-9'}`}>
                                <Button text={'Logout'} type={'primary'} className={'w-[150px]'} 
                                func={() => {
                                    toggleShowNav(false)
                                    setPromptAction(true)
                                }}/>
                            </div> 
                            : 
                            <div className={`flex justify-end  w-fit  gap-5 flex-col lg:mt-0 lg:w-3/12 lg:flex-row ${loggedIn && 'mt-9'}`}>
                                <Button text={'Login'} type={'primary'} className={'w-[150px]'} 
                                func={() => {
                                    navigate('/admin/Login')
                                    toggleShowNav(false)
                                }}/>
                            </div> 
                        } */}

                    

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