import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { backendLocation } from "../../../../assets/Constant"
import EditMessage from "./EditMessage"
import { AppContext } from "../../../../App"
import Cookie from "js-cookie"


const AMessagePage = () => {
    const [ message, setMessage ] = useState({})
    const [ savedFile, setSavedFile ] = useState(null)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const { setLoginTo } = useContext(AppContext)

    const params = useParams()
    useEffect(() => {
        const cookie = Cookie.get('adminCookie')
        // const adminCookie = JSON.parse(cookie)
        setLoggedIn(cookie !== undefined)


        if(cookie == undefined){
            navigate('/admin/login')
            setLoginTo(`/admin/messages/${params.id}`)
        }
        
        fetchMessage()
    }, [])
  const fetchMessage = async () =>{
      await fetch(`${backendLocation}/messages.php/${params.id}`, { method: 'GET'
    }).then(resp => {
        return resp.json()
    }).then(data => {
        setMessage(data)
        setSavedFile(`${backendLocation}/messages/${data.title}`)
        return data
    })
}


    if(loggedIn){
        return(
            <div className="flex items-center flex-col min-h-screen py-[15vh]">
            <div className="w-11/12 lg:10/12 xl:w-9/12 mt-5 flex flex-col gap-[5vh]">
                <div className="text-center">
                    <h1 className="font-bold text-2xl">Edit message</h1>
                </div>
                  <EditMessage message={message} savedFile={savedFile}/>
                </div>
            </div>
        )
    }
        

}

export default AMessagePage