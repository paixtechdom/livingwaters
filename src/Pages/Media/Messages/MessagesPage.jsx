import React from 'react'
import MessagesList from '../../../Components/Sections/MessageList'
import { useSelector } from "react-redux"
import { BreadCrumbs } from "../../../Components/Utils/BreadCrumbs"

const MessagesPage = () => {

    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language

  return (
    <main className="w-full center flex-col min-h-screen mb-[10vh]">
      <section className="w-full center text-center h-[50vh] pt-[15vh] relative">
          <div className="absolute top-0 left-0 h-full w-full bg-darkblue center flex-col">
              <h1 className="font-bold text-3xl md:text-5xl center text-blue-200 white tracking-wide leading-snug bg-lightblue bg-opacity-20 backdrop-blur-lg p-3 px-10 rounded-3xl w-fit">
                  <div className="bi bi-mic-fill mr-3"></div>
                    {language === "eng" ? "Audio Messages" : "Messages audio"}
              </h1>
              <BreadCrumbs
                  text="text-gray-200"
                  link={"Messages"}
              />
          </div>
      </section>

        <div className="center flex-col gap-[5vh] w-11/12 lg:w-10/12">
            <section className="flex flex-col min-h-screen w-full">
            <MessagesList />
            </section>            
        </div>
    </main>
  )
}

export default MessagesPage