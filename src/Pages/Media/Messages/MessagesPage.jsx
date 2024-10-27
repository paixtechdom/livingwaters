import React from 'react'
import MessagesList from '../../../Components/Sections/MessageList'
import { useSelector } from "react-redux"


const MessagesPage = () => {

    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language

  return (
    <main className="w-full center flex-col min-h-screen mb-[10vh]">
        <section className="w-full center text-center h-[50vh] bg-no-repeat bg-fixed bg-cover bg-messagesBg relative">
            <div className="absolute top-0 left-0 h-full w-full opacity-90 bg-black center flex-col">
                <h1 className="font-bold text-4xl md:text-5xl w-full center text-blue-200 white tracking-wide leading-snug">
                    {language === "eng" ? "Audio Messages" : "Messages audio"}
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