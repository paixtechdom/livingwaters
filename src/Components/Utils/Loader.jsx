import { useEffect } from "react"
import { LoadingIcon } from "./LoadingIcon"


export const Loader = () => {

    return(
        <div className="fixed bg-gray-100 center w-full h-screen top-0 left-0 flex-col z-[500]">
            <div className="animate-fade center flex-col gap-4">
                <LoadingIcon />
                <strong className="text-xl text-center">
                    LIVING WATERS GLOBAL Ministry
                </strong>
            </div>
        </div>
    )
}