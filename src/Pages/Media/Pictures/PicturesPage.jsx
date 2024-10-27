import React, { useEffect, useState, useContext } from 'react'
import { Button } from '../../../Components/Utils/Button'
import GalleryComponent from '../../../Components/Gallery/GalleryComponent'
import { GrGallery } from 'react-icons/gr'
import { FetchImages } from '../../../assets/Functions'
import { AppContext } from '../../../App'
import { useSelector } from "react-redux"

const PicturesPage = () => {
  const { images, setImages } = useContext(AppContext)
  const [ page, setPage ] = useState(0)
  
  const appslice = useSelector((state) => state.appslice)  
  const language = appslice.language


  useEffect(() => {
    FetchImages(setImages, 20, page)
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

        <div className="center flex-col gap-[15vh] w-11/12 lg:w-10/12 mt-[15vh] min-h-screen">
            <section className="flex flex-col gap-9 w-full">
            {/* <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                    <GrGallery  className="text-xl"/>
                    <h2 className="font-bold text-2xl">
                        Media
                    </h2>
                </div>
            </div> */}
            {/* <GalleryComponent images={images.filter((a, i) => i < 4 && a)} /> */}
            {
              <GalleryComponent images={images} />
            }

            {/* <Button
              func={() => {
                setPage(prev => prev + 10)
                FetchImages(setImages, 10, page)
              }}
              text={"View More"}
              className={"w-fit shadow-xl font-bold "}
            /> */}
            </section>

            

        </div>
    </main>
    )
}

export default PicturesPage