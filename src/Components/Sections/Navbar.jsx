import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logo, Navigation } from '../../../public/Constant'
import { Button } from "../Utils/Button"
import Cookie from "js-cookie"
import { ConfirmLogout } from "../Utils/ConfirmLogout"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav, setExpandNav } from "../../assets/store/navigation/navigationSlice"
import { setLanguage } from "../../assets/store/AppSlice/AppSlice"
import { BiMenu, BiX } from "react-icons/bi"

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
    const expandNav = navigation.expandNav
    const currentNav = navigation.currentNav
    const currentDropDownIndex = navigation.currentDropDownIndex
    const scrolledDown = navigation.scrolledDown
    const currentDropDown = navigation.currentDropDown

    const language = appslice.language

    // expandNav is for large screen to expand the nav

    const [ timeoutId, setTimeoutId ] = useState(null)

    const handleMouseOver = () => {
        const id = setTimeout(() => {
            dispatch(setExpandNav(false))
        }, 100);
        setTimeoutId(id)
        
    };
    
    const handleMouseOut = () => {
        dispatch(setExpandNav(true))
        clearTimeout(timeoutId)
    }

    useEffect(() => {
        return() => {
            clearTimeout(timeoutId)
        }
    }, [timeoutId])


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
        setShowNavbar(false)
        const cookie = Cookie.get('adminCookie')
        // const adminCookie = JSON.parse(cookie)
        setLoggedIn(cookie !== undefined)
        // setShowNavbar(document.URL.toLocaleLowerCase().includes('login') ? false : true)
        
        Navigation[language].forEach((nav, i) =>{
            if(document.URL.includes(nav.link)){
                dispatch(setCurrentNav(i))
            }
        })
        
        document.documentElement.scrollTop = 0
    }, [window.location.href])

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

            <header className={`flex justify-start fixed top-0 left-0 h-screen  ${expandNav ? " w-full" : "lg:w-[4pc]"} ${showNavbar ? "left-0 " : "left-[-100vw] lg:left-0"} z-50 transition-all duration-500 overflow-hidden bg-re d-300`}>

                {/* HEADER FOR SMALL SCREEN */}
                <div className="fixed left-0 top-0 w-full center lg:hidden">
                    <div className="p-2 w-11/12 lg:w-10/12 flex justify-between items-center bg-darkblue rounded-full mt-6 bg-opacity-15 backdrop-blur-md relative group overflow-hidden shadow-lg">
                        <div className={`absolute top-0 left-0 h-full bg-gradient-to-l from-pink-400 to-blue-500 opacity-30 w-0 rounded-lg group-hover:w-full ${showNavbar ? "w-full" : ""} group-active:w-full z-[0] transition-all duration-500`}></div>

                        <Link to={"/"} className={`flex items-center justify-start transition-all duration-1000 text-white gap-[10px] w-[200px] bg-re d-200 z-10`}>

                            <img src={Logo} alt="Living Waters Logo" 
                            className=" bg-white rounded-full w-[2.9pc]"/>
                        </Link>

                        <div className="text-3xl z-20 text-gray-200 cursor-pointer bg-darkblue rounded-full p-2 bg-opacity-80" onClick={() => {
                            setShowNavbar(!showNavbar)
                        }}>
                            {
                                showNavbar ?
                                <BiX/>
                                :
                                <BiMenu/>
                            }
                        </div>
                    </div>
                </div>

                <nav className={` top-0 ${showNavbar ? "left-0 " : "-left-[100vw] lg:left-0"} h-screen bg-opacity-40 shadow-xl relative transition-all duration-500 ease-in-out ${expandNav ? "w-8/12 lg:w-3/12" : "lg:w-[4pc]"} z-50 overflow-hidden`}
                    onMouseOver={() => dispatch(setExpandNav(true))}
                >                   
                    <div className={`absolute top-0 left-0 backdrop-blur bg-gradient-to-b from-blue-950  via-blue-950 to-blue-800 transition-all duration-500 w-full h-full ${expandNav ? "" : "opacity-95"} `}></div>
                    
                    <section className="relative flex flex-col gap-[8vh] item-center h-full p-2 mt-6 w-full"
                    >

                        {/* LOGO */}
                        <Link to={"/"} className={`flex items-center justify-start transition-all duration-1000 text-white gap-[10px] w-[200px] bg-re d-200`}>

                            <img src={Logo} alt="Living Waters Logo" 
                            className=" bg-white rounded-full w-[2.9pc]"/>

                            <div className="flex flex-col text-sm uppercase w-full bg-red-60 0">
                                <p className="">Living Waters</p>
                                <p className="">Global Ministry</p>
                            </div>
                        </Link>


                        {/* NAVIGATION AND GIVE BUTTON*/}

                        <div className="flex flex-col gap-4 w-full"
                        >
                            {
                                Navigation[language].map((nav, i) => {
                                
                                return (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between -ml-1  w-full lg:w-[200px] gap-3 relative group cursor-pointer p-1" 
                                            onClick={() => {
                                                if(nav.sublinks){
                                                    dispatch(setCurrentDropDown(nav.title))
                                                    dispatch(setCurrentDropDownIndex(i))
                                                }else{
                                                    dispatch(setCurrentDropDown(""))
                                                    navigate(`/${nav.link}`)
                                                }
                                            }}
                                            onMouseOver={() => {
                                                if(nav.sublinks){
                                                    dispatch(setCurrentDropDown(nav.title))
                                                    dispatch(setCurrentDropDownIndex(i))
                                                }else{
                                                    dispatch(setCurrentDropDown(""))
                                                }
                                            }}
                                        >
                                            <div className={`absolute top-0 left-0 h-full bg-gradient-to-l from-pink-400 to-blue-500 opacity-30 w-0 rounded-lg group-hover:w-full z-[0] transition-all duration-500`}></div>
                                            
                                            <div className="flex items-center gap-3 w-full z-50 cursor-pointer">
                                                <p className="w-[2.9pc] center "
                                                ><i className={`bi bi-${nav.icon} text-gray-300 text-2xl md:text-3xl
                                                `}></i></p>
                                                
                                                <p className={`${currentNav == i ? "text-lightblue font-bold" : "text-gray-100"}`}>{nav.title}</p>
                                                
                                            </div>
                                            {
                                                nav.sublinks && 
                                                <>
                                                {/* arrow button for small screen for sublinks */}
                                                <i className="center bi bi-chevron-down lg:hidden size-4 text-xs rounded-b-md px-3 text-gray-300 bg-gray-200 bg-opacity-30 "></i>

                                                <i className="lg:flex lg:justify-center lg:items-center pt-[2.5px] bi-chevron-right size-5 text-xs rounded-r-md text-gray-300 bg-gray-200 bg-opacity-30 hidden"></i>
                                                </>
                                            }                                        
                                        </div>
                                        {
                                            currentDropDownIndex == i && 
                                            <div className="lg:hidden flex flex-col gap-2 ml-2 scale-90">
                                            {
                                                Navigation["eng"][currentDropDownIndex]?.sublinks?.map((subnav, i) => (
                                                    <Link to={`/${subnav.link}`} key={i} className="flex items-center justify-between  gap-3 relative group cursor-pointer p-1">
                                                    
                                                    <div className={`absolute h-full bg-gradient-to-r from-pink-400 to-blue-500 opacity-30 w-0 rounded-lg group-hover:w-full z-[0] transition-all duration-500`}></div>


                                                        <div className="flex items-center gap-3 w-full z-50 cursor-pointer">

                                                            <p className="w-[2.9pc] center "
                                                                ><i className={`bi bi-${subnav.icon} text-gray-300 text-2xl md:text-3xl
                                                                `}></i>
                                                            </p>
                                                                
                                                            <p className={`${currentNav == i ? "text-lightblue font-bold" : "text-gray-100"}`}>{subnav.title}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))
                                            }
                                            </div>
                                        }
                                    </div>
                                ) })
                            }

                            {/* GIVE BUTTON */}
                            <div className={`flex flex-col gap-5 my-[5vh] relative transition-all duration-500 ${!expandNav ? "lg:translate-x-[-120px]" : "translate-x-0"}`}>
                                <Link to={'/give'} className={` `}>
                                    <Button 
                                        text={language==="eng" ? "Give" : "English"} 
                                        type={'primary'} 
                                        className={'w-full py-[8px] text-base'} 
                                    />
                                </Link>

                                {/* <div ishoveredclassName={``}>
                                    <Button 
                                        text={language==="eng" ? "Francais" : "English"} 
                                        type={'primary'} 
                                        className={'w-full py-[8px] text-base px-5'} 
                                        func={() => {
                                            if(language === "eng"){
                                                dispatch(setLanguage('fr'))
                                            }else{
                                                dispatch(setLanguage('eng'))
                                            }
                                        }}
                                    />
                                </div> */}
                            </div>
                        </div>
                        
                    </section>

                </nav>

                {/* SUB LINKS - SECONDARY LINKS  FOR LARGE SCREENS*/}
                 <div className={`hidden absolute top-0 h-screen bg-black bg-opacity-60 backdrop-blur-sm w-[550px] transition-all duration-1000 ease-in-out lg:flex justify-center items-end pr-9 flex-col gap-3 ${(Navigation["eng"][currentDropDownIndex]?.sublinks && expandNav) ? "left-0" : "-left-[-100vw] lg:-left-[70vw]"} lg:pb-[15vh]`}>
                    {
                        Navigation["eng"][currentDropDownIndex]?.sublinks?.map((subnav, i) => (
                            <Link to={`/${subnav.link}`} key={i} className="flex items-center justify-between  w-[200px] gap-3 relative group cursor-pointer p-1"
                                onClick={() => {
                                    dispatch(setCurrentDropDown(nav.title))
                                    dispatch(setCurrentDropDownIndex(i))
                                    alert("ddd")
                                }} 
                            >
                            
                            <div className={`absolute top-0 right-0 h-full bg-gradient-to-r from-pink-400 to-blue-500 opacity-30 w-0 rounded-lg group-hover:w-full z-[0] transition-all duration-500`}></div>


                                <div className="flex items-center gap-3 w-full z-50 cursor-pointer">

                                    <p className="w-[2.9pc] center "
                                        ><i className={`bi bi-${subnav.icon} text-gray-300 text-2xl md:text-3xl
                                        `}></i>
                                    </p>
                                        
                                    <p className="text-gray-100">{subnav.title}
                                    </p>
                                </div>
                            </Link>
                        ))
                    }
                </div>

                {expandNav &&
                <>
                    <div className="block lg:hidden h-screen w-4/12 lg:w-full bg-gree n-500"
                        onClick={() => {setShowNavbar(false)}}
                    >
                    </div>
                    <div className="hidden lg:block h-screen w-4/12 lg:w-full bg-gree n-500"
                        onMouseOver={handleMouseOver}
                        onClick={() => {setShowNavbar(false)}}
                        onMouseOut={handleMouseOut}
                    >
                    </div>
                </>
                }
            
        
            </header> 
     

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


                  