import { Suspense, useContext, useEffect, useState } from "react";
// import { fetchMessages } from "../../assets/Functions";
import { LoadingIcon } from "../Utils/LoadingIcon";
import { Button } from "../Utils/Button";
import Message from "../Message";
import { MessageSkeleton } from "../Utils/MessageSkeleton";
import { useSelector } from "react-redux"
import axios from "axios";
import { backendLocation } from "../../../public/Constant";
import { useMyAlert } from "../Alert";




const MessagesList = () => {
    const [ messages, setMessages ] = useState([])
    const [ searchInput, setSearchInput ] = useState('')
    const [ fetching, setFetching ] = useState(true)
    const [ total, setTotal ] = useState(0)

    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language
    // const triggerAlert = useMyAlert()

    useEffect(() => {
        setFetching(true)
        const delay = setTimeout(() => {
            FetchMessages()     

        }, 1000);
        return () => clearTimeout(delay)
    }, [searchInput])

  
    const FetchMessages = async () => {
        axios.get( `${backendLocation}/messages.php/0/${30}/${searchInput}`)
            .then((response) => {
                // console.log(response.data)
                setMessages(response.data);
            }).catch(() => {
                triggerAlert('error', 'Error fetching messages. Please wait')
            })
            .finally(() => {
                setFetching(false);
            })
    }
   
    useEffect(() => {
        const filteredlist = messages.filter(a => {
            if(a.title.includes(searchInput) ){
                return a
            }
        })
        setMessages(filteredlist)

        // setMessages(messages.filter(a => a.title.includes(searchInput))))
    }, [searchInput])
    
    


    return(
        <div id="messageContainer" className="center w-full py-[5vh] lg:py-[10vh]">
            <div className="flex items-center w-full flex-col gap-[5vh] relative min-h-[100vh]">

                <div className="flex shadow-lg p-3 w-11/12 md:w-10/12 lg:w-9/12 gap-3 items-center rounded-full sticky top-[12vh] lg:top-[15vh] left-0 bg-white bg-opacity-90">
                    <i className="bi bi-search p-1 px-2 lg:p-2"></i>
                    <input type="text" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} 
                        placeholder={language === "eng" ? "Search for a Message" : "Rechercher un message"}
                        className="w-full outline-none bg-transparent p-1 lg:p-2"
                        />
                </div>

                {
                    searchInput !== '' && !fetching && !messages.length < 1 ?
                    <div className="w-full text-xl">
                        {language === "eng" ? "Showing results for" : "Affichage des résultats pour"} <strong>{searchInput}</strong>
                    </div> 
                    :  total == messages.length && !fetching && searchInput != '' ? 
                    <div className="w-full text-xl">
                        {
                        language === "eng" ?
                        <> 
                            Results for <strong>{searchInput}</strong> not found
                        </> :
                        <> 
                            Résultats pour <strong>{searchInput}</strong> non trouvés
                        </> 
                        }
                    </div> : ''

                }

                <div className="flex flex-col lg:grid lg:grid-cols-2 w-full gap-[25px] lg:gap-[25px]">
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
                            {
                                language === "eng" ? 
                                "Fetching messages" : "Récupération des messages"
                            }                       
                        </p>
                    </div> : 
                    // total == messages.length && !messages.length < 1 ? 
                    //     <p className="mt-4 text-sm font-bold">
                    //         {language==="eng" ?"You are all caught up!" : "Vous avez tout vu!"}
                    //     </p>
                    // : messages.length > 1 && total !== messages.length ?
                    //     <Button type={''} text={language === "eng" ? 'Load More' : "Charger plus"} 
                    //     className={'min-w-[250px] mt-9 min-h-[50px] text-xl shadow-xl'}

                    //     // func={() => fetchMessages(messages.length, searchInput, setMessages, setFetching, messages, setTotal)}
                    //     // // 
                    //     /> :
                     ""

                }
                
            </div>
        </div>
    )
}


export default MessagesList;