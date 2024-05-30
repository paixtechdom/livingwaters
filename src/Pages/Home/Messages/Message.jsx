import { useEffect, useState } from "react";
import { Button } from "../../../Components/Button";
import { ConvertFileSize, FormatDate, FormatId } from "../../../assets/Functions";
import { backendLocation } from "../../../assets/Constant";


const Message = ({message, i}) => {
    const handleDownload = () => {
        const url = `${backendLocation}/download.php?file=${encodeURIComponent(message.title)}`;
        fetch(url)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = message.title;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(error => console.error('Download error:', error));
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
        </div>
    )
}


export default Message;


// sign up (personal details) - email verification - login - dashboard page - kyc - 


// new page for email verification