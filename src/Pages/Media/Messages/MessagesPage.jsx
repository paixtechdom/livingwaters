import React from 'react'
import { Button } from '../../../Components/Utils/Button'
import GalleryComponent from '../../../Components/Gallery/GalleryComponent'
import { GrGallery } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import MessagesList from '../../../Components/Sections/MessageList'


const MessagesPage = () => {
    const navigate = useNavigate()




  return (
    <main className="w-full center flex-col min-h-screen mb-[10vh]">
        <section className="w-full center text-center h-[50vh] bg-no-repeat bg-fixed bg-cover bg-messagesBg relative">
            <div className="absolute top-0 left-0 h-full w-full opacity-90 bg-black center flex-col">
                <h1 className="font-bold text-4xl md:text-5xl w-full center text-blue-200 white tracking-wide leading-snug">
                    Audio Messages
                </h1>
            </div>
        </section>

        <div className="center flex-col gap-[15vh] w-11/12 lg:w-10/12">
            <section className="flex flex-col min-h-screen w-full">
            <MessagesList />
            </section>            
        </div>
    </main>
  )
}

export default MessagesPage