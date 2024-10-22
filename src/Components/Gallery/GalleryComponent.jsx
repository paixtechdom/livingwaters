import React from "react";
import ImageRenderer from "./ImageRenderer";
import { backendLocation } from "../../assets/Constant";


const GalleryComponent = ({ images }) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 auto-rows-[200px] md:auto-rows-[300px] w-full">
      
      {
        images?.map((image, index) => (

        <ImageRenderer key={index} src={`${backendLocation}/images/${image?.fileName}`} alt={image?.fileName} />

        ))
      }

    </div>

  );

};


export default GalleryComponent;
