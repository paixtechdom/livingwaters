import { Link } from "react-router-dom"
import { FormatDate, ConvertFileSize } from '../../../assets/Functions'
import { Button } from "../../../Components/Button"

const MessageComponent = ({message}) => {
    return(
            <div className="center w-full flex-col gap-4 bg-white p-7 rounded-xl shadow-lg  text-sm">
    
                <h3 className="w-full">{message?.title?.replaceAll('_', ' ')}</h3>

                <div className="flex gap-3 justify-between items-center w-full text-gray-700">
                    <p className="">{FormatDate(message.date)}</p>
                    <p className="">
                        {ConvertFileSize(message.size)}
                    </p> 
                </div>
                <div className="flex gap-3 justify-between items-center w-full">
    
                    <Button className={'w-fit'} text={
                        <Link to={`/admin/messages/${message.id}`}>Edit Message</Link>
                    }  type={'primary'} />

                    <Button className={'w-fit'} text={'Delete Message'}  type={'danger'} />
                </div>
            </div>
        )
    }
    

export default MessageComponent