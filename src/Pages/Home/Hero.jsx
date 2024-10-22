import { useEffect, useState } from "react"
import { About } from "../../assets/Constant"
import videoBg from "../../assets/videos/ocean.mp4"

export const Hero = () => {
    const [ i, setI ] = useState(0)

    useEffect(() => {
        const int = setInterval(() => {
            slide()
        }, 3000);
        return () => clearInterval(int)
    }, [i])

    const slide = () => {
        setI(i == About.core_activities.length - 1 ? 0 : prev => prev + 1 )
    }

    return(
        <section className="w-full h-screen center overflow-hidden relative">

            <div className="w-full h-screen overflow-hidden absolute animate-zoom">

                <video src={videoBg} className="absolute w-full h-screen object-cover animate-z oom" autoPlay muted loop>
                </video>
                <div className="absolute w-full h-full bg-black z-10 opacity-70">
                </div>
            </div>
            

            <div className="flex flex-col gap-4 z-20 w-11/12 lg:w-10/12 text-center">
                <p className="text-white blue-100">
                    Welcome to
                </p>

                <h1 className="font-bold text-4xl md:text-5xl w-full center text-blue-200 white tracking-wide leading-snug">
                    Living Waters Global Ministry
                </h1>

                <div className="flex center flex-col mt-12">
                    <div className="flex relative w-full">

                        {
                            About.core_activities.map((act, j) => (
                                <p  key={j}className={`font-bold text-white text-xl transition-all duration-1000 absolute top-0 ${i == j ? "" : "opacity-0 ml-10"} w-full `}>
                                    {act.title}
                                </p>
                            ))
                        }
                    </div>

                    <div className={`h-2 w-16 mt-9 ${About.core_activities[i].bg}`}></div>

                </div>

                {/* <q className="text-white blue-100 text-lg md:text-xl">Whoever believes in me, as the scripture has said, "Streams of <strong className="font-bold"> Living Waters </strong> will flow from within him</q> */}

            </div>

        </section>
    )
}