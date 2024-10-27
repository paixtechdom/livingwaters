export const Button = ({type, text, func, className, icon, btnType, isDisabled}) => {
    return(
        <button type={btnType} disabled={isDisabled ? isDisabled : false} className={`center transition-all duration-1000 rounded-xl hover:scale-90 active:scale-90 cursor-pointer ${className} text-sm ${type == 'danger' ? 'bg-red-800 text-white' : type == 'primary' ? 'bg-white text-black border-2 border-white' : 'bg-gradient-to-l from-blue-100 to-white py-[10px] lg:py-[12px]'} px-[25px] py-[10px] ${isDisabled ? 'cursor-not-allowed' : ''}`} onClick={func}>
            {text}
            {icon} 
        </button>
    )
}