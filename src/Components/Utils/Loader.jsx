import { useEffect } from "react"
import { LoadingIcon } from "./LoadingIcon"


export const Loader = () => {

    return(
        <div className="fixed bg-white center w-full h-screen top-0 left-0 flex-col">
            <div className="animate-fade center flex-col gap-4">
                <LoadingIcon />
                <strong className="text-xl text-center">
                    LIVING WATERS GLOBAL FELLOWSHIP
                </strong>
            </div>
        </div>
    )
}