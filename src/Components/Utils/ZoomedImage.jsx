import { useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
import { useDispatch, useSelector } from "react-redux"
import { toggleShowImageSlide } from "../../assets/store/ImageSlice"

export const ZoomedImage = () => {
    const imageInfo = useSelector((state) => state.imageslice)  
    const showImageSlide = imageInfo.showImageSlide
    // const showImageSlide = false
    const imageSrc = imageInfo.imageSrc
    const dispatch = useDispatch()
    
    useEffect(() =>{
        if(showImageSlide){
            document.body.style.overflow= 'hidden'
        }
    }, [showImageSlide])
    return(
        <section className={`fixed transition-all duration-500 md:duration-1000 ease-in-out w-full top-0 h-screen ${showImageSlide ? "left-0" : "left-[100%] sca le-0"} bg-black bg-opacity-95 flex justify-center items-center z-[300]`}>

            <div>

                <p className="absolute rounded-xl bg-black top-0 left-0 md:top-8 md:left-8 flex justify-center items-center text-white m-2 p-2 px-3 text-lg cursor-pointer z-[301] h-12 w-12" onClick={()=>  {
                    dispatch(toggleShowImageSlide(false))
                    document.body.style.overflowY= 'scroll'
                }}><i className="bi bi-x-lg"></i></p>

                <LazyLoadImage 
                    src={imageSrc} 
                //  height={550}
                    placeholderSrc={'An Image'} 
                    effect='blur'
                    className="w-full max-h-screen"
            
                />
            </div>

            {/* <div className="absolute flex w-full lg:w-10/12 justify-between h-9 b g-red-300 z-[303]">
                <div className="bg-black rounded cursor-pointer bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 center w-6 lg:w-9 h-12 lg:h-24">
                    <i className="bi bi-chevron-left text-xl text-white"></i>
                </div>

                <div className="bg-black rounded cursor-pointer bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 center w-6 lg:w-9 h-12 lg:h-24">
                    <i className="bi bi-chevron-right text-xl text-white"></i>
                </div>

            </div> */}
        </section>
    )
}