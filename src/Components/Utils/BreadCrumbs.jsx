import { Link } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { setCurrentDropDown } from "../../assets/store/navigation/navigationSlice"


export const BreadCrumbs = ({link, text}) => {
    const dispatch = useDispatch()


    return(
        <section className="w-full center">
            <div className={`relative flex-col bg-primary bg-opacity-5 w-full center gap-2 p-9 py-4 lg:pl-[50px] ${text}`}>
                <div className={` w-full center gap-2 flex-wrap ${text}`}>
                    <Link to="/" className="text-sm text-blue flex items-center gap-1" onClick={() => {
                        dispatch(setCurrentDropDown(""))
                    }}>
                        Living Waters Global Ministry
                        <BiChevronRight className="text-primary"/>
                    </Link>

                    <div className="text-secondary font-bold cursor-pointer">
                        {link}
                    </div> 
                </div>
                
                <div className="w-[200px] border b-2 border-orange-700"></div>
            </div>
        </section>
    )
}