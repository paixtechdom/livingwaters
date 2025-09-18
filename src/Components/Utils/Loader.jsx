
export const Loader = () => {

    return(
        <div className="fixed bg-gray-100 center w-full h-screen top-0 left-0 flex-col z-[500]">
            <div className="animate-fade center flex-col gap-4">
                <strong className="text-xl text-center capitalize">
                    Living Waters Global Ministry
                </strong>
                <div className={`flex`}>
                    <div className="bg-darkblue flex items-center relative over flow-x-hidden rounded-full h-2 w-[250px]">
                        <div className="bg-white rounded-full shadow-lg size-[20px] border-y bg-o range-700 animateload relative"></div>
                    </div>
                                
                </div>
            </div>
        </div>
    )
}