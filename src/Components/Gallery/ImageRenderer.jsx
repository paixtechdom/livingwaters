import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
import { useDispatch } from "react-redux";
import { setImageSrc, toggleShowImageSlide } from "../../assets/store/ImageSlice";
import { backendLocation } from "../../assets/Constant";


const ImageRenderer = ({ src, alt }) => {
  const dispatch = useDispatch()
 

  return (
    <div className={`relative w-full rounded-lg overflow-hidden object-cover cursor-pointer h-[30vh]`} 
    onClick={() => {  
      dispatch(toggleShowImageSlide(true))
      dispatch(setImageSrc(src))
    }}> 
      <div className="absolute top-0 left-0 w-full h-full bg-blue-950 animate-pulse z-[-1]"></div>
      {/* <Suspense fallback={<ImageLoadingAnimie />}></Suspense> */}
      <img src={`${backendLocation}/images/${src}`} alt={alt} className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out z-10" />
    </div>
  );
};





export default ImageRenderer;
