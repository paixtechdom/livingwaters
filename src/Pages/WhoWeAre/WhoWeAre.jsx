import { About } from "../../assets/Constant"
import { Button } from "../../Components/Utils/Button"
import lead_minister from "../../assets/images/dev/papa.jpg"
import { InfoCard } from "../../Components/Utils/InfoCard"

const WhoWeAre = () => {
  return (
    <main className="w-full relative center flex-col min-h-screen pb-[10vh]">

      <section className="w-full center text-center h-[50vh] bg-no-repeat bg-fixed bg-cover bg-aboutBg relative">
        <div className="absolute top-0 left-0 h-full w-full opacity-90 bg-black center flex-col">
            <h1 className="font-bold text-4xl md:text-5xl w-full center text-blue-200 white tracking-wide leading-snug">
                Who We Are
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
                About.who_we_are.map((j, i) => (
                  <p key={i}>
                    {j}
                  </p>
                ))
              }
            </div>

          </div>
          
          <div className="flex flex-col w-full lg:w-6/12 center gap-4">
            <div className="center w-full h-[60vh] overflow-hidden">
                <img src={lead_minister} alt="Lead Minister" className="h-full w-full object-cover rounded-xl"/>
            </div>
            <div className="flex flex-col text-center">
              <strong>Lead Minister</strong>
              <p>Prophet Onido Innocent</p>
            </div>
          </div>
        </section>
        
        <div className="flex flex-col gap-9">
          <InfoCard data={About.vision.desc} title={["Our", "Vision"]}/>
        </div>

          <div className="flex flex-col gap-3 text-center w-11/12 lg:w-10/12 text-zinc-700">
          {
            About.mission.more.map((j, i) => (
              <p key={i}>
                {j}
              </p>
            ))
          }
          </div>

        <div className="flex flex-col gap-9">
          <InfoCard data={About.mission.desc} title={["Our", "Mission"]}/>
          <p></p>
        </div>

        <div className="flex flex-col gap-7 my-[10vh]">
          <h3 className="font-bold text-center text-4xl">
            Our Core Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {
              About.core_activities.map((act, i) =>(
                <div key={i} className="flex relative shadow-2xl rounded-xl overflow-hidden w-full">
                    <img src={act.img} alt={act.title} className="object-cover h-[50vh] md:h-[40vh] w-full"/>

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