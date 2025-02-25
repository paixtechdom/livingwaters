import { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
import { useDispatch } from "react-redux";
import { setImageSrc, toggleShowImageSlide } from "../../assets/store/ImageSlice";


const ImageRenderer = ({ src, alt }) => {
  const [spanClass, setSpanClass] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const width = img.width;
      const height = img.height;

      let className = "col-span-1 row-span-1"; // default

      if (width > height * 1.5) {
        // If image is much wider than tall
        className = "md:co l-span-2";
      } else if (height > width * 1.5) {
        // If image is much taller than wide
        className = "md:r ow-span-2";
      } else if (width > height * 1.5 && height > width * 1.5) {
        // Both wide and tall
        className = "md:c ol-span-2 md:r ow-span-2";
      }

      setSpanClass(className);
    };
  }, [src]);

  return (
    <div className={`${spanClass} bg-red-500  relative w-full rounded-lg overflow-hidden object-cover cursor-pointer h-[30vh]`} onClick={() => {
      
      dispatch(toggleShowImageSlide(true))
      dispatch(setImageSrc(src))
      
    }}> 
      {/* <LazyLoadImage 
        src={src} 
         height={'100%'}
        placeholderSrc={alt} 
        effect='blur'
        className="h-f ull w-full object-cover"  
      /> */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageRenderer;
