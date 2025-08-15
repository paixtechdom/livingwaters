import { Suspense, useContext, useEffect, useState } from "react";
import { Button } from "../../Components/Utils/Button"
import { About, backendLocation, ImageFolders, Locations, Upcoming_program_content } from "../../../public/Constant";
import { Hero } from "./Hero";
import { useNavigate } from "react-router-dom";
import { BsClockFill, BsGeoAltFill, BsHeadset, BsPeopleFill } from "react-icons/bs";
import { MessageSkeleton } from "../../Components/Utils/MessageSkeleton";
import Message from "../../Components/Message";
import { AppContext } from "../../App";
import { LoadingIcon } from "../../Components/Utils/LoadingIcon";
import { HandleSearch } from "../../assets/Functions";
import { SlCalender } from "react-icons/sl";
import { GrGallery } from "react-icons/gr";
import GalleryComponent from "../../Components/Gallery/GalleryComponent";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { ImageLoadingAnimie } from "../Media/Pictures/PicturesPage";
import ImageRenderer from "../../Components/Gallery/ImageRenderer";



const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [ currentLocation, setCurrentLocation ] = useState(0)
    const [ messages, setMessages ] = useState([])
    const [ fetching, setFetching ] = useState(true)
    const [ total, setTotal ] = useState(0)
    const [ images, setImages ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const { setShowAlert, setAlertType, setAlertMessage } = useContext(AppContext)

    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language

    const FetchImages = async (lim, startingPoint) => {
        setLoading(true)
        await axios.get(`${backendLocation}/images.php/${lim}/${startingPoint}/${ImageFolders[0].year}/${(ImageFolders[0].tag.replaceAll(" ", "-"))}`)
        .then((res) => {
            setImages(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
      }
    

        
    useEffect(() => {
        if(images.length < 1){
            FetchImages(6, 0)
        }

        setFetching(true)
        const delay = setTimeout(() => {
            // HandleSearch("", setFetching, setMessages, setTotal, setShowAlert, setAlertType, setAlertMessage, 4)            
        }, 1000);
        return () => clearTimeout(delay)

    }, [])



    return(
        <main className="center w-full flex-col overflow-hidden pb-[15vh]">

            <Hero /> 

            <div className="center w-11/12 lg:w-10/12 flex-col gap-[15vh] md:gap-[25vh] overflow-hidden mt-[10vh]"> 


            <section className="flex flex-col w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 my-[10vh] text-center gap-8">
                <h2 className="text-4xl">
                    {language === "eng" ? "Who we are" : "Qui nous sommes"}
                </h2>
                <p className="text-zinc-500 tracking-wide leading-relaxed">{About[language].mission.more}</p>
                <div className="w-full center">    
                    <Button 
                        type="" 
                        text={language === "eng" ? "Read More" : "Lire la suite"} 
                        func={() => navigate("/who-we-are")}
                        className="w-fit min-w-[200px] shadow-xl font-bold"
                        icon=""
                        btnType=""
                        isDisabled={false}
                    />
                </div>

            </section>




            <section className="flex flex-col gap-9 w-full bg-white p-9 py-16 rounded-2xl">
                <div className="flex flex-col gap-4 center">
                    <div className="flex gap-3 items-center">
                        <SlCalender />
                        <h2 className="font-bold text-2xl">
                            {Upcoming_program_content[language].header}
                        </h2>
                    </div>
                </div>
               
                <div className="flex flex-col lg:flex-row gap-9 w-full ">
                    <div className="center overflow-hidden">
                        <img src={Upcoming_program_content[language].img} alt={Upcoming_program_content[language].header} className="lg:w-9/12 rounded-xl shadow-xl"/>
                    </div>

                </div>
            </section> 



            <section className="w-full flex flex-col gap-4 bg-fellowship">
                <h2 className="font-bold text-3xl">
                    {
                        language === "eng" ? 
                        "Fellowship With Us" : 
                        "Venez en communion avec nous." 
                    }
                </h2>
                <p>
                    {
                        language === "eng" ? 
                        "Join us Onsite or Online for a powerful, life transforming moment with God" : 
                        "Rejoignez-nous sur place ou en ligne pour un moment puissant et transformateur avec Dieu." 
                    }
                    
                </p>

                <div className="flex gap-3 my-6">
                    {
                        Locations[language]?.map((location, i) => (
                            <div key={i} className={`center p-2 px-6 rounded-lg text-sm md:font-bold 
                            ${currentLocation === i ? "shadow-xl bg-gradient-to-r from-blue-100 to-white" : ""} cursor-pointer hover:bg-white transition-all duration-500`} 
                            onClick={() => {
                                setCurrentLocation(i)
                            }}>
                                {location.country}
                            </div>
                        ))
                    }
                </div>

                {
                    Locations[language]?.map((location, i) => (
                        currentLocation == i &&
                        <div key={i} className="grid grid-cols-1 md:grid-cols-2 w-full  lg:flex-row justify-between gap-9">
                            {
                                location?.centers?.map((center, j) => (
                                    <div key={j} className="flex flex-col gap-4 w-full bg-white shadow-xl rounded-xl p-6">
                                        <h3 className="font-bold">{center.name}</h3>
                                        {
                                            location.country == "Online Meetings" || location.country == "Réunions en ligne"? 
                                            <div className="flex items-center gap-2">
                                                <BsPeopleFill className="text-lg"/>
                                                <a href={center.address} className="underline text-blue-900">
                                                    {
                                                        language === "eng" ? 
                                                        "Join the platform" : "Rejoindre la plateforme"
                                                    }</a> 
                                            </div>

                                            :

                                            <div className="flex items-center gap-2">
                                                <BsGeoAltFill className="text-lg"/>
                                                <p>
                                                    {center.address}
                                                </p>
                                            </div>

                                        }
                                        {
                                            center.time &&
                                            <div className="flex items-center gap-2">
                                                <BsClockFill className="text-lg"/>
                                                <p className="text-sm">
                                                    {center.time}
                                                </p>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </section>



            {/* <section className="flex flex-col gap-9 w-full ">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <BsHeadset  className="text-xl"/>
                        <h2 className="font-bold text-2xl">
                            {
                                language === "eng" ? 
                                "Audio Messages" : "Messages Audio"
                            }
                        </h2>
                    </div>
                    <Button 
                        type="p rimary" 
                        text={language === "eng" ? "View All" : "Voir tout" }
                        func={() => navigate("/audio-messages")}
                        className="w-fit min-w-[150px] shadow-xl font-bold"
                        icon=""
                        btnType=""
                        isDisabled={false}
                    />
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 w-full gap-[25px]">
                    {
                        messages?.map((m, i) => (
                        <Suspense key={i} fallback={<MessageSkeleton />}>
                            {
                                m?.title?.length < 1  ? '' :
                                <Message 
                                    message={m} i={i} 
                                    messages={messages} 
                                />
                            }
                        </Suspense>
                        ))
                    }

                    {
                        fetching && 
                        <div className="center flex-col gap-3 w-full col-span-2">
                            <LoadingIcon />
                            <p className="">
                                {
                                    language === "eng" ? 
                                    "Fetching messages" : "Récupération des messages"
                                }
                            </p>
                        </div>
                    }
                </div>
            </section> */}

            <section className="flex flex-col gap-9 w-full">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <GrGallery  className="text-xl"/>
                        <h2 className="font-bold text-2xl">
                            {
                                language === "eng" ? "Media" : "Média"
                            }
                        </h2>
                    </div>
                    <Button 
                        type="" 
                        text={language === "eng" ? "View More" : "Voir plus"} 
                        func={() => navigate("/pictures")}
                        className="w-fit min-w-[150px] shadow-xl font-bold"
                        icon=""
                        btnType=""
                        isDisabled={false}
                    />
                </div>
                <div className="grid grid-cols-3 gap-1 md:gap-4 w-full bg-green -400 col-span-3">
                {
                    images.length > 0 &&
                    images?.map((image) => (
                    // <div>
                    //     {image.id}
                        <ImageRenderer 
                        key={image?.fileName} 
                        src={ImageFolders[0].folderName ? `${ImageFolders[0].folderName}/${image.fileName}`
                        : image?.fileName} 
                        alt={image?.fileName} 
                        images={images}
                        folder={ImageFolders[0].folderName}
                        />
                    // </div>
                    ))

                }

                {
                    loading &&
                    <>
                    <ImageLoadingAnimie />
                    <ImageLoadingAnimie />
                    <ImageLoadingAnimie />
                    </>
                }
    </div>
            </section>

            </div>
        </main>
    )
}



export default Home;