import { useEffect, useState, useRef } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
import { useDispatch, useSelector } from "react-redux"
import { toggleShowImageSlide } from "../../assets/store/ImageSlice"
import { backendLocation, ImageFolders } from "../../../public/Constant"


export const ZoomedImage = () => {
    const imageInfo = useSelector((state) => state.imageslice)  
    // const showImageSlide = imageInfo.showImageSlide
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [startX, setStartX ] = useState(0)
    const sliderRef = useRef(null)

    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language

    // const showImageSlide = false
    const { imageSrc, images, currentFolder, showImageSlide } = imageInfo
    const dispatch = useDispatch()

   
    useEffect(() =>{



        if (showImageSlide) {
            images.forEach((img, index) => {
            if(imageSrc === currentFolder+'/'+img?.fileName){
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

            <div className="center gap-5 absolute top-0 left-0 z-[720] w-full  bg-black bg-opacity-80 p-3">
                <div className="flex items-center gap-5 z-[720] w-full lg:w-11/12">
                
                    <div className="bg-gray-500 h-8 w-8 center rounded-full px-2 bg-opacity- 50 hover:bg-opacity-80 transition-all duration-500 ease-in-out cursor-pointer text-lg"
                        onClick={()=>  CloseSlider()}
                    >
                        <i className="bi bi-arrow-left text-gray-200"></i>
                    </div>

                    {
                        ImageFolders.map((folder) => (
                            folder.folderName == currentFolder &&
                            <div key={folder.folderName} className="flex justify-between flex-wrap w-full text-gray-200 uppercase">
                                <h2>{language === "eng" ? folder.title[0] : folder.title[1]}
                                </h2>
                                <p>{folder.year}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            

            

            <div className={`flex transition-all duration-500 w-[${images.length * 100}vw]`}
            style={{
                translate: -currentIndex*100+"vw"
            }}>
                {
                    images.map((img, i) => (
                        <EachImage 
                            key={i}
                            i={i}
                            src={img?.fileName}
                            currentIndex={currentIndex}
                            currentFolder={currentFolder}
                        />   

                    ))
                }
            </div>
            

            <div className="absolute center w-full h-9 z-[303]">
            <div className="flex w-full lg:w-11/12 justify-between h-9 z-[303]">
                <button disabled={currentIndex == 0} className="active:scale-[1.5] disabled:scale-50 bg-black rounded cursor-pointer bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 center w-6 lg:w-9 h-12 lg:h-24 disabled:cursor-default" onClick={() => GoLeft()}>
                    <i className="bi bi-chevron-left text-xl text-white"></i>
                </button>

                <button disabled={currentIndex == images.length -1} className="active:scale-[1.5] disabled:scale-50 bg-black rounded cursor-pointer bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 center w-6 lg:w-9 h-12 lg:h-24 disabled:cursor-default" onClick={() => GoRight()}>
                    <i className="bi bi-chevron-right text-xl text-white"></i>
                </button>

            </div>
            </div>
        </section>
    )
}


const EachImage = ({src, i, currentFolder}) => {
    
    return(
        <div className="w-screen relative h-screen center">
            {/* {src} */}
            {/* <div className="absolute top-20 left-20 text-gray-100 font-bold">{currentIndex}</div> */}
            <img src={`${backendLocation}/images/${currentFolder}/${src}`} alt={src} className="w-full h-full object-contain"/>
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