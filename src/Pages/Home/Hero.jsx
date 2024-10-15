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
            

            <div className="flex flex-col gap-4 z-20 w-11/12 lg:w-10/12 text-center">
                <p className="text-white blue-100 md:text-lg">
                    Welcome to
                </p>

                <h1 className="font-bold text-4xl md:text-5xl w-full center text-blue-200 white tracking-wide leading-snug">
                    Living Waters Global Ministry
                </h1>


                <q className="text-white blue-100 text-lg md:text-xl">Whoever believes in me, as the scripture has said, "Streams of <strong className="font-bold"> Living Waters </strong> will flow from within him</q>

            </div>

        </section>
    )
}