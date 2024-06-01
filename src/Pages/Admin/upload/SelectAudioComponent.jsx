import { useContext, useEffect, useRef, useState } from "react"
import { LoadingIcon } from "../../../Components/LoadingIcon"
import { AppContext } from "../../../App"

export const SelectAudioComponent = ({value, setValue, selecting, setSelecting, setAudio}) => {
    const { setShowAlert, setAlertType, setAlertMessage } = useContext(AppContext)
    const inputRef = useRef()
    const [ dragOver, setDragOver ] = useState(false)

    
    const handleAudioSelect = (e) => {
        setSelecting(true)
        const audioFile = e.target.files[0]
        processAudio(audioFile)
    }
    const handleDrop = (e) => {
        setSelecting(true)
        e.preventDefault()
        setDragOver(false)
        const audioFile = e.dataTransfer.files[0]
        processAudio(audioFile)
    }
    const processAudio = (audioFile) => {
        document.documentElement.scrollTop = 0
        const reader = new FileReader()
        if(!audioFile.type.includes('audio/')){
            setShowAlert(true)
            setAlertType('error')
            setAlertMessage('File must be an audio file')           
            document.documentElement.scrollTop = 0
            setSelecting(false)
            
        }
        else{
            if(audioFile.size > 41943040){
                setShowAlert(true)
                setAlertType('error')
                setAlertMessage('File must not be greater than 40mb')           
                document.documentElement.scrollTop = 0
                setSelecting(false)
            }   
        else{
            reader.onload = () => {
                setAudio(reader.result)
                setValue(audioFile)
                // inputRef.current.value = ""
                setTimeout(() => {
                    setSelecting(false)
                }, 2000);
            }
    
            if(audioFile){
                reader.readAsDataURL(audioFile)
            }
        }
        } 
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        setDragOver(true)
    }
    const handleDragLeave = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        const delay = setTimeout(() => {
           setDragOver(false)
        }, 1500);
        return () => clearTimeout(delay)
    }, [handleDragLeave])



    return(
        
        <section className="w-full flex flex-col gap-4 center">
            {
                selecting ? 
                    <div className="mt-5 center flex-col gap-1">
                        <LoadingIcon />
                        Processing File...
                    </div>
                : 
                <div className={`center border-2 border-dashed w-full h-[200px] lg:min-h-[250px] flex-col gap-3 text-sm text-center rounded-2xl cursor-pointer shadow-xl ${dragOver ? 'bg-black bg-opacity-20' : ''} transition-all duration-1000 bg-white`} onClick={() => {
                        inputRef.current.click()
                    }}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}>

                    {
                        dragOver ?
                        <div>
                        <i className="bi bi-download text-2xl"></i>
                        <p className="font-bold text-xl">Drop File Here</p> 
                        </div>:
                        <div>
                            <i className="bi bi-cloud-upload"></i>
                            <p>Drag & Drop to {value == null ? 'select audio file' : 'replace audio file'}</p> 
                            <p className="text-primary" >or browse</p>
                        </div>
                    }

                

                    
                    <input type="file" name="" id="" accept="audio/*" className="hidden"
                    ref={inputRef}
                    onChange={handleAudioSelect}/>
                </div>
            }

    </section>
    )
}