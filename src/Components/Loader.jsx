import { useEffect } from "react"
import { Logo_xl } from "../assets/Constant"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
export const Loader = () => {
    useEffect(() => {

    }, [])
    return(
        <div className="fixed bg-white center w-full h-screen top-0 left-0 flex-col">
            <div className="animate-fade center">
                LIVING WATERS GLOBAL FELLOWSHIP
                    {/* <LazyLoadImage 
                        src={Logo_xl} 
                        placeholderSrc={'ss'} 
                        effect='blur'
                        className="scale-[50%]"
                    /> */}
                    {/* <img src={Logo} alt="" /> */}
            </div>
        </div>
    )
}