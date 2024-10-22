export const MessageSkeleton = () => {
    return(
        <div className="center w-full flex-col gap-4 bg-white p-7 rounded-xl shadow-lg text-sm bg-gradient-to-l from-blue-200 to-orange-200 overflow-hidden relative animate-pulse">
  
            <h3 className="w-full bg-black opacity-20 w-full p-3 rounded-lg"></h3>

            <div className="flex gap-[100px] justify-between items-center w-full text-gray-700">
                <p className="bg-black opacity-20 w-full p-3 rounded-lg"> </p>
                <p className="bg-black opacity-20 w-full  p-4 rounded-lg">

                </p> 
            </div>
        </div>
    )
}