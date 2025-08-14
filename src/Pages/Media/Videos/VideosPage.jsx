import React, { useEffect } from 'react'

const VideosPage = () => {

  const vidoeIds = [
    "12ZFbhNYH2jog7zIEeHlwf7NoSD28_HJt"
  ]  

  
  const videoUrl = `https://drive.google.com/drive/folders/`

  useEffect(() => {
    console.log("")
  }, [])
  return (
    <main>
       <div className="w-full aspect-video">
          <iframe
            // src={`https://drive.google.com/drive/folders/${vidoeIds[0]}`}
            // src={`https://drive.google.com/file/d/12ZFbhNYH2jog7zIEeHlwf7NoSD28_HJt/view?usp=sharing`}
            src={`https://drive.google.com/file/d/12ZFbhNYH2jog7zIEeHlwf7NoSD28_HJt/view?usp=sharing`}
            width="100%"
            height="100%"
            allow="autoplay"
            allowFullScreen
            title={`Google Drive Video `}
            className="rounded shadow"
          ></iframe>
        </div>
    </main>
  )
}

export default VideosPage