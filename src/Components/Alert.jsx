import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import { Button } from "./Button"

export const Alert = () => {
    const { showAlert, setShowAlert, alertType, alertMessage } = useContext(AppContext)
    const [ show, setShow ] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 10);
        document.body.style.overflow = "hidden"
    }, [])

    return(
        <div className="h-screen w-full flex justify-center items-end fixed top-0 left-0 bg-black bg-opacity-10 z-[60]">
            <div className={`min-h-[40vh] bg-gradient-to-r from-blue-50 to-orange-50 w-full md:w-9/12 lg:w-7/12 xl:w-6/12 rounded-t-2xl shadow-xl center flex-col p-9 py-[7vh] gap-2 transition-all duration-1000 ${show ? '' : 'translate-y-[100%]'}`}>

                <i className={`bi bi-${alertType == 'success' ? 'check-circle-fill text-green-700' : alertType == 'error' ? 'exclamation-circle-fill text-red-700' : ''} text-5xl`}></i>
                
                <h2 className="uppercase text-xl">{alertType}</h2>

                <p className="text-sm text-center my-7">{alertMessage}</p>

                <Button text={'Close'} type={''} className={'text-lg w-10/12 text-[20px] py-[15px] shadow-xl'} func={() => {
                    setShow(false)
                    setTimeout(() => {
                        setShowAlert(false)
                        document.body.style.overflowY = "auto"
                    }, (1000));
                }}/>
            </div>
        </div>
    )
}