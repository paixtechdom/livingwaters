export const LoadingIcon = () => {
    return(
        <>
        <div className="rounded-full relative bg-gray-900 h-8 w-8 animate-spin">
            <div className="center w-full h-full rounded-full">
                <div className="h-4 w-4 bg-white rounded-r-full"></div>
            </div>
            <div className="rounded-l-full h-4 w-4 bg-white absolute top-2"></div>
        </div>
        </>
    )
}