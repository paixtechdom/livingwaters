import { useContext, useEffect, useState } from "react";
import { Button } from "./Utils/Button";
import { ConvertFileSize, FormatDate, FormatId } from "../assets/Functions";
import { backendLocation } from "../../public/Constant";
import { AppContext } from "../App";
import { BiDownload } from "react-icons/bi";
import { useSelector } from "react-redux"


const 
Message = ({message, i}) => {
    const [ clickedDownload, setClickedDownload ] = useState(false)
    const [ failedDownload, setFailedDownload ] = useState(false)
    const { setShowAlert, setAlertType, setAlertMessage } = useContext(AppContext)
    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language

    const handleDownload = (e) => {
        e.preventDefault()
        if(!clickedDownload){
            setClickedDownload(true)    
            const url = `${backendLocation}/download.php?file=${encodeURIComponent((message.title).replaceAll(" ", "~"))}`;
            fetch(url)
            .then(response => response.blob())
            .then(blob => {
                    setClickedDownload(false)
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = message.title;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    setFailedDownload(false)
                })
                .catch(error => {
                    setShowAlert(true)
                    setAlertType('error')
                    setAlertMessage('Error downloading message. Kindly try again')  
                    setFailedDownload(true)
                });
        }
      };


    
    return(
        <div id={FormatId(message.title)} className="center w-full flex-col gap-4 bg-white p-7 rounded-xl border border-zinc-300 text-sm">

            <p className="w-full text-black text-[15px]">{message.title.replaceAll('_', ' ')}</p>

            <div className="flex flex-wrap gap-3 justify-between items-center w-full">
                {/* <p className="text-gray-700">{FormatDate(message.date)}</p> */}

                <Button className={'w-fit shadow-xl'} 
                text={
                    <span 
                        className="flex items-center gap-2 text-[12px]"
                    >
                        <BiDownload className="text-lg"/>
                            {/* <span>
                                {ConvertFileSize(message.size)}
                            </span>  */}
                            {language === "eng" ? "Download" : "Télécharger"}
                         </span>
                    } 
                    type={''}
                    func={handleDownload}
                    />
            </div>
            {
                clickedDownload  && !failedDownload ?
                    <p className="w-full text-blue-900">
                        Please wait... <br />
                        Download is being processed
                    </p>   
                : 
                ""
            }
            
            {
                failedDownload ?
                <p className="w-full text-blue-900 cursor-pointer" onClick={handleDownload}>
                    Click here if the download hasn't started
                </p>  
                : 
                ""
            }
            
        </div>
    )
}


export default Message;

