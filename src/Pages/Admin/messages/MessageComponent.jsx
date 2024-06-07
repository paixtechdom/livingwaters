import { Link } from "react-router-dom"
import { FormatDate, ConvertFileSize } from '../../../assets/Functions'
import { Button } from "../../../Components/Button"
import { backendLocation } from "../../../assets/Constant"
import { ConfirmBox } from "./ConfirmBox"
import { useContext, useState } from "react"
import { AppContext } from "../../../App"
import { useNavigate } from "react-router-dom"
import axios from "axios"



const MessageComponent = ({message, refetchMessages}) => {
    const [ deleting, setDeleting ] = useState(false)
    const [ promptAction, setPromptAction ] = useState(false)
    const [ showPrompt, setShowPrompt ] = useState(false)
    const navigate = useNavigate()
    const { setShowAlert, setAlertType, setAlertMessage } = useContext(AppContext)

    const DeleteMessage = async () => {
        setDeleting(true)
        try{
            await axios.post(`${backendLocation}/messages.php/${encodeURIComponent(message.id)}/admin/messages/delete`)
            .then(data => {
                setTimeout(() => {
                    refetchMessages()
                    setShowAlert(true)
                    setAlertType('success')
                    setAlertMessage('Message deleted successfully')
                }, 500);
            })
        }catch(error){
            setShowAlert(true)
            setAlertType('error')
            setAlertMessage('Failed to delete message')
            setDeleting(false)
        }
        setDeleting(false)
        setShowPrompt(false)
        setPromptAction(false)
        document.body.style.overflowY = "auto"
    }
    return(
        <>
            <div className="center w-full flex-col gap-4 bg-white p-7 rounded-xl shadow-lg text-sm bg-gradient-to-l from-blue-100 to-orange-100">
    
                <h3 className="w-full">{message?.title?.replaceAll('_', ' ')}</h3>

                <div className="flex gap-3 justify-between items-center w-full text-gray-700">
                    <p className="">{FormatDate(message.date)}</p>
                    <p className="">
                        {ConvertFileSize(message.size)}
                    </p> 
                </div>
                <div className="flex flex-wrap  gap-3 justify-between items-center w-full mt-5">
    
                    <Button className={'w-fit'} text={'Edit'}  type={'primary'} func={() => {
                        navigate(`/admin/messages/${message.id}`)
                    }}/>

                    <Button className={'w-fit'} text={'Delete'}  type={'danger'} func={() => {
                        setPromptAction(true)
                    }}/>
                </div>
            </div>
            
            {
                promptAction ?
                <ConfirmBox 
                    promptAction={promptAction} 
                    setPromptAction={setPromptAction} 
                    id={message?.id} 
                    DeleteMessage={DeleteMessage} 
                    deleting={deleting}
                    showPrompt={showPrompt}
                    setShowPrompt={setShowPrompt}
                
                prompt={<span>Do you want to delete <strong> <br/>
                    {message?.title?.replaceAll('_', ' ')}?</strong>
                </span>} /> 
                
                : ''
            }
        </>
        )
    }
    

export default MessageComponent