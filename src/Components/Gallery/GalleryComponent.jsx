import { useEffect } from "react";
import ImageRenderer from "./ImageRenderer";
import { useDispatch, useSelector } from "react-redux";
import { addImage, clearImage, setImages } from "../../assets/store/ImageSlice";
import { ImageLoadingAnimie } from "../../Pages/Media/Pictures/PicturesPage";


const GalleryComponent = ({ images, loading }) => {
  
  const dispatch = useDispatch()
  
    useEffect(() =>{ 
      if(images.length > 0) {
        const imagesSlideList = images.map((image) => image.fileName)
  
        dispatch(setImages(imagesSlideList))
      }
    }, [images])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 w-full">
      
      {
        images.length > 0 &&
        images?.map((image, index) => (
          <ImageRenderer key={index} src={image?.fileName} alt={image?.fileName} />
        ))
      }

      {
        loading &&
        <>
          <ImageLoadingAnimie />
          <ImageLoadingAnimie />
          <ImageLoadingAnimie />
        </>
      }
    </div>

  );

};


export default GalleryComponent;
