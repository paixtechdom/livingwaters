import { useRef, useState } from "react"
import { LoadingIcon } from "../../../Components/LoadingIcon"

export const SelectAudioComponent = ({value, setValue, selecting, setSelecting, setAudio}) => {
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
        const reader = new FileReader()
        if(!audioFile.type.includes('audio/')){
            alert('File must be an audio file')
            setSelecting(false)
        }else{
            reader.onload = () => {
                setAudio(reader.result)
                inputRef.current.value = ''
                setValue(audioFile)
                setTimeout(() => {
                    setSelecting(false)
                }, 2000);
            }
    
            if(audioFile){
                reader.readAsDataURL(audioFile)
            }
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        setDragOver(true)
    }
    const handleDragLeave = (e) => {
        e.preventDefault()
        setDragOver(false)    
    }


    return(
        
        <div className="flex flex-col gap-4 center">
            <div className={`center border-2 border-dashed w-full h-[150px] lg:h-[200px] flex-col gap-3 text-sm text-center rounded-2xl cursor-pointer shadow-xl ${dragOver ? 'bg-black bg-opacity-20' : ''} transition-all duration-1000 bg-white`} onClick={() => {
                    inputRef.current.click()
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}>

                {
                    dragOver ?
                    <>
                    <i className="bi bi-download text-2xl"></i>
                    <p className="font-bold text-xl">Drop File Here</p> 
                    </>:
                    <>
                        <i className="bi bi-cloud-upload"></i>
                        <p>Drag & Drop to {value == null ? 'select audio file' : 'replace audio file'}</p> 
                        <p className="text-primary" >or browse</p>
                    </>
                }

               

                
                <input type="file" name="" id="" accept="audio/*" className="hidden"
                ref={inputRef}
                onChange={handleAudioSelect}/>
            </div>
            {
                selecting ? 
                    <div className="mt-9 center gap-5">
                        <LoadingIcon />
                        Processing File
                    </div>
                : ''
            }

    </div>
    )
}