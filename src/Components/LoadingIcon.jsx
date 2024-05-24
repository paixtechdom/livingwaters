export const LoadingIcon = () => {
    return(
        <div className="animate-bounce">
        <div className="scale-[0.6]">
        <div className="rounded-full relative bg-gradient-to-l from-blue-600 to-orange-500 gray-900
        overflow-hidden h-12 w-12 animate-spin center flex-col">
            <div className="bg-gray-100 h-5 w-2 rounded-t-full"></div>
            <div className="rounded-full h-2 w-12 bg-gray-100"></div>
            <div className="bg-gray-100 h-5 w-2 rounded-b-full"></div>

        </div>
        </div>
        </div>
    )
}