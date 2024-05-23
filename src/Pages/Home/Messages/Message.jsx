import { useEffect, useState } from "react";
import { Button } from "../../../Components/Button";
import { ConvertFileSize, FormatDate, FormatId } from "../../../assets/Functions";
import { backendLocation } from "../../../assets/Constant";


const Message = ({message, i}) => {

    return(
        <div id={FormatId(message.title)} className="center w-full flex-col gap-4 bg-white p-7 rounded-xl shadow-lg  text-sm">

            <h3 className="w-full">{message.title.replaceAll('_', ' ')}</h3>
            <div className="flex flex-wrap gap-3 justify-between items-center w-full">
                <p className="text-gray-700">{FormatDate(message.date)}</p>

                <Button className={'w-fit:w-fit'} text={
                <a download href={`${backendLocation}/messages/${message.title}`} className="flex items-center gap-2 text-[12px]">
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