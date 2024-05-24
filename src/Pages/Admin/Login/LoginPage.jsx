import { useState } from "react"
import { Button } from "../../../Components/Button"

const LoginPage = () => {
    const[ email, setEmail ] = useState('')
    const[ password, setPassword ] = useState('')
    const[ showPassword, setShowPassword ] = useState(false)


    return(
        <div className="center w-full min-h-[100vh] pt-[15vh] lg:pt-0">
            <div className="center h-full flex-col lg:flex-row w-11/12 lg:w-10/12 xl:w-9/12 gap-[100px]">

                <form action="" className="bg-gradient-to-l from-blue-100 to-orange-100 center flex-col gap-7 p-5 lg:p-9 w-full rounded-2xl min-h-[60vh] py-[7vh]">
                    <h1 className="text-2xl w-full mb-5 rounded-2xl ">Admin Login</h1>
                   <FormInput 
                    label={'Email'} 
                    value={email} 
                    icon={'envelope-fill'} 
                    setValue={setEmail}
                    type={'text'}
                    placeholder={'Email'}
                    />

                   <FormInput 
                    label={'Password'} 
                    value={password} 
                    icon={'key-fill'} 
                    setValue={setPassword}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={'Password'}
                    />

                    <Button text={'Submit'} type={'primary'} className={'w-full shadow-lg mt-5 text-xl'}/>

                </form>

                <div className="w-full min-h-[50vh] bg-blue-100">

                </div>
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
            <input type={type} placeholder={placeholder} className="bg-white outline-none p-3 rounded-xl shadow-lg" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}