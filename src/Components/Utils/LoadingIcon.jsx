import { BiLoader, BiLoaderAlt, BiLoaderCircle } from "react-icons/bi"
import { FiLoader } from "react-icons/fi"

export const LoadingIcon = () => {
    return(
        <div className={`mx-2 flex flex-col`}>
            
            {/* <div className="size-[50px] bg-darkblue rounded-xl relative">
                <div className="absolute -translate-x-2 -translate-y-2 -z-10 bg-orange-700 size-[20px] rounded animate-pul se"></div>
                <div className="absolute -translate-x-2 -translate-y-2 -z-10 bg-orange-700 size-[20px] rounded animate-pulse"></div>

            </div> */}


            <div className="rounded-full relative bg-gradient-to-l from-blue-500 to-orange-700 overflow-hidden h-8 w-8 animate-spin center flex-col">
                <div className="h-4 w-4 bg-gray-100 rounded-full z-10">
                </div>
                <div className="absolute bg-white bg-opacity-60 h-6 w-6 rounded-tl-full -top-2 -left-2 z-0"></div>
            </div>
        </div>
    )
}