import { jsDownload } from "react-use-downloader"
import { Button } from "../../../Components/Button"
import { ConvertFileSize } from "../../../assets/Functions"

import useDownloader from 'react-use-downloader';

export const DownLoad = () =>  {
const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();


    return(
         <Button className={'w-fit'} text={
            <div className="flex items-center gap-2 text-[12px]">
                <i className="bi bi-download"></i>
                    Download
                <p>
                        {ConvertFileSize(message.size)}
                </p> 
                    </div>} 
                type={'primary'}
                func={() => {
                    jsDownload(`${backendLocation}/messages/${message.title}`, message.title)
                }}
            />
    )
}