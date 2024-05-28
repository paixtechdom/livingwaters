import { Suspense, lazy } from "react";
import { Button } from "../../Components/Button"
import { delayLoad } from "../../assets/Functions";



const MesagesList = lazy(() => delayLoad(import("./Messages/MessageList")));



const Home = () => {
    return(
        <div className="center flex-col gap-[10vh] overflow-hidden pt-[10vh] lg:pt-[15vh]">
                <MesagesList />  

            <div className="parent center w-full  border-t border-primary border-4 bg-primary pb-[10vh] pt-[15vh]">

                <div className="w-10/12 lg:w-9/12 xl:w-8/12 flex flex-col gap-9 lg:gap-[10%] lg:flex-row text-white tracking-wide ">
                    <div className="lg:w-[45%] flex flex-col gap-5">
                        <p className="leading-relaxed">
                            Suscribe to get an alert when we upload messages
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-col items-center flex-row lg:w-[55%] gap-9">
                        <input type="email" placeholder="Enter email address" className="bg-transparent border border-white text-white placeholder-white p-4 outline-none w-11/12 md:w-8/12"/>

                        <Button type='primary' text={'Suscribe'}/>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Home;