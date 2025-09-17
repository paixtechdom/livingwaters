import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BreadCrumbs } from '../../Components/Utils/BreadCrumbs'
import { About, backendLocation, Locations } from '../../../public/Constant'
import { Link } from 'react-router-dom'
import { Button } from '../../Components/Utils/Button'
import { ImageText } from '../../Components/Sections/ImageText'
import { BsClockFill, BsGeoAltFill, BsPeopleFill } from 'react-icons/bs'
import { InfoCard } from '../../Components/Utils/InfoCard'
import { Parallax } from '../../Components/Sections/Parallax'
import { Activities } from '../About/WhoWeAre'

const IbadanPage = () => {
  const [ i, setI ] = useState(0)
    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language
    const location = Locations[language][1]
    useEffect(() => {
        const int = setInterval(() => {
            slide()
        }, 3000);
        return () => clearInterval(int)
    }, [i])

    const slide = () => {
        setI(i == About[language].core_activities.length - 1 ? 0 : prev => prev + 1 )
    }


  return (
    <main className="center flex-col gap-[10vh] lg:gap-[15vh] mb-[10vh] lg:mb-[15vh]">
        <section className="w-full center text-center h-[70vh] pt-[15vh] relative">
          <div className="absolute top-0 left-0 h-full w-full bg-ibadan center flex-col">
              
            <BreadCrumbs
              text="text-gray-200"
              link={"Ibadan"}
            />


            <div className="flex center flex-col mt-12 w-full">
                <div className="flex relative w-full">

                    {
                        About[language].core_activities.map((act, j) => (
                            <p  key={j}className={`font-bold text-white text-xl transition-all duration-1000 absolute top-0 ${i == j ? "" : "opacity-0 ml-10"} w-full `}>
                                {act.title}
                            </p>
                        ))
                    }
                </div>

                <div className={`h-2 w-16 bg-lightblue my-9 bg-${About[language].core_activities[i].bg}-400`}>
                </div>
                
                <Button
                    type={"primary"} 
                    text={language == "eng" ? "Join us" : "Rejoignez-nous"} 
                    className={""} 
                    icon={<i className="bi bi-chevron-rig ht"></i>}
                    btnType={""} 
                />
              </div>
          </div>
      </section>

      <InfoCard
            data={About[language].vision.desc} 
            title={language === "eng" ?["Our", "Vision"] : ["Notre", "Vision"]}
            img={`${backendLocation}/images/2025-let-us-pray-ibadan/IMG-20250708-WA0016.jpg`}
            btn={
                <Parallax id={"ibadanaboutbtnvision"}>
                    <Link to="/about-us/who-we-are" className="mt-9 z-[2]">
                        <Button 
                            text={language == "eng" ? "Read more" : "Lire la suite"}
                            className={"mt-9 z-[9]"}
                        />
                    </Link>
                </Parallax>
            }
        />
      
      <section className="w-full center flex-col bg-fellowship bg-darkblue py-16">
        <div className="w-11/12 lg:w-10/12 flex flex-col gap-4 text-gray-200">
            <h2 className="font-bold text-3xl text-gray-200">
                {
                    language === "eng" ? 
                    "Fellowship with us" : 
                    "Venez en communion avec nous." 
                }
            </h2>
            <p>
                {
                    language === "eng" ? 
                    "Join us at Ibadan for a powerful, life transforming moment with God" : 
                    "Rejoignez-nous aux Ibadan pour un moment puissant et transformateur avec Dieu." 
                }
                
            </p>
        </div>
    
        <div className={`flex self-start transition-all duration-500 ease-in-out mt-10 bg-red-30 0`}
        >
          <div className="flex justify-center text-sm w-[100vw] h-fit">
              <div className="flex flex-col  lg:flex-row text-sm w-10/12 lg:w-9/12 gap-5 lg:gap-[50px]">
                  <div className="w-full lg:w-6/12 relative rounded-xl z-10">
                      <div className="absolute -translate-x-2 -translate-y-2 bg-orange-700 w-[100px] h-[100px] rounded-2xl animate-pulse"></div>

                      < div className="lg:hidden absolute bottom-0 right-0  translate-x-2 translate-y-2 bg-orange-700 w-[100px] h-[100px] rounded-br-2xl animate-pulse"></div>
                      <img src={location.img} alt={location.name+"'s Image"} className="object-cover rounded-xl relative lg:h-[40vh]"/>
                  </div>

                  <div className="flex flex-col gap-2 mt-7 text-gray-100 lg:w-6/12">
                      <h3 className="font-bold text-xl text-blue-100">{language == "eng" ? "Location" : ""}</h3>
                      <>
                          
                        <div className="flex items-center gap-2">
                            <BsGeoAltFill className="text-lg text-blue-200"/>
                            <p>
                                {location.address}
                            </p>
                        </div>
                        
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
                      
                  </div>

              </div>
          </div>
            
        </div>

        
    </section>

    <div className="flex flex-col gap-9">
          <InfoCard 
            data={About[language].mission.desc} 
            title={language === "eng" ? ["Our", "Mission"] : ["Notre", "Mission"]}
            img={`${backendLocation}/images/2025-let-us-pray-ibadan/IMG-20250710-WA0017.jpg`}
            btn={
                <Parallax id={"ibadanaboutbtn"}>
                    <Link to="/about-us/who-we-are" className="mt-9 z-[2]">
                        <Button 
                            text={language == "eng" ? "Read more" : "Lire la suite"}
                            className={"mt-9 z-[9]"}
                        />
                    </Link>
                </Parallax>
            }

            />
        </div>

        <ImageText 
        img1={`${backendLocation}/images/2025-let-us-pray-ibadan/IMG-20250710-WA0073.jpg`}
        img2={`${backendLocation}/images/workers-meeting-aug-2025/IMG-20250831-WA0034.jpg`}
        header={language === "eng" ? "Fellowship with us" : "Qui nous sommes"}
        desc={About[language].mission.more}
      />
      <Activities />
    </main>
  )
}

export default IbadanPage