import { Suspense, createContext, lazy, useContext, useEffect, useState } from "react"
import { backendLocation } from "../../../assets/Constant"
import { LoadingIcon } from "../../../Components/LoadingIcon"
import { HandleSearch, delayLoad, fetchMessages } from "../../../assets/Functions"
import { Button } from "../../../Components/Button"
import { AppContext } from "../../../App"
import Cookie from "js-cookie"
import { Helmet } from "react-helmet-async"
import { MessageSkeleton } from "../../../Components/MessageSkeleton"

const MessageComponent = lazy(() => delayLoad(import("./MessageComponent")));


const MessagesPage = () => {
    const [ messages, setMessages ] = useState([])
    const [ searchInput, setSearchInput ] = useState('')
    const [ fetching, setFetching ] = useState(true)
    const [ total, setTotal ] = useState(0)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const { setLoginTo } = useContext(AppContext)

    useEffect(() => {
        const cookie = Cookie.get('adminCookie')
        // const adminCookie = JSON.parse(cookie)
        setLoggedIn(cookie !== undefined)


        if(cookie == undefined){
            navigate('/admin/login')
            setLoginTo("/admin/messages")
        }
    }, [])
    
    useEffect(() => {
        setFetching(true)
        const delay = setTimeout(() => {
            HandleSearch(searchInput, setFetching, setMessages, setTotal)
        }, 1000);
        return () => clearTimeout(delay)
    }, [searchInput])
    
    const refetchMessages = () => {
        HandleSearch(searchInput, setFetching, setMessages, setTotal)
    }
    
    
   if(loggedIn){
       return(
            <>
             <Helmet>
                <title>
                    All Messages Message (Admin) - Living Waters Global Fellowship
                </title>
            </Helmet>
            <main id="messageContainer" className="center w-full py-[10vh] lg:py-[15vh]">
                <div className="flex items-center w-11/12 lg:w-10/12 xl:w-9/12 flex-col gap-[5vh] relative min-h-[100vh]">
                    <h1 className="text-2xl font-bold mt-9"> Messages ({total})</h1>
        
                    <div className="flex bg-white shadow-lg p-3 w-11/12 md:w-10/12 lg:w-9/12 gap-3 items-center rounded-full sticky top-[12vh] lg:top-[15vh] left-0 mb-9">
                        <i className="bi bi-search p-1 px-2 lg:p-2"></i>
                        <input type="text" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} 
                            placeholder="Search for a Message"
                            className="w-full outline-white bg-transparent p-1 lg:p-2"
                            />
                    </div>
        
                    {
                    searchInput !== '' && !fetching && !messages.length < 1 ?
                    <div className="w-full text-xl">
                        Showing results for <strong>{searchInput}</strong>
                    </div> 
                    :  total == messages.length && !fetching && searchInput !== '' ? 
                    <div className="w-full text-xl">
                        Results for <strong>{searchInput}</strong> not found
                    </div> : ''
        
                    }
        
                    <section className="flex flex-col lg:grid lg:grid-cols-2 w-full gap-[25px]">
                        {
                            messages?.map((m, i) => (
                            <Suspense key={i} fallback={<MessageSkeleton />}>
                                <MessageComponent 
                                    message={m} i={i} 
                                    messages={messages} 
                                    refetchMessages={refetchMessages}
                                />
                            </Suspense>
                            ))
                        }
                    </section>
                {
                    fetching ? 
                    <div className="center">
                        <LoadingIcon />
                        <p className="">
                            Fetching messages
                        </p>
                    </div>: 
                    total == messages.length && !messages.length < 1 ? 
                        <p className="mt-4 text-sm font-bold">
                            You are all caught up
                        </p>
                    : messages.length > 1 && total !== messages.length ?
                        <Button type={''}
                        className={'min-w-[250px] mt-9 min-h-[60px] text-xl'}
                        text={'Load More'} func={() => fetchMessages(messages.length, searchInput, setMessages, setFetching, messages, setTotal)}/> : ''
        
                }
                    
                </div>
            </main>
            </>
       )
   }

}

export default MessagesPage