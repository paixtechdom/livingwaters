import { Suspense, lazy, useContext, useEffect, useState } from "react";
import { backendLocation } from "../../../assets/Constant";
import { HandleSearch, delayLoad, fetchMessages } from "../../../assets/Functions";
import { LoadingIcon } from "../../../Components/LoadingIcon";
import { Button } from "../../../Components/Button";
import { MessageSkeleton } from "../../../Components/MessageSkeleton";
import { AppContext } from "../../../App";

const Message = lazy(() => delayLoad(import("./Message")));


const MesagesList = () => {
    const [ messages, setMessages ] = useState([])
    const [ searchInput, setSearchInput ] = useState('')
    const [ fetching, setFetching ] = useState(true)
    const [ total, setTotal ] = useState(0)
    const { setShowAlert, setAlertType, setAlertMessage } = useContext(AppContext)

    useEffect(() => {
        setFetching(true)
        const delay = setTimeout(() => {
            HandleSearch(searchInput, setFetching, setMessages, setTotal, setShowAlert, setAlertType, setAlertMessage )
        }, 1000);
        return () => clearTimeout(delay)
    }, [searchInput])

  
   
    
    


    return(
        <div id="messageContainer" className="center w-full py-[10vh] lg:py-[15vh]">
        <div className="flex items-center w-11/12 lg:w-10/12 xl:w-9/12 flex-col gap-[5vh] relative min-h-[100vh] mt-9">
            <h1 className="text-2xl font-bold">
                Download our Messages
            </h1>

            <div className="flex bg-white shadow-lg p-3 w-11/12 md:w-10/12 lg:w-9/12 gap-3 items-center rounded-full sticky top-[12vh] lg:top-[15vh] left-0 bg-white bg-opacity-90 mb-9">
                <i className="bi bi-search p-1 px-2 lg:p-2"></i>
                <input type="text" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} 
                    placeholder="Search for a Message"
                    className="w-full outline-none bg-transparent p-1 lg:p-2"
                    />
            </div>

            {
                searchInput !== '' && !fetching && !messages.length < 1 ?
                <div className="w-full text-xl">
                    Showing results for <strong>{searchInput}</strong>
                </div> 
                :  total == messages.length && !fetching && searchInput != '' ? 
                <div className="w-full text-xl">
                    Results for <strong>{searchInput}</strong> not found
                </div> : ''

            }

            <div className="flex flex-col lg:grid lg:grid-cols-2 w-full gap-[25px]">
                {
                    messages?.map((m, i) => (
                    <Suspense key={i} fallback={<MessageSkeleton />}>
                        {
                            m?.title?.length < 1  ? '' :
                            <Message 
                                message={m} i={i} 
                                messages={messages} 
                            />
                        }
                    </Suspense>
                    ))
                }
            </div>
            {
                fetching ? 
                <div className="center flex-col gap-3">
                    <LoadingIcon />
                    <p className="">
                        Fetching messages
                    </p>
                </div> : 
                total == messages.length && !messages.length < 1 ? 
                    <p className="mt-4 text-sm font-bold">
                        You are all caught up
                    </p>
                 : messages.length > 1 && total !== messages.length ?
                    <Button type={''} text={'Load More'} 
                    className={'min-w-[250px] mt-9 min-h-[60px] text-xl'}
                    func={() => fetchMessages(messages.length, searchInput, setMessages, setFetching, messages, setTotal)}/> : ''

            }
             
        </div>
        </div>
    )
}


export default MesagesList;