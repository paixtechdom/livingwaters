import { Suspense, useContext, useEffect, useState } from "react";
import { Button } from "../../Components/Utils/Button"
import { About, Locations, Upcoming_program_content } from "../../../public/Constant";
import { Hero } from "./Hero";
import { useNavigate } from "react-router-dom";
import { BsClockFill, BsGeoAltFill, BsPeopleFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { useSelector } from "react-redux"
import { ImageText } from "../../Components/Sections/ImageText";
import homewho from "../../assets/images/dev/homewho.jpg"
import homewho2 from "../../assets/images/dev/homewho2.jpg"
import { Activities } from "../About/WhoWeAre";
import { Location } from "./Location";


const Home = () => {  

    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language
    const navigate = useNavigate()



    return(
        <main className="center w-full flex-col overflow-hidden min-h-screen pb-[15vh] bg-gray-50 z-10 ">
            
            <Hero /> 
                <div className="mt-[10vh]"></div>
                <ImageText 
                    img2={homewho}
                    img1={homewho2}
                    header={language === "eng" ? "Who we are" : "Qui nous sommes"}
                    desc={About[language].mission.more}
                    btn={
                        <Button 
                            type="" 
                            text={language === "eng" ? "Read More" : "Lire la suite"} 
                            func={() => navigate("/about-us/who-we-are")}
                            className="w-fit min-w-[200px] shadow-xl font-bold"
                            icon=""
                            btnType=""
                            isDisabled={false}
                        />
                    }
                    span={""}
                    subHeader={""}
                />
            <div className="center w-11/12 lg:w-10/12 flex-col gap-[7vh] md:gap-[10vh] overflow-hidden mt-[10vh]"> 
                <section className="flex flex-col gap-9 w-full bg-white p-9 rounded-2xl">
                    <div className="flex flex-col gap-4 center">
                        <div className="flex gap-3 items-center">
                            <SlCalender />
                            <h2 className="font-bold text-2xl">
                                {Upcoming_program_content[language].header}
                            </h2>
                        </div>
                    </div>
                
                    <div className="flex flex-col lg:flex-row gap-9 w-full">
                        <div className="center overflow-hidden">
                            <img src={Upcoming_program_content[language].img} alt={Upcoming_program_content[language].header} className="lg:w-9/12 rounded-xl shadow-xl"/>
                        </div>

                    </div>
                </section> 
            </div>

            <Location
            />

            <Activities />
        </main>
    )
}



export default Home;