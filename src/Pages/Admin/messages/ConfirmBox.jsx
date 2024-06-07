import { useContext, useEffect, useState } from "react"
import { Button } from "../../../Components/Button";
import { LoadingIcon } from "../../../Components/LoadingIcon";

export const ConfirmBox = ({ prompt, deleting, setPromptAction, DeleteMessage, showPrompt, setShowPrompt }) => {


    useEffect(() => {
        setTimeout(() => {
            setShowPrompt(true)
        }, 10);
        document.body.style.overflow = "hidden"
    }, [])

    return(
        <div className="h-screen w-full center fixed top-0 left-0 bg-black bg-opacity-10 z-[60]">
            <div className={`min-h-[25vh] md:min-h-[40vh] bg-gradient-to-r from-blue-100 to-orange-100 w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12 rounded-2xl shadow-xl center flex-col p-9 py-[7vh] gap-2 transition-all duration-500 ${showPrompt ? '' : 'scale-[0] opacity-0'}`}>
                
                {
                    deleting ?
                    <div className="center">
                        <LoadingIcon />
                        Deleting Message
                    </div> : 
                    <>
                    <h2 className="text-sm text-center w-full">{prompt}</h2>
        
                        <div className="flex w-11/12 gap-[50px] lg:gap-[70px] mt-7">

                            <Button text={'No'} type={''} className={'text-lg w-full text-[20px] py-[15px] shadow-xl'} func={() => {
                                setShowPrompt(false)
                                setTimeout(() => {
                                    setPromptAction(false)
                                    document.body.style.overflowY = "auto"
                                }, (300));
                            }}/>

                            <Button text={'Yes'} type={'danger'} className={'text-lg w-full text-[20px] shadow-xl py-[15px]'} func={() => {
                                DeleteMessage()
                            }}/>

                        </div>
                    </>
                }

            </div>
        </div>
    )
}