import { useEffect, useState } from "react";
import { Button } from "../../../Components/Button";
import { ConvertFileSize, FormatDate, FormatId } from "../../../assets/Functions";
import { backendLocation } from "../../../assets/Constant";


const Message = ({message, i}) => {
    function downloadURI(uri, name) {
        var link = document.createElement("a");
        link.download = name; // <- name instead of 'name'
        link.href = uri;
        link.click();
        link.remove();
      }
      

    return(
        <div id={FormatId(message.title)} className="center w-full flex-col gap-4 bg-gradient-to-l from-blue-100 to-orange-100 p-7 rounded-xl shadow-lg  text-sm">

            <h3 className="w-full text-black text-[15px]">{message.title.replaceAll('_', ' ')}</h3>
            <div className="flex flex-wrap gap-3 justify-between items-center w-full">
                <p className="text-gray-700">{FormatDate(message.date)}</p>

                <Button className={'w-fit:w-fit'} text={
                <a href={`${backendLocation}/messages/${message.title}`} className="flex items-center gap-2 text-[12px]" target="_blank">
                    <i className="bi bi-download"></i>
                     Download
                    <p>
                         {ConvertFileSize(message.size)}
                    </p> 
                     </a>} 
                type={'primary'}
                />
            </div>
        </div>
    )
}


export default Message;


// sign up (personal details) - email verification - login - dashboard page - kyc - 


// new page for email verification