export const LoadingIcon = ({className}) => {
    return(
        <div className={`mx-2`}>
            <div className="rounded-full relative bg-gradient-to-l from-blue-500 to-orange-500 overflow-hidden h-8 w-8 animate-spin center flex-col">
                <div className="h-4 w-4 bg-gray-100 rounded-full z-10">
                </div>
                <div className="absolute bg-white bg-opacity-60 h-6 w-6 rounded-tl-full -top-2 -left-2 z-0"></div>
            </div>
        </div>
    )
}