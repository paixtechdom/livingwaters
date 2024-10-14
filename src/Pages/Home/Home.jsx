import { Suspense, lazy } from "react";
import { Button } from "../../Components/Button"
import { InfoCard } from "../../Components/InfoCard";
import { mission, vision } from "../../assets/Constant";
import { Hero } from "./Hero";



const MesagesList = lazy(() => import("./Messages/MessageList"));



const Home = () => {
    return(
        <main className="center w-full flex-col overflow-hidden">

            <Hero />

            <div className="center w-11/12 lg:w-10/12 flex-col gap-[10vh] overflow-hidden"> 
            {/* hero
            mission
            vision - what we stand for
            imagetext
            social media */}
    
            <section className="flex flex-col gap-9">
                <InfoCard data={mission} title={["Our", "Mission"]}/>
                <InfoCard data={vision} title={["Our", "Vision"]}/>

            </section>


                <MesagesList />  

            </div>
        </main>
    )
}



export default Home;