import { Link } from "react-router-dom"
import { FormatDate, ConvertFileSize } from '../../../assets/Functions'
import { Button } from "../../../Components/Button"
import { backendLocation } from "../../../assets/Constant"

const MessageComponent = ({message, refetchMessages}) => {
    const DeleteMessage = async () => {
        try{
            await fetch(`${backendLocation}/messages.php/${message.id}`, {
                method: 'DELETE',
            })
            .then(data => {
                setTimeout(() => {
                    alert('Message deleted successfully')
                    refetchMessages()
                }, 500);
            })
        }catch(error){
            setFetching(false)
            alert('Error deleting message')
        }
    }
    return(
            <div className="center w-full flex-col gap-4 bg-white p-7 rounded-xl shadow-lg text-sm bg-gradient-to-l from-blue-100 to-orange-100">
    
                <h3 className="w-full">{message?.title?.replaceAll('_', ' ')}</h3>

                <div className="flex gap-3 justify-between items-center w-full text-gray-700">
                    <p className="">{FormatDate(message.date)}</p>
                    <p className="">
                        {ConvertFileSize(message.size)}
                    </p> 
                </div>
                <div className="flex flex-wrap gap-3 justify-between items-center w-full">
    
                    <Button className={'w-fit'} text={
                        <Link to={`/admin/messages/${message.id}`}>Edit Message</Link>
                    }  type={'primary'} />

                    <Button className={'w-fit'} text={'Delete Message'}  type={'danger'} func={() => {
                        DeleteMessage()
                    }}/>
                </div>
            </div>
        )
    }
    

export default MessageComponent