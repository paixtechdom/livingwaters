import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
import { useDispatch } from "react-redux";
import { setCurrentFolder, setImages, setImageSrc, toggleShowImageSlide } from "../../assets/store/ImageSlice";
import { backendLocation } from "../../../public/Constant";
import { useContext, useEffect } from "react";
import { AppContext } from "../../App";


const ImageRenderer = ({ src, alt, images, folder }) => {
  const dispatch = useDispatch()
 


  return (
    <div className={`relative w-full rounded-lg overflow-hidden object-cover cursor-pointer h-[20vh] lg:h-[30vh] shadow-xl`} 
    onClick={() => {  
      dispatch(toggleShowImageSlide(true))
      dispatch(setImageSrc(src))
      dispatch(setImages(images))
      dispatch(setCurrentFolder(folder))
    }}> 
      <div className="absolute top-0 left-0 w-full h-full bg-blue-950 animate-pulse z-[-1]"></div>
      {/* <Suspense fallback={<ImageLoadingAnimie />}></Suspense> */}
      {/* {src} */}
      <img src={`${backendLocation}/images/${src}`} alt={alt} className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out z-10" />
    </div>
  );
};





export default ImageRenderer;
