import React, { useEffect, useState, useContext, useRef } from 'react'
import { Button } from '../../../Components/Utils/Button'
import GalleryComponent from '../../../Components/Gallery/GalleryComponent'
import { GrGallery } from 'react-icons/gr'
// import { FetchImages } from '../../../assets/Functions'
import { AppContext } from '../../../App'
import { useSelector } from "react-redux"
import axios from 'axios'
import { backendLocation, ImageFolders } from '../../../../public/Constant'
import ImageRenderer from '../../../Components/Gallery/ImageRenderer'
import { BreadCrumbs } from '../../../Components/Utils/BreadCrumbs'

const PicturesPage = () => {   
  const appslice = useSelector((state) => state.appslice)  
  const language = appslice.language


  // const HandleScroll = () => {
  //   const pos = LoadMorePositionRef.current.getBoundingClientRect()
  //   console.log(pos.top)
  //   console.log(pos.top < 600 && pos.top > 400)
  //   setPositionSetToLoadMore(pos.top < 600 && pos.top > 400)
  // }


  return (
    <main className="w-full center flex-col min-h-screen mb-[10vh]">
      <section className="w-full center text-center h-[50vh] pt-[15vh] relative">
          <div className="absolute top-0 left-0 h-full w-full bg-darkblue center flex-col">
              <h1 className="font-bold text-3xl md:text-5xl center text-blue-200 white tracking-wide leading-snug bg-lightblue bg-opacity-20 backdrop-blur-lg p-3 px-10 rounded-3xl w-fit">
                  <div className="bi bi-camera-fill mr-3"></div>
                  {language === "eng" ? "Pictures" : "Photos"}
              </h1>
              <BreadCrumbs
                  text={"text-gray-200"}
                  link={language == "eng" ? "Pictures" : "Photos"}
                />
          </div>
      </section>

      <div className="center flex-col gap-12 md:gap-16 w-11/12 lg:w-10/12 min-h -screen mt-[10vh]">

        {
          ImageFolders?.map((folder) => (
            <ImageFolderComponent 
              key={folder?.folderName+folder?.year}
              folder={folder}
            />
          ))
        }

          

      </div>
    </main>
    )
}

export default PicturesPage



export const ImageFolderComponent = ({folder}) => {
  const [ imgs, setImgs ] = useState([])
  const [ startingPoint, setStartingPoint ] = useState(0)
  const [ loading, setLoading ] = useState(true)
  const [ totalNoPictures, setTotalNoPictures ] = useState(0)
  const [ positionSetToLoadMore, setPositionSetToLoadMore ] = useState(0)

  const appslice = useSelector((state) => state.appslice)  
  const language = appslice.language

  const FetchImages = async (lim, startingPoint) => {
    setLoading(true)
    await axios.get(`${backendLocation}/images.php/${lim}/${startingPoint}/${folder?.year}/${(folder?.tag.replaceAll(" ", "-"))}`)
    .then((res) => {
      setImgs([...imgs, ...res.data])
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const getTotalNoOfImages = async () => {
    axios.get(`${backendLocation}/images.php/count/${(folder?.tag.replaceAll(" ", "-"))}/${folder?.year}`)
    .then((res) => {
      setTotalNoPictures(res.data[0].total)
    })

  }

  useEffect(() => {
    FetchImages(3, 0)
    setStartingPoint(3)
    getTotalNoOfImages()
  }, [])

  return(
    <section className="w-full grid grid-cols-3 lg:grid-cols-4 gap-4 relative">

      <div className="flex flex-col gap-3 col-span-3 lg:col-span-1 ">
        <div className="flex items-center justify-between flex-wrap gap-2 bg-white shadow-xl p-3 rounded-xl h-fit">
          <h2 className="font-bold text-lg capitalize">
            {language === "eng" ? folder?.title[0] : folder?.title[1]}
          </h2>
          <p className="text-[12px] font-bold text-gray-500">
            {language === "eng" ? folder?.year[0] : folder?.year[1]}
          </p>
        </div>
    </div>


      <div className="grid grid-cols-3 gap-1 md:gap-4 w-full col-span-3 ">
      {
        imgs.length > 0 &&
        imgs?.map((image) => (
          // <div>
          //     {image.id}
            <ImageRenderer 
              key={image?.fileName} 
              src={folder?.folderName ? `${folder?.folderName}/${image.fileName}`
              : image?.fileName} 
              alt={image?.fileName} 
              images={imgs}
              folder={folder?.folderName}
            />
          // </div>
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


    {
      (imgs.length < totalNoPictures) &&
    <div className="grid col-span-4 w-full justify-end 
    ">
      <Button
            func={() => {
              setStartingPoint(prev => prev + 15)
              FetchImages(15, startingPoint)
            }}
            text={language === "eng" ? "View More" : "Voir plus"} 
            icon={<i className="bi bi-chevron-down ml-1 text-md"> </i>}
            className={"w-fit min-w-[150px] shadow-xl font-bold text-[12.1px]"}
          />
      </div>
    }


    </section>
  )
}





 
export const ImageLoadingAnimie = () => (
  <div className={`relative w-full rounded-lg overflow-hidden object-cover cursor-pointer h-[20vh] lg:h-[30vh] bg-blue-950 animate-pulse opacity-60`}> 
    
  </div>
)

