import React, { useEffect, useState, useContext, useRef } from 'react'
import { Button } from '../../../Components/Utils/Button'
import GalleryComponent from '../../../Components/Gallery/GalleryComponent'
import { GrGallery } from 'react-icons/gr'
// import { FetchImages } from '../../../assets/Functions'
import { AppContext } from '../../../App'
import { useSelector } from "react-redux"
import axios from 'axios'
import { backendLocation } from '../../../assets/Constant'

const PicturesPage = () => {
  const { images, setImages } = useContext(AppContext)
  const [ startingPoint, setStartingPoint ] = useState(0)
  const [ loading, setLoading ] = useState(true)
  const [ totalNoPictures, setTotalNoPictures ] = useState(0)
  const [ positionSetToLoadMore, setPositionSetToLoadMore ] = useState(0)
  const LoadMorePositionRef = useRef()
  
  
  const appslice = useSelector((state) => state.appslice)  
  const language = appslice.language

  const FetchImages = async (setImages, lim, startingPoint) => {
    setLoading(true)
    await axios.get(`${backendLocation}/images.php/${lim}/${startingPoint}`)
    .then((res) => {
      const newImages = images
      const UpdatedImages = [...newImages, ...res.data]
      setImages(UpdatedImages)
      
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const getTotalNoOfImages = async () => {
    axios.get(`${backendLocation}/images.php/count`)
    .then((res) => {
      setTotalNoPictures(res.data[0].total)
    })

  }

  // const HandleScroll = () => {
  //   const pos = LoadMorePositionRef.current.getBoundingClientRect()
  //   console.log(pos.top)
  //   console.log(pos.top < 600 && pos.top > 400)
  //   setPositionSetToLoadMore(pos.top < 600 && pos.top > 400)
  // }

  // useEffect(() => {
    
  
   
  // }, [setPositionSetToLoadMore])
  

  useEffect(() => {
    getTotalNoOfImages()

    FetchImages(setImages, 20, startingPoint)
    setStartingPoint(20)
    // console.log(images)
    
    // document.addEventListener('scroll', HandleScroll)

    // return () => document.removeEventListener('scroll', HandleScroll)

  }, [])

  return (
    <main className="w-full center flex-col min-h-screen mb-[10vh]">
      <section className="w-full center text-center h-[50vh] bg-no-repeat bg-fixed bg-cover bg-messagesBg relative">
          <div className="absolute top-0 left-0 h-full w-full opacity-90 bg-black center flex-col">
              <h1 className="font-bold text-4xl md:text-5xl w-full center text-blue-200 white tracking-wide leading-snug">
                  {language === "eng" ? "Pictures" : "Photos"}
              </h1>
          </div>
      </section>

      <div className="center flex-col gap-9 w-11/12 lg:w-10/12 min-h-screen">
        {
          images.length > 0 ?
          <section className="flex flex-col gap-9 w-full mt-[10vh] md:mt-[15vh]">
            <GalleryComponent images={images} loading={loading} />
          </section> :
          <>
            {
                loading &&
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4">
                  <ImageLoadingAnimie />
                  <ImageLoadingAnimie />
                  <ImageLoadingAnimie />
                </div>
              }
          </>
        }
        
        {
          images.length !== totalNoPictures &&
          <div ref={LoadMorePositionRef}>
            <Button
              func={() => {
                setStartingPoint(prev => prev + 20)
                FetchImages(setImages, 20, startingPoint)
              }}
              text={"View More"}
              className={"w-fit shadow-xl font-bold "}
            />
          </div>
        }


          

      </div>
    </main>
    )
}

export default PicturesPage

 
export const ImageLoadingAnimie = () => (
  <div className={`relative w-full rounded-lg overflow-hidden object-cover cursor-pointer h-[30vh] bg-blue-950 animate-pulse`}> 
    
  </div>
)