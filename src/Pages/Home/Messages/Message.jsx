import { useEffect, useState } from "react";
import { Button } from "../../../Components/Button";
import { ConvertFileSize, FormatDate, FormatId } from "../../../assets/Functions";
import { backendLocation } from "../../../assets/Constant";


const Message = ({message, i}) => {
    const [ countdown, setCountdown ] = useState(11)
    const [ clickedDownload, setClickedDownload ] = useState(false)

    const handleDownload = () => {
        setClickedDownload(true)
        const url = `${backendLocation}/download.php?file=${encodeURIComponent(message.title)}`;
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
            })
            .catch(error => {
                alert('Error downloading message. Kindly try again')
            });
            setClickedDownload(false)
            setCountdown(0)
      };


    
    return(
        <div id={FormatId(message.title)} className="center w-full flex-col gap-4 bg-gradient-to-l from-blue-100 to-orange-100 p-7 rounded-xl shadow-lg  text-sm">

            <h3 className="w-full text-black text-[15px]">{message.title.replaceAll('_', ' ')}</h3>
            <div className="flex flex-wrap gap-3 justify-between items-center w-full">
                <p className="text-gray-700">{FormatDate(message.date)}</p>

                <Button className={'w-fit'} text={
                    <span 
                        className="flex items-center gap-2 text-[12px]"
                    >
                        <i className="bi bi-download"></i>
                         Download
                        <span>
                             {ConvertFileSize(message.size)}
                        </span> 
                         </span>
                         } 
                         type={'primary'}
                         func={handleDownload}
                    />
            </div>
            {
                clickedDownload && countdown !== 0 ? 
                <p className="w-full text-blue-900">
                    Please wait... <br />
                    Download is being processed
                </p>   
                : ''
            }
            {
                countdown == 0 ?
                <p className="w-full text-blue-900 cursor-pointer" onClick={handleDownload}>
                    Click here is the download hasn't started
                </p> : ''
            }
            
        </div>
    )
}


export default Message;

