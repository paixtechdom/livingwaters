import videoBg from "../../assets/videos/ocean.mp4"

export const Hero = () => {
    return(
        <section className="w-full h-screen center overflow-hidden relative">

            <div className="w-full h-screen overflow-hidden absolute animate-zoom">

                <video src={videoBg} className="absolute w-full h-screen object-cover animate-z oom" autoPlay muted loop>
                </video>
                <div className="absolute w-full h-full bg-black z-10 opacity-70">
                </div>
            </div>
            

            <div className="flex flex-col z-20">
                <h1 className="font-bold text-5xl w-full center text-white">
                    Living Waters Global Ministry
                </h1>
            </div>

        </section>
    )
}