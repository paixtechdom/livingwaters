import { About } from "/public/Constant"
import { Button } from "../../Components/Utils/Button"
import { InfoCard } from "../../Components/Utils/InfoCard"
import { useDispatch, useSelector } from "react-redux"
import homewho from "../../assets/images/dev/homewho.jpg"
import homewho2 from "../../assets/images/dev/homewho2.jpg"
import { OtherHeros } from "./OtherHeros"
import abouthero1 from "../../assets/images/dev/abouthero1.jpg"
import Papa from "../../assets/images/dev/papa 1.jpg"
import abouthero2 from "../../assets/images/dev/abouthero2.jpg"
import abouthero3 from "../../assets/images/dev/abouthero3.jpg"
import { Parallax } from "../../Components/Sections/Parallax"
import { TrimText } from "../../assets/Functions"
import { BreadCrumbs } from "../../Components/Utils/BreadCrumbs"
import { useEffect } from "react"
import { ImageText } from "../../Components/Sections/ImageText"
import { Link } from "react-router-dom"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav, setShowNav } from "../../assets/store/navigation/navigationSlice"


const WhoWeAre = () => {
    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(setShowNav(false))
    //     setCurrentNav(1)
    //     setCurrentDropDownIndex(1)
    //     setCurrentDropDown("About Us")
    // }, [])


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
                  icon=""
                  btnType=""
                  isDisabled={false}
              />
          }
          span={""}
          subHeader={""}
      />
      <BreadCrumbs
        link={"Who we are"}
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

          <Activities />
          <div className="my-[-10vh] mb-[10vh]">
            <ImageText 
                header={language === "eng" ? "Our Leaders" : "Qui nous sommes"}
                desc={About[language].mission.more}
                btn={
                  <Link to="/about-us/our-leaders">
                    <Button 
                        type="" 
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
        {language === "eng" ? "Our Core Activities" : ""}
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