import React, { useEffect } from "react";
import ImageRenderer from "./ImageRenderer";
import { backendLocation } from "../../assets/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addImage, clearImage } from "../../assets/store/ImageSlice";


const GalleryComponent = ({ images }) => {

  // const dispatch = useDispatch()
  // const imagesFromSlice = useSelector((state) => state.imageslice.images)  
  // const imagesSlideList = images.map((image) => image.fileName)

  // useEffect(() => {
  //   // dispatch(addImage(imagesSlideList))
  //   dispatch(addImage("added imagesSlideList"))
  //   // dispatch(clearImage())
  //   console.log(imagesFromSlice)
  // }, [])



  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 w-full">
      
      {
        images.length > 0 &&
        images?.map((image, index) => (

        <ImageRenderer key={index} src={`${backendLocation}/images/${image?.fileName}`} alt={image?.fileName} />

        ))
      }

    </div>

  );

};


export default GalleryComponent;
