import { About } from "/public/Constant"
import { Button } from "../../Components/Utils/Button"
import { InfoCard } from "../../Components/Utils/InfoCard"
import { useDispatch, useSelector } from "react-redux"
import homewho2 from "../../assets/images/dev/homewho2.jpg"
import { OtherHeros } from "./OtherHeros"
import abouthero1 from "../../assets/images/dev/abouthero1.jpg"
import abouthero2 from "../../assets/images/dev/abouthero2.jpg"
import abouthero3 from "../../assets/images/dev/abouthero3.jpg"
import { Parallax } from "../../Components/Sections/Parallax"
import { TrimText } from "../../assets/Functions"
import { BreadCrumbs } from "../../Components/Utils/BreadCrumbs"
import { useEffect } from "react"
import { ImageText } from "../../Components/Sections/ImageText"
import { Link } from "react-router-dom"


const WhoWeAre = () => {
    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language


  return (
    <main className="w-full relative center flex-col min-h-screen pb-[10vh] transition-all duration-1000">

        <OtherHeros 
          img2={abouthero2}
          img1={abouthero3}
          header={language === "eng" ? "Who we are" : "Qui nous sommes"}
          desc={About[language].mission.more}
          btn={
              <Button 
                  type="primary" 
                  text={language === "eng" ? "Read More" : "Lire la suite"} 
                  func={() => 
                    document.getElementById('aboutMore')
                      .scrollIntoView({
                        behavior: "smooth"
                      })
                  }
                  className="w-fit min-w-[200px] shadow-xl font-bold"
              />
          }
      />
      <BreadCrumbs
        link={language == "eng" ?"Who we are" : "Qui nous sommes"}
      />
      <div id="aboutMore" className="w-11/12 lg:w-10/12 flex flex-col items-center gap-[10vh] mt-[15vh]">

        <div className="flex flex-col gap-9">
          <InfoCard 
            data={About[language].vision.desc} 
            title={language === "eng" ?["Our", "Vision"] : ["Notre", "Vision"]}
            img={abouthero1}
            />
        </div>

          <div className="flex flex-col gap-3 text-center w-11/12 lg:w-10/12 text-zinc-700">
          {
            About[language].mission.more.map((j, i) => (
              <p key={i}>
                {j}
              </p>
            ))
          }
          </div>

        <div className="flex flex-col gap-9">
          <InfoCard 
            data={About[language].mission.desc} 
            title={language === "eng" ? ["Our", "Mission"] : ["Notre", "Mission"]}
            img={homewho2}
            />
        </div>

        
        {/* <div className="flex flex-col gap-9 mt-[5vh] mb-[10vh] lg:mb-[15vh]">
          <h3 className="font-bold text-center text-4xl">
            {language == "eng" ? "Our Core Values" : "Nos valeurs fondamentales"}
        </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center  ">

            {About[language].core_values.map((value, i) => (
              <div key={i} className="center bg-gradient-to-r from-pink-200 to-blue-200 p-2 px-7 rounded-lg text-darkblue text-lg py-4 items-center">
                <div className="size-4 rounded-full bg-darkblue"></div>
                {value}
              </div>
            ))}
          </div>
        </div> */}



          <div className="my-[-10vh] mb-[10vh]">
            <ImageText 
                header={language === "eng" ? "Our Leaders" : "Nos Dirigeants"}
                desc={About[language].mission.more}
                btn={
                  <Link to="/about-us/our-leaders">
                    <Button 
                        text={language === "eng" ? "Read More" : "Lire la suite"} 
                        className="w-fit min-w-[200px] shadow-xl font-bold"
                        isDisabled={false}
                    />
                  </Link>
                }
            />
          </div>
      </div>      
    </main>
  )
}

export default WhoWeAre


export const Activities = () => {
  const appslice = useSelector((state) => state.appslice)  
  const language = appslice.language

  
  return(
    <div className="w-11/12 lg:w-10/12 flex flex-col gap-7 my-[10vh]">
    <h3 className="font-bold text-center text-4xl">
        {language === "eng" ? "Our Core Activities" : "Nos activités principales"}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full justify-items-center items-center justify-content-center">
        {
        About[language].core_activities.map((act, i) =>(     
          <Parallax 
            key={i} 
            id={TrimText(act.title)} 
            className={"w-full"}
            type={i % 2== 0 ? "left" : i % 3 == 0 ? "right" : ""}
            >
            <div className="flex relative shadow-2xl rounded-xl overflow-hidden w-full">
                <img src={act.img} alt={act.title} className="object-cover h-[50vh] md:h-[40vh] lg:h-[30vh] w-full"/>

                <div className="absolute bottom-0 text-sm left-0 w-full text-center h-[10vh] md:h-[7vh] center bg-opacity-80 text-white">
                    <div className="w-10/12 bg-orange-700 bg-opacity-25 rounded-full p-3 backdrop-blur-lg">
                        {act.title}
                    </div>
                </div>
            </div>
          </Parallax>
        ))
        }
    </div>
    </div>
  )
}