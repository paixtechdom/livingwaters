import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { SelectAudioComponent } from "./SelectAudioComponent";
import { ConvertFileSize, FormatDate } from "../../../assets/Functions";
import { Button } from "../../../Components/Button";
import { backendLocation } from "../../../assets/Constant";
import { LoadingIcon } from "../../../Components/LoadingIcon";
import { AppContext } from "../../../App";
import { useNavigate } from "react-router-dom"
import Cookie from "js-cookie"
import { Helmet } from "react-helmet-async";





const UploadNewMessagePage = () => {
    const fileNameRef = useRef()
    const [ audio, setAudio ] = useState(null)
    const [ file, setFile ] = useState(null)
    const [ fileName, setFileName ] = useState('')
    const [ uploading, setUploading ] = useState(false)
    const [ uploaded, setUploaded ] = useState(true)
    const [ selecting, setSelecting ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const { setShowAlert, setAlertType, setAlertMessage, setLoginTo } = useContext(AppContext)

    const navigate = useNavigate()
    
    
    useEffect(() => {
        document.documentElement.scrollTop = 0

        const cookie = Cookie.get('adminCookie')
        // const adminCookie = JSON.parse(cookie)
        setLoggedIn(cookie !== undefined)


        if(cookie == undefined){
            navigate('/admin/login')
            setLoginTo("/admin/upload")
        }
    }, [])

    useEffect(() => {
        setFileName(file?.name)
    }, [file])

    const UploadAudio = async (e) => {
        e.preventDefault()       
        setUploading(true)
        const formData = new FormData();
        formData.append('title', ((fileName).replace(file.name.slice(-4), '') + file.name.slice(-4)))
        formData.append('size', file.size)
        formData.append('tags', 'living tags')
        formData.append('file', file)
        
        try{
            await fetch(`${backendLocation}/messages.php`, {
                method: 'POST',
                body: formData
            }).then(function(response) {
                setFile(null)
                setFileName('')
                setAudio(null)
                setUploading(false)
                setShowAlert(true)
                setAlertType('success')
                setAlertMessage('Message Uploaded successfully')                
                document.documentElement.scrollTop = 0
            })
        }catch(error){
            setShowAlert(true)
            setAlertType('error')
            setAlertMessage('Failed to upload message')           
            document.documentElement.scrollTop = 0
            setUploading(false)
        }
    }

    if(loggedIn){
        return(
            <>
            <Helmet>
                <title>
                    Upload New Message - Living Waters Global Fellowship
                </title>
            </Helmet>

            <main className="flex items-center flex-col min-h-screen py-[15vh]">
                <div className="w-11/12 lg:10/12 xl:w-9/12 mt-5 flex flex-col gap-[10vh]">
                    <div className="text-center">
                        <h1 className="font-bold text-2xl">Upload a new message</h1>
                    </div>
    
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
                    {
                        file !== null && !selecting ?
                            <form encType="multipart/form-data" className="w-full flex center flex-col gap-[5vh] lg:gap-[5vh] bg-gradient-to-l from-blue-100 to-orange-100 p-5 md:p-9 py-[10vh] shadow-xl rounded-xl">
                                <audio src={audio} controls className="col-span-2"/>
    
                                <div className="flex flex-col gap-5 w-full col-span-2">
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
    
                                    <p className="text-sm w-full">
                                        File Size: {ConvertFileSize(file?.size) }
    
                                    </p>
    
                                    <div className="flex flex-col gap-5 w-full">
                                    <p className="text-sm">
                                        Date Created: { FormatDate(file?.lastModified) }
                                    </p>
                                </div>
                                </div>
                                <div className="w-full col-span-2 center">
                                    <Button text={uploading ? 'Uploading Message' : 'Upload Message'}
                                    type={'primary'} className={"w-11/12 md:w-9/12 lg:w-7/12"} icon={uploading ? <LoadingIcon /> :  <i className="bi bi-upload m-3 my-2"></i> } 
                                    btnType={'submit'}
                                    func={UploadAudio}/>
                                </div>
                            </form>
                            
                            : ''
                        }
                    
                    <SelectAudioComponent value={file} setValue={setFile} selecting={selecting} setSelecting={setSelecting} setAudio={setAudio}/>
    
    
                    </div>
                    
                </div>
            </main>
            </>
        )
    }
}



export default UploadNewMessagePage