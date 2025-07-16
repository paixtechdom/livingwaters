import { About } from "../../../public/Constant"
import { Button } from "../../Components/Utils/Button"
import lead_minister from "../../assets/images/dev/papa 1.jpg"
import { InfoCard } from "../../Components/Utils/InfoCard"
import { useSelector } from "react-redux"



const WhoWeAre = () => {
    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language


  return (
    <main className="w-full relative center flex-col min-h-screen pb-[10vh]">

      <section className="w-full center text-center h-[50vh] bg-no-repeat bg-fixed bg-cover bg-aboutBg relative">
        <div className="absolute top-0 left-0 h-full w-full opacity-90 bg-black center flex-col">
            <h1 className="font-bold text-4xl md:text-5xl w-full center text-blue-200 white tracking-wide leading-snug">
                {language === "eng" ? "Who We Are" : "Qui nous sommes"}
            </h1>
        </div>
      </section>

      <div className="w-11/12 lg:w-10/12 flex flex-col items-center gap-[10vh] mt-[10vh]">
        <section className="center flex-col lg:flex-row my-[15vh] gap-[10vh]">
          <div className="flex flex-col w-11/12 gap-8">
            <h2 className="text-4xl font-bold">
              Living Waters Global Ministry
            </h2>
            <div className="flex flex-col gap-2 text-zinc-500">
              {
                About[language].who_we_are.map((j, i) => (
                  <p key={i}>
                    {j}
                  </p>
                ))
              }
            </div>

          </div>
          
          <div className="flex flex-col w-full lg:w-6/12 center gap-4">
            <div className="center w-full h-[70vh] overflow-hidden">
                <img src={lead_minister} alt="Lead Minister" className="h-full w-full object-cover rounded-xl"/>
            </div>
            <div className="flex flex-col text-center">
              <strong>{language === "eng" ? "Lead Minister" : ""}</strong>
              <p className="uppercase">Onido Innocent A.</p>
            </div>
          </div>
        </section>
        
        <div className="flex flex-col gap-9">
          <InfoCard data={About[language].vision.desc} title={language === "eng" ?["Our", "Vision"] : ["Notre", "Vision"]}/>
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
          <InfoCard data={About[language].mission.desc} title={language === "eng" ? ["Our", "Mission"] : ["Notre", "Mission"]}/>
          <p></p>
        </div>

        <div className="flex flex-col gap-7 my-[10vh]">
          <h3 className="font-bold text-center text-4xl">
            {language === "eng" ? "Our Core Activities" : ""}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
            {
              About[language].core_activities.map((act, i) =>(
                <div key={i} className="flex relative shadow-2xl rounded-xl overflow-hidden w-full">
                    <img src={act.img} alt={act.title} className="object-cover h-[50vh] md:h-[40vh] lg:h-[30vh] w-full"/>

                    <div className="absolute bottom-0 [5 0%] top -[50%] left-0 bg-black w-full text-center h-[10vh] md:h-[7vh] center bg-opacity-80 text-white">
                      {act.title}
                    </div>
                </div>
              ))
            }
          </div>
        </div>


      </div>      
    </main>
  )
}

export default WhoWeAre