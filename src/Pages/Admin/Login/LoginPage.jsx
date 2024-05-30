import { useContext, useEffect, useState } from "react"
import { Button } from "../../../Components/Button"
import { LoadingIcon } from "../../../Components/LoadingIcon"
import { backendLocation } from "../../../assets/Constant"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../../../App"
import Cookie from "js-cookie"


const LoginPage = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)
    const [ processing, setProcessing ] = useState(false)
    const [ error, setError ] = useState('')
    const { loginTo  } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        Cookie.remove('adminCookie', {path:'/'})
    }, [])
    
    const Login = async (e) => {
        e.preventDefault()
        setProcessing(true)
        await fetch(`${backendLocation}/login.php/${email}/${password}/login`, {
            method: 'GET'
        }).then(resp => {
            return resp.json()
        })
        .then(data => {
            setTimeout(() => {
                setProcessing(false)
                if(data == 'admin'){
                    Cookie.remove('adminCookie', {path:'/'})
                    Cookie.set('adminCookie', JSON.stringify(data), {
                        expires: 1,
                        path: '/'
                    })
                    navigate(`${loginTo}`)
                }else{
                    setError('Incorrect Login Credentials')
                }
            }, 500);
        })
    }


    return(
        <div className="center w-full min-h-[100vh] lg:pt-0">
            <div className="center h-full flex-col lg:flex-row w-11/12 lg:w-10/12 xl:w-9/12 gap-[100px]">

            <form action="" onSubmit={Login} className="bg-gradient-to-l from-blue-100 to-orange-100 center flex-col gap-7 p-9 w-full md:w-9/12 lg:w-7/12 rounded-2xl min-h-[60vh] py-[10vh] shadow-xl">
                    <Link to={'/'} className="text-sm underline text-blue-700 w-full text-right">
                        Return to the home Page
                    </Link>
                    <h1 className="text-2xl w-full mb-5 rounded-2xl ">Admin Login</h1>

                   <FormInput 
                    label={'Email'} 
                    value={email} 
                    icon={'envelope-fill'} 
                    setValue={setEmail}
                    type={'email'}
                    placeholder={'Enter your email'}
                    />

                   <FormInput 
                    label={'Password'} 
                    value={password} 
                    icon={'key-fill'} 
                    setValue={setPassword}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={'Enter your password'}
                    />
                    <div className="flex gap-3 items-center w-full">

                        <input type="checkbox" name="" id="" className="scale-[1.2]" onChange={(e) => {
                           setShowPassword(!showPassword) 
                        }}/>
                        <p className="text-sm">Show Password</p>

                    </div>
                    {
                        error !== '' ?
                        <p className="text-red-600 text-sm w-full -my-3">
                            {error}
                        </p> 
                        : ''
                    }
                    <Button 
                        btnType={'submit'}
                        isDisabled={processing}
                        text={
                            processing ? 
                            <div className={`text-sm center`}>
                            <LoadingIcon className={'scale-[0.5]'}/>   
                            <p>Please wait</p>           
                            </div>
                            : 
                            <p className="text-lg">LOGIN</p>
                            } type={'primary'} className={`w-full shadow-lg mt-5 bg-opacity-30 hover:bg-white`}
                        />

                </form>

            </div>

        </div>
    )
}


export default LoginPage


const FormInput = ({label, icon, placeholder, value, setValue, type}) => {
    return(
        <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center w-full gap-3">
                <i className={`bi bi-${icon} text-lg`}></i>
                <label htmlFor={label} className="text-sm">{label}</label>
            </div>
            <input type={type} placeholder={placeholder} className="bg-white outline-none p-3 px-5 rounded-xl shad ow-lg text-sm" value={value} onChange={(e) => setValue(e.target.value)} required/>
        </div>
    )
}