export const Button = ({type, text, func, className, icon, btnType, isDisabled}) => {
    return(
        <button 
            type={btnType} 
            disabled={isDisabled ? isDisabled : false} 
            className={`center transition-all duration-1000 rounded-xl hover:scale-90 active:scale-90 cursor-pointer border border-orange-700 border-opacity-20
            ${className}  ${type == 'danger' ? 'bg-red-800 text-white' : type == 'primary' ? 'bg-white text-black border-2 border-white' : 'bg-gradient-to-l from-orange-100 to-blue-200'}
            
            px-[30px] py-[15px] 
            ${isDisabled ? 'cursor-not-allowed' : ''} group`} 
            onClick={func}>
                <div className={`absolute top-0 left-0 h-full bg-gradient-to-l from-pink-400 to-blue-500 opacity-30 w-0 rounded-lg group-hover:w-full group-active:w-full z-[0] transition-all duration-500`}></div>
                {text}
                {icon} 
        </button>
    )
}