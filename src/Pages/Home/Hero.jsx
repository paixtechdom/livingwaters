import { useEffect, useState } from "react"
import { About } from "../../../public/Constant"
import videoBg from "../../assets/videos/ocean.mp4"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Button } from "../../Components/Utils/Button"


export const Hero = () => {
    const [ i, setI ] = useState(0)
    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language

    useEffect(() => {
        const int = setInterval(() => {
            slide()
        }, 3000);
        return () => clearInterval(int)
    }, [i])

    const slide = () => {
        setI(i == About[language].core_activities.length - 1 ? 0 : prev => prev + 1 )
    }


    return(
        <section className="w-full h-screen center overflow-hidden relative">

            <div className="w-full h-screen overflow-hidden absolute animate-zoom">

                <video src={videoBg} className="absolute w-full h-screen object-cover animate-z oom" autoPlay muted loop>
                </video>
                <div className="absolute w-full h-full bg-black z-10 opacity-[0.85]">
                </div>
            </div>
            

            <div className="flex flex-col gap-4 z-20 w-11/12 lg:w-10/12">
                <p className="text-white blue-100">
                    {language === "eng" ? "Welcome to" : "Bienvenue à"}
                </p>

                <h1 className="font-bold text-4xl md:text-5xl w-full  text-blue-200 white tracking-wide leading-snug">
                    Living Waters Global Ministry
                </h1>

                <div className="flex cent er flex-col mt-12">
                    <div className="flex relative w-full">

                        {
                            About[language].core_activities.map((act, j) => (
                                <p  key={j}className={`font-bold text-white text-xl transition-all duration-1000 absolute top-0 ${i == j ? "" : "opacity-0 ml-10"} w-full `}>
                                    {act.title}
                                </p>
                            ))
                        }
                    </div>

                    <div className={`h-2 w-16 my-9 bg-gradient-to-r from-pink-300 to-blue-300 ${About[language].core_activities[i].bg}`}></div>
                    
                    <Link to="/partnership">
                        <Button
                            type={"primary"} 
                            text={language == "eng" ? "Become a Partner" : "Devenez partenaire"} 
                            className={""} 
                            icon={<i className="bi bi-chevron-rig ht"></i>}
                            btnType={""} 
                        />
                    </Link>
                </div>



            </div>

        </section>
    )
}