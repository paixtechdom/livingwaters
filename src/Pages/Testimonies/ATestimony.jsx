import React, { useEffect, useState } from 'react'
import { Button } from '../../Components/Utils/Button'

export const ATestimony = ({testimony, show, setShow }) => {
  
  useEffect(() => {
    if(!show){
        document.body.style.overflowY="auto"
    }else{
        document.body.style.overflowY = "hidden"
    }
}, [show])
  
  return (
    <section className={`fixed h-screen w-full overflow-y-auto overflow-x-hidden  bg-darkblue bg-opacity-80 backdrop-blur-lg py-12 ${show ? "left-0" : "left-[-100vw]"} flex justify-center items-start transition-all duration-1000 ease-in-out top-0 `}>


      <div className="flex flex-col gap-3 w-11/12 md:w-9/12 lg:w-8/1/2 text-gray-100">
      <div className="flex flex-col gap-1 border-l-4 border-orange-700 pl-2 ">
          <h3 className="capitalize font-bold text-lightblue text-xl lg:text-2xl">{testimony?.title}</h3>
          <i className="text-sm">Testimony by {testimony?.name}</i>
        </div>

        <div className="flex flex-col leading-relaxed tracking-wide gap-4">
          {
            testimony?.content?.map((con, i) => (
              <p key={i}>{con}</p>
            ))
          }
        </div>

        <Button
          text="Close"
          func={() => {
            setShow(false)
          }}
          className={"w-[150px] font-bold text-darkblue"}
        />
      </div>

    </section>
    
  )
}
