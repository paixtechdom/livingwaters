import { useEffect, useState, useRef } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
import { useDispatch, useSelector } from "react-redux"
import { toggleShowImageSlide } from "../../assets/store/ImageSlice"
import { backendLocation } from "../../assets/Constant"


export const ZoomedImage = () => {
    const imageInfo = useSelector((state) => state.imageslice)  
    const showImageSlide = imageInfo.showImageSlide
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [startX, setStartX ] = useState(0)
    const sliderRef = useRef(null)

    // const showImageSlide = false
    const imageSrc = imageInfo.imageSrc
    const images = imageInfo.images
    const dispatch = useDispatch()

   
    useEffect(() =>{
        if (showImageSlide) {
            images.forEach((img, index) => {
            if(imageSrc === img){
                setCurrentIndex(index)
                }
            })
            document.body.style.overflow= 'hidden'

            document.addEventListener('keydown', KeyBoardControls)

            return () => document.removeEventListener('keydown', KeyBoardControls)
        }
    }, [showImageSlide])
    
    const GoLeft = () => {
        setCurrentIndex(prev => prev > 0 && prev - 1)
    }

    const GoRight = () => {
        setCurrentIndex(prev => prev < images.length - 1 ? prev + 1 : images.length -1)
    }

    const CloseSlider = () => {
        dispatch(toggleShowImageSlide(false))
        document.body.style.overflowY= 'scroll'
    }

    const handleTouchStart = (e) => { 
        setStartX(e.touches[0].clientX)
    }
    
    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches[0].clientX - startX
        if(deltaX > 0){
            GoLeft()
        }
        if(deltaX < 0){
            GoRight()
        }
    }

    const KeyBoardControls = (e) =>{
        if(e.key == "ArrowRight" || e.key == "ArrowUp"){
            GoRight()
        }
        if(e.key == "ArrowLeft" || e.key == "ArrowDown"){
            GoLeft()
        }
        if(e.key == "Escape"){
            CloseSlider()
        }
    }
        
    
    return(
        <section className={`fixed transition-all duration-500 md:duration-1000 ease-in-out w-full top-0 h-screen ${showImageSlide ? "left-0" : "left-[5000%]"} overflow-hidden bg-black bg-opacity-95 flex justify-start items-center z-[300]`} 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={sliderRef}
        >

            

            <p className="absolute rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 transition-all duration-500 ease-in-out top-0 left-0 md:top-8 md:left-8 flex justify-center items-center text-white m-2 p-2 px-3 text-lg cursor-pointer z-[301] h-12 w-12" onClick={()=>  CloseSlider()}><i className="bi bi-x-lg"></i></p>
            

            <div className={`flex transition-all duration-500 w-[${images.length * 100}vw]`}
            style={{
                translate: -currentIndex*100+"vw"
            }}>
                {
                    images.map((img, i) => (
                        <EachImage 
                            key={i}
                            i={i}
                            src={img}
                            currentIndex={currentIndex}
                        />   

                    ))
                }
            </div>
            

            <div className="absolute flex w-full lg:w-11/12 justify-between h-9 z-[303]">
                <button disabled={currentIndex == 0} className="active:scale-[1.5] disabled:scale-50 bg-black rounded cursor-pointer bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 center w-6 lg:w-9 h-12 lg:h-24 disabled:cursor-default" onClick={() => GoLeft()}>
                    <i className="bi bi-chevron-left text-xl text-white"></i>
                </button>

                <button disabled={currentIndex == images.length -1} className="active:scale-[1.5] disabled:scale-50 bg-black rounded cursor-pointer bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 center w-6 lg:w-9 h-12 lg:h-24 disabled:cursor-default" onClick={() => GoRight()}>
                    <i className="bi bi-chevron-right text-xl text-white"></i>
                </button>

            </div>
        </section>
    )
}


const EachImage = ({src, i, currentIndex}) => {
    return(
        <div className="w-screen relative h-screen center">

            {/* <div className="absolute top-20 left-20 text-gray-100 font-bold">{currentIndex}</div> */}
            <img src={`${backendLocation}/images/${src}`} alt="" className="w-full h-full object-contain"/>
        {/* <LazyLoadImage 
            src={src} 
        //  height={550}
            placeholderSrc={'An Image'} 
            // effect='blur'
            className="w-full max-h-screen"
    
        /> */}
        </div>
    )
}