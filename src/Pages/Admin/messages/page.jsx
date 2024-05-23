import MessageComponent from "./MessageComponent"
import { Suspense, useEffect, useState } from "react"
import { backendLocation } from "../../../assets/Constant"
import { LoadingIcon } from "../../../Components/LoadingIcon"
import { HandleSearch, fetchMessages } from "../../../assets/Functions"
import { Button } from "../../../Components/Button"

const MessagesPage = () => {
    const [ messages, setMessages ] = useState([])
    const [ searchInput, setSearchInput ] = useState('')
    const [ fetching, setFetching ] = useState(false)
    const [ total, setTotal ] = useState(0)
    
    useEffect(() => {
        setFetching(true)
        const delay = setTimeout(() => {
            HandleSearch(searchInput, setFetching, setMessages, setTotal)
        }, 1000);
        return () => clearTimeout(delay)
    }, [searchInput])

    
    
    
   

    return(
        <div id="messageContainer" className="center w-full pt-[10vh] lg:pt-[15vh]">
            <div className="flex items-center w-11/12 lg:w-10/12 xl:w-9/12 flex-col gap-[5vh] relative min-h-[100vh]">
                <h1 className="text-2xl font-bold mt-4">Download our Messages</h1>

                <div className="flex bg-white shadow-lg p-3 w-11/12 md:w-10/12 lg:w-9/12 gap-3 items-center rounded-full sticky top-[10vh] lg:top-[15vh] left-0">
                    <i className="bi bi-search p-1 px-2 lg:p-2"></i>
                    <input type="text" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} 
                        placeholder="Search Messages"
                        className="w-full outline-white bg-transparent p-1 lg:p-2"
                        />
                </div>

                {  
                    searchInput !== '' && !fetching && messages.length < 1 ?
                    <div className="w-full text-xl">Showing results for <strong>{searchInput}</strong></div> : ''

                }

                <div className="flex flex-col lg:grid lg:grid-cols-2 w-full gap-[25px]">
                    {
                        messages?.map((m, i) => (
                        <Suspense key={i} fallback={<>Loading Messages</>}>
                            <MessageComponent 
                                message={m} i={i} 
                                messages={messages} 
                            />
                        </Suspense>
                        ))
                    }
                </div>
            {
                total !== messages.length && fetching ? 
                <>
                    <LoadingIcon />
                    <p className="mt-4">
                        Fetching messages
                    </p>
                </> : ''
            }  
            {   
                total == messages.length && messages.length < 1 && !fetching ? 
                <div className="mt-[10vh]">Results for <strong>{searchInput}</strong> not found</div> :''
            } 
            {
                total == messages.length ? 
                    <p className="mt-4">
                        You are all caught up
                    </p>
                 :
                <Button type={'primary'} text={'Load More'} func={() => fetchMessages(messages.length, searchInput, setMessages, setFetching, messages, setTotal)}/>
            }
                
            </div>
        </div>
    )
}

export default MessagesPage