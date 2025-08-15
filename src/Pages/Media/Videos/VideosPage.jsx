import React, { useEffect } from 'react'
import vid1 from "../../../assets/videos/ocean 1.mp4"
import vid2 from "../../../assets/videos/water 1.mp4"
import vid3 from "../../../assets/videos/ocean 2.mp4"
import vid4 from "../../../assets/videos/water.mp4"
import vid5 from "../../../assets/videos/ocean.mp4"
import { useSelector } from 'react-redux'

const VideosPage = () => {

  const appslice = useSelector((state) => state.appslice)  
  const language = appslice.language
  // const vidoeIds = [
  //   "12ZFbhNYH2jog7zIEeHlwf7NoSD28_HJt"
  // ]  
  const vidoes = [
    vid1,
    vid2,
    vid3,
    vid4,
    vid5
  ]  
// https://res.cloudinary.com/dqlalired/video/upload/
  const vidoeUrls = [
    "v1755297050/WhatsApp_Video_2025-07-05_at_17.54.43_b891d567_w6gh1z.mp4",
    "v1755297048/WhatsApp_Video_2025-07-05_at_18.14.22_41a93227_vsq0mx.mp4",
    "v1755297046/WhatsApp_Video_2025-07-04_at_22.49.03_e2fe6529_m28zks.mp4",
    "v1755297042/WhatsApp_Video_2025-07-04_at_16.05.18_70971e21_qyfbhx.mp4",
    "v1755297042/WhatsApp_Video_2025-07-05_at_17.16.06_cc5c8518_yubtmj.mp4",
    "v1755297042/WhatsApp_Video_2025-07-05_at_15.44.01_958a7e4c_xod1kn.mp4",
    "v1755297042/WhatsApp_Video_2025-07-04_at_16.31.19_138d7fd9_hklyf4.mp4"
  ]
  
  const videoUrl = `https://res.cloudinary.com/dqlalired/video/upload/v1755297050/WhatsApp_Video_2025-07-05_at_17.54.43_b891d567_w6gh1z.mp4`

  useEffect(() => {
    console.log("")
  }, [])
  return (
    <main>
      <section className="w-full center text-center h-[20vh] bg-no-repeat bg-fixed bg-cover bg-messagesBg relative">
          <div className="absolute top-0 left-0 h-full w-full opacity-90 bg-black center flex-col">
              <h1 className="font-bold text-4xl md:text-5xl w-full center text-blue-200 white tracking-wide leading-snug">
                  {language === "eng" ? "Videos" : "Photos"}
              </h1>
          </div>
      </section>
      <div className="w-full center">
        <section className="w-5/12 flex flex-col gap-5 p-3">
          {
            vidoeUrls.map((video, i) => (
              <video key={i} src={`https://res.cloudinary.com/dqlalired/video/upload/${video}`} className="aspect-video object -cover bg-gray-500 w-f ull rounded h-full"
              lazy={true}
              controls
              ></video>
            ))
          }
        </section>
    
      </div>
    </main>
  )
}

export default VideosPage

  // {/* <div className="w-full aspect-video">
  //    <iframe
  //      src={`https://drive.google.com/drive/folders/${vidoeIds[0]}`}
  //      src={`https://drive.google.com/file/d/12ZFbhNYH2jog7zIEeHlwf7NoSD28_HJt/view?usp=sharing`}
  //      src={`https://drive.google.com/file/d/12ZFbhNYH2jog7zIEeHlwf7NoSD28_HJt/view?usp=sharing`}
  //      width="100%"
  //      height="100%"
  //      allow="autoplay"
  //      allowFullScreen
  //      title={`Google Drive Video `}
  //      className="rounded shadow"
  //    ></iframe>
  //  </div> */}