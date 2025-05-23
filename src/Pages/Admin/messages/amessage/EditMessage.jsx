import { useContext, useEffect, useState } from "react"
import { SelectAudioComponent } from "../../upload/SelectAudioComponent"
import { backendLocation } from "../../../../assets/Constant"
import { ConvertFileSize, FormatDate } from "../../../../assets/Functions"
import { Button } from "../../../../Components/Utils/Button"
import { LoadingIcon } from "../../../../Components/Utils/LoadingIcon"
import { PageNotFound } from "../../../PageNotFound"
import { AppContext } from "../../../../App"
import { useNavigate } from "react-router-dom"
import { ConfirmBox } from "../ConfirmBox"
import axios from "axios"




const EditMessage = ({message, savedFile}) => {

    const navigate = useNavigate()
    const [ file, setFile ] = useState(savedFile)
    const [ audio, setAudio ] = useState(savedFile)
    const [ fileName, setFileName ] = useState('')
    const [ uploading, setUploading ] = useState(false)
    const [ selecting, setSelecting ] = useState(false)

    const [ promptAction, setPromptAction ] = useState(false)
    const [ deleting, setDeleting ] = useState(false)
    const [ showPrompt, setShowPrompt ] = useState(false)
    const { setShowAlert, setAlertType, setAlertMessage } = useContext(AppContext)

    const DeleteMessage = async () => {
        setDeleting(true)
        try{
            await fetch(`${backendLocation}/messages.php/${encodeURIComponent(message.id)}/admin/messages/delete`, {
                method: 'POST',
            })
            .then(data => {
                setTimeout(() => {
                    navigate('/admin/messages')
                    setShowAlert(true)
                    setAlertType('success')
                    setAlertMessage('Message deleted successfully')
                }, 1000);
            })
        }catch(error){
            setTimeout(() => {
                setShowAlert(true)
                setAlertType('error')
                setAlertMessage('Failed to delete message')
            }, 1000);
        }
        setTimeout(() => {
            setDeleting(false)
            setShowPrompt(false)
            setPromptAction(false)
        
        }, 1000);

        document.body.style.overflowY = "auto"
    }


    useEffect(() => {
        setFile(savedFile)
        setAudio(savedFile)
        setFileName(message.title)
    }, [savedFile])
    
    useEffect(() => {
        setFileName(
            typeof(file) == 'string' && file?.replaceAll(`${backendLocation}/messages/`, '') == message.title 
            ?  message.title
            : file?.name)
    }, [file])

    const UpdateAudio = async (e) => {
        e.preventDefault()       

        const changedName = typeof(file) == 'string' && file?.replaceAll(`${backendLocation}/messages/`, '') == message.title
        
        setUploading(true)
        if(file !== savedFile){
            // changed file 
            const formData = new FormData();
            formData.append('title', ((fileName).replace(file.name.slice(-4), '') + file.name.slice(-4)))
            formData.append('size', file.size)
            formData.append('currentTitle', message.title)
            formData.append('tags', 'living tags')
            formData.append('file', file)
            
            try{
                await fetch(`${backendLocation}/messages.php/${message.id}/update`, {
                    method: 'POST',
                    body: formData
                }).then(function(response) {
                    setUploading(false)
                    setShowAlert(true)
                    setAlertType('success')
                    setAlertMessage('Message updated successfully')                   
                    document.documentElement.scrollTop = 0
                })
            }catch(error){
                setShowAlert(true)
                setAlertType('error')
                setAlertMessage('Failed to update message')               
                document.documentElement.scrollTop = 0
                setUploading(false)
            }
        }
        else if(changedName){
            // cnahged name
            const formData = new FormData();
            formData.append('title', ((fileName).replace(message.title.slice(-4), '') + message.title.slice(-4)))            
            formData.append('currentTitle', message.title)
            try{
                await fetch(`${backendLocation}/messages.php/${message.id}/updateTitle`, {
                    method: 'POST',
                    body: formData
                }).then(function(response) {
                    setUploading(false)
                    setShowAlert(true)
                    setAlertType('success')
                    setAlertMessage('Message Title Update Succesfully')  
                    document.documentElement.scrollTop = 0
                })
            }catch(error){
                setShowAlert(true)
                setAlertType('error')
                setAlertMessage('Error updating message title')
                document.documentElement.scrollTop = 0
                setUploading(false)
            }
        }       
    }

    
    return(
        <>
            {
            message?.title ? 
            message?.title == undefined ?
                <PageNotFound /> 
                :
                <>
                    <section className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
                        {
                            file !== null ?
                            <form encType="multipart/form-data" className="w-full flex center flex-col mt-[5vh] gap-[5vh] lg:gap-[6vh] bg-gradient-to-l from-blue-100 to-orange-100 p-5 md:p-9 py-[10vh] shadow-xl rounded-xl">
                                <audio src={audio} controls className="col-span-2"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <div className="flex items-center gap-3">
                                        <p className="text-sm">Edit File Name</p>
                                    </div>
                                    <input type="text" 
                                    className="text-sm p-4 shadow-lg rounded-lg bg-white outline-gray-300" 
                                    placeholder="File name"
                                    value={fileName} 
                                    onChange={(e) => {
                                        setFileName(e.target.value)
                                    }}
                                    />
            
                                </div>
                                <div className="w-full flex-wrap flex gap-4">
            
                                    {
                                        typeof(file) == 'string' && file?.replaceAll(`${backendLocation}/messages/`, '') == message.title ?
                                        <p className="text-sm w-full">
                                            File Size: {ConvertFileSize(message?.size) }
                                        </p> :
                                        <p className="text-sm w-full">
                                            File Size: {ConvertFileSize(file?.size) }
                                        </p>  
                                    }
            
                                    <div className="flex flex-col gap-5 w-full">
                                        <p className="text-sm">
                                        Date: { 
                                        message?.title !== fileName ? 
                                        FormatDate(new Date()) :
                                        FormatDate(message?.date) 
                                        }
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="w-full col-span-2 center flex-col gap-5">
                                    {
                                        
                                        message?.title !== fileName ?
                                        <>
                                            <Button text={uploading ? 'Saving Changes' : 'Save Changes'}
                                            type={'primary'} className={"w-11/12 md:w-9/12 lg:w-7/12"} icon={uploading ? <LoadingIcon /> : <i className="text-lg mx-3 bi bi-save"/> } 
                                            btnType={'submit'}
                                            func={UpdateAudio}/>
            
            
                                            <Button text={'Cancel'}
                                            type={''} className={"w-11/12 md:w-9/12 lg:w-7/12 border-2 border-white"} 
                                            func={(e) => {
                                                e.preventDefault()
                                                setFile(savedFile)
                                                setAudio(savedFile)
                                            }}/> 
                                        </>  : '' 
            
                                    }

                                <Button className={'w-11/12 md:w-9/12 lg:w-7/12'} text={'Delete'}  type={'danger'} func={(e) => {
                                    e.preventDefault()
                                    setPromptAction(true)
                                }}/>
                                </div>                    
                            </form>
                            : ''
                        }
            
            
                        <SelectAudioComponent value={file} setValue={setFile} audio={audio} setAudio={setAudio} selecting={selecting} setSelecting={setSelecting}/>
                        
                        
                    </section>

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
                : '' 
            }
        </>
    )

}


export default EditMessage