"use client"

export const Button = ({type, text, func, className, icon, btnType}) => {
    return(
        <button type={btnType} className={`center transition-all duration-1000 rounded hover:scale-90 active:scale-90 cursor-pointer w-fit ${className} text-sm ${type == 'danger' ? 'bg-red-800 text-white' : type == 'primary' ? 'bg-secondary text-white ' : 'bg-white border border-secondary border-1 lg:border-2 py-[8px] lg:py-[10px]'} px-[20px] py-[10px]`} onClick={func}>
            {text}
            {icon} 
        </button>
    )
}