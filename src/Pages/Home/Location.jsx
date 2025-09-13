import React, { useEffect, useRef, useState } from 'react'
import { Locations } from '../../../public/Constant'
import { useSelector } from 'react-redux'
import { BiSolidChevronLeft, BiSolidChevronLeftCircle, BiSolidChevronRight, BiSolidChevronRightCircle } from 'react-icons/bi'
import { BsClockFill, BsGeoAltFill, BsPeopleFill } from 'react-icons/bs'

export const Location = () => {

    const [ currentLocation, setCurrentLocation ] = useState(0)

    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language

    const [startX, setStartX ] = useState(0)
    const sliderRef = useRef(null)

    const handleTouchStart = (e) => { 
        setStartX(e.touches[0].clientX)
    }
    
    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches[0].clientX - startX
        if(deltaX > 0){
            Prev()
        }
        if(deltaX < 0){
            Next()
        }
    }

    useEffect(() =>{
        document.addEventListener('keydown', KeyBoardControls)
        return () => document.removeEventListener('keydown', KeyBoardControls)
    })
    


    const KeyBoardControls = (e) =>{
        if(e.key == "ArrowRight"){
            Next()
        }
        if(e.key == "ArrowLeft" ){
            Prev()
        }
    }
        


    // CONTROLS FOR SLIDING LOCATIONS
    const Prev = () => {
        setCurrentLocation(currentLocation == 0 ? Locations[language].length-1 : currentLocation - 1 )
    }
    const Next = () => {
        setCurrentLocation(currentLocation < Locations[language].length-1 ? currentLocation + 1 : 0 )
    }


    return(
        <section className="w-full center flex-col bg-fellowship bg-darkblue py-16"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={sliderRef}
        >
        <div className="w-11/12 lg:w-10/12 flex flex-col gap-4 text-gray-200">
            <h2 className="font-bold text-3xl text-gray-200">
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
        </div>
    
        <div className={`flex self-start transition-all duration-500 ease-in-out mt-10 bg-red-30 0`}
            style={{
                width: Locations[language].length *100+"vw",
                transform: `translateX(-${currentLocation*100}vw)`
            }}
        >
            {
                Locations[language]?.map((location, i) => (
                    <div key={i} className="flex justify-center text-sm w-[100vw] h-fit">
                        <div className="flex flex-col  lg:flex-row text-sm w-10/12 lg:w-9/12 gap-5 lg:gap-[50px]">
                            <div className="w-full lg:w-6/12 relative rounded-xl z-10">
                                <div className="absolute -translate-x-2 -translate-y-2 bg-orange-700 w-[100px] h-[100px] rounded-2xl animate-pulse"></div>

                                < div className="lg:hidden absolute bottom-0 right-0  translate-x-2 translate-y-2 bg-orange-700 w-[100px] h-[100px] rounded-br-2xl animate-pulse"></div>
                                <img src={location.img} alt={location.name+"'s Image"} className="object-cover rounded-xl relative lg:h-[40vh]"/>
                            </div>

                            <div className="flex flex-col gap-2 mt-7 text-gray-100 lg:w-6/12">
                                <h3 className="font-bold text-xl text-blue-100">{location.name}</h3>
                                <>
                                    {
                                        location.name == "Online Meetings" || location.name == "Réunions en ligne"? 
                                        <div className="flex items-center gap-2">
                                            <BsPeopleFill className="text-lg text-blue-200"/>
                                            <a href={location.address} className="underline text-gray-100">
                                                {
                                                    language === "eng" ? 
                                                    "Join the platform" : "Rejoindre la plateforme"
                                                }</a> 
                                        </div>
                                        :
                                        <div className="flex items-center gap-2">
                                            <BsGeoAltFill className="text-lg text-blue-200"/>
                                            <p>
                                                {location.address}
                                            </p>
                                        </div>

                                    }
                                    {
                                        location.time &&
                                            location.time.map((time, a) => (
                                                <div key={a} className="flex items-center gap-2">
                                                    <BsClockFill className="text-lg text-blue-200"/>
                                                    <p className="text-sm">
                                                        {time}
                                                    </p>
                                                </div>
                                            ))
                                    }
                                </>
                                <div className="hidden lg:flex justify -between gap-3 mt-9">
                                    <button className="w-16 border border-orange-700 disabled:scale-[0.7] disabled:opacity-40 cursor-pointer scale-90 transition-all ease-in-out duration-500 p-2 pl-3 rounded-l-2xl opacity-75"
                                    disabled={currentLocation ==0}
                                        onClick={Prev}
                                    >
                                        <BiSolidChevronLeft
                                        className="text-5xl text-orange-700"
                                        />
                                    </button>
                                    <button className="w-16 border border-orange-700 disabled:scale-[0.7] disabled:opacity-40 cursor-pointer scale-90 transition-all ease-in-out duration-500 flex justify-end rounded rounded-r-2xl pr-3 p-2 opacity-75"
                                    disabled={currentLocation == Locations[language].length-1}
                                        onClick={Next}
                                    >
                                        <BiSolidChevronRight
                                        className="text-5xl text-orange-700"
                                        />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>

        
    </section>
    )
}
