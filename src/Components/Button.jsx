"use client"

export const Button = ({type, text, func, className, icon, btnType}) => {
    return(
        <button type={btnType} className={`center transition-all duration-1000 rounded-xl hover:scale-90 active:scale-90 cursor-pointer w-fit ${className} text-sm ${type == 'danger' ? 'bg-red-800 text-white' : type == 'primary' ? 'bg-white text-black border-2 border-white' : 'bg-gradient-to-l from-blue-100 to-orange-100 py-[8px] lg:py-[10px]'} px-[25px] py-[10px]`} onClick={func}>
            {text}
            {icon} 
        </button>
    )
}