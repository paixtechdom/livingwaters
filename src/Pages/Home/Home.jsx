import { Suspense, lazy, useContext, useEffect, useState } from "react";
import { Button } from "../../Components/Button"
import { InfoCard } from "../../Components/InfoCard";
import { About, Images, Locations } from "../../assets/Constant";
import upcoming_program from "../../assets/images/dev/hunger and thirst.jpg";
import { Hero } from "./Hero";
import { useNavigate } from "react-router-dom";
import { BsHeadset } from "react-icons/bs";
import { MessageSkeleton } from "../../Components/MessageSkeleton";
import Message from "./Messages/Message";
import { AppContext } from "../../App";
import { LoadingIcon } from "../../Components/LoadingIcon";
import { HandleSearch } from "../../assets/Functions";
import { SlCalender } from "react-icons/sl";
import { FcGallery } from "react-icons/fc";
import { GrGallery } from "react-icons/gr";



const MesagesList = lazy(() => import("./Messages/MessageList"));



const Home = () => {
    const [ currentLocation, setCurrentLocation ] = useState(0)
    const navigate = useNavigate()

    const [ messages, setMessages ] = useState([])
    const [ fetching, setFetching ] = useState(true)
    const [ total, setTotal ] = useState(0)
    const { setShowAlert, setAlertType, setAlertMessage } = useContext(AppContext)

    useEffect(() => {
        
        

        setFetching(true)
        const delay = setTimeout(() => {
            HandleSearch("", setFetching, setMessages, setTotal, setShowAlert, setAlertType, setAlertMessage, 4)            
        }, 1000);
        return () => clearTimeout(delay)


    }, [])


    return(
        <main className="center w-full flex-col overflow-hidden bg-zinc-100 text-zinc-700">

            <Hero /> 

            <div className="center w-11/12 lg:w-10/12 flex-col gap-[15vh] md:gap-[25vh] overflow-hidden mt-[10vh]"> 

            <section className="flex flex-col w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 my-[15vh] text-center gap-8">
                <h2 className="text-4xl">
                    Who we are in <br /> <strong> Living Waters Global Ministry</strong>
                </h2>
                <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae eum non nobis natus tempora alias illo mollitia corrupti maiores inventore cumque blanditiis saepe, sit atque magni tempore. Esse, accusantium.</p>
                <div className="w-full center">    
                    <Button 
                        type="p rimary" 
                        text="Read More" 
                        func={() => navigate("/about")}
                        className="w-fit min-w-[200px] shadow-xl font-bold"
                        icon=""
                        btnType=""
                        isDisabled={false}
                    />
                </div>

            </section>

            <section className="w-full flex flex-col gap-4">
                <h2 className="font-bold text-3xl">
                    Fellowship With Us
                </h2>
                <p>Join us <strong>Onsite</strong> or <strong>Online</strong> for a powerful, life transforming moment with God</p>

                <div className="flex gap-3 my-6">
                    {
                        Locations.map((location, i) => (
                            <div key={i} className={`center p-2 px-6 rounded-lg 
                            ${currentLocation === i ? "shadow-xl bg-gradient-to-l from-blue-100 to-orange-100" : ""} cursor-pointer hover:bg-white transition-all duration-500`} 
                            onClick={() => {
                                setCurrentLocation(i)
                            }}>
                                {location.country}
                            </div>
                        ))
                    }
                </div>

                {
                    Locations.map((location, i) => (
                        currentLocation == i &&
                        <div key={i} className="grid grid-cols-1 md:grid-cols-2 w-full  lg:flex-row justify-between gap-9">
                            {
                                location?.centers?.map((center, j) => (
                                    <div key={j} className="flex flex-col gap-4 w-full bg-white shadow-xl rounded-xl p-6">
                                        <h3 className="font-bold">{center.name}</h3>
                                        {
                                            location.country == "Online Meetings" ? 
                                            <a href={center.address} className="underline text-blue-900">Link to whatsapp group</a> 
                                            :
                                            <p>
                                                {center?.address}
                                            </p>
                                        }
                                            <p>
                                                {center.time}
                                            </p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </section>


            <section className="flex flex-col gap-9 w-full bg-white p-9 py-16 rounded-2xl">
                <div className="flex flex-col gap-4 center">
                    <div className="flex gap-3 items-center">
                        <SlCalender />
                        <h2 className="font-bold text-2xl">
                            Upcoming Program
                        </h2>
                    </div>
                    <Button 
                        type="" 
                        text="Register Now" 
                        func={() => navigate("/register")}
                        className="w-fit min-w-[150px] shadow-xl font-bold"
                        icon=""
                        btnType=""
                        isDisabled={false}
                    />
                </div>
               
                <div className="flex flex-col lg:flex-row gap-9 w-full ">
                    <div className="center overflow-hidden rounded-xl  shadow-xl">
                        <img src={upcoming_program} alt="Upcoming Program" />
                    </div>

                </div>
            </section> 


            <section className="flex flex-col gap-9 w-full ">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <BsHeadset  className="text-xl"/>
                        <h2 className="font-bold text-2xl">
                            Our Audio Messages
                        </h2>
                    </div>
                    <Button 
                        type="p rimary" 
                        text="View All" 
                        func={() => navigate("/messages")}
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
                                Fetching messages
                            </p>
                        </div>
                    }
                </div>
            </section> 

            <section className="flex flex-col gap-9 w-full mt-[10vh] md:mt-[15vh] pb-[50vh]">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <GrGallery  className="text-xl"/>
                        <h2 className="font-bold text-2xl">
                            Picture Gallery
                        </h2>
                    </div>
                    <Button 
                        type="" 
                        text="View More" 
                        func={() => navigate("/messages")}
                        className="w-fit min-w-[150px] shadow-xl font-bold"
                        icon=""
                        btnType=""
                        isDisabled={false}
                    />
                </div>

                <div className="flex flex-col lg:grid md:grid-cols-2 xl:grid-cols-3 w-full gap-[25px]">
                    {
                        Images.map((image, i) => (
                            i < 6 &&
                            <div key={i} className="flex">
                                <img src={image.img} alt={image.img} />
                            </div>
                        ))
                    }             
                </div>
            </section>


            

            {/* <InfoCard data={About.mission} title={["Our", "Mission"]}/>
            <InfoCard data={About.vision} title={["Our", "Vision"]}/> */}
            </div>
        </main>
    )
}



export default Home;