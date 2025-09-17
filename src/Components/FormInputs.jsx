import { FC, useEffect, useState } from "react"
import { BiX } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { countries } from "../../public/Constant"
import { useSelector } from "react-redux"

// ******************* INPUT FIELD************************//



export const InputField = ({type, label, className, handleChange, name, value, children, isReadonly, func, placeholder, icon }) => {
    return(
        <div id={name} className={`flex flex-col w-full gap-2 ${className} relative`}>
            <label htmlFor={label} className={`${value == "" ? "text-darkblue" : "text-gray-500"} font-bold text- sm`}>
                {label}
            </label>

            <div className={`flex rounded-full  w-full items-center relative shadow-lg bg-white text-gray-900  border-opacity-30 ${value !== "" ? "" : ""} cursor-pointer
                 ${func ? 'cursor-pointer' : ''} overflow-hidden`} onClick={() => func && func()}>
                     
                    <input 
                        type={type}
                        onChange={(e) => handleChange(e)}
                        name={name}
                        required
                        value={value}
                        readOnly={isReadonly}
                        placeholder={placeholder}
                        className={` border-none w-full outline-none py-[12px] px-5 text-gray-800 ${func && children !== undefined ? 'cursor-pointer' : ''}`}
                    />

                    {icon}
            </div>



            {children}
        </div>
    )
}



// *************** SELECT OPTIONS **************************//


export const Select = ({setShowPopUp, showPopUp, options, formInputs, name, label, gridDisplay}) => {
   
    return(
            <div className={`absolute w-full flex flex-col bg-darkblue bg-opacity-90 backdrop-blur-3xl border border-orange-700 border-opacity-30 shadow-xl rounded-xl h-fit gap-6 p-9 transition-all duration-500 ${showPopUp == name ? 'z-[20]' : '-z-[10] opacity-[0] scale-[0.8] translate-y-32'} max-h-[70vh] overflow-y-auto`}>

                <div className="w-full flex justify-between items-center cursor-pointer sticky top-0 bg-primary bg-opacity-80 backdrop-blur-3xl z-[20] p-3 px-6 rounded-full" onClick={() => {setShowPopUp(false)}}>
                    <label htmlFor={label} className="font-bold text-zinc-200 text-xl">
                        {label}
                    </label>
                    <BiX className="text-3xl text-gray-200 bg-secondary rounded-full p-1 size-8 btn"/>
                </div>

                <div className={`${gridDisplay ? `grid grid-cols-5` : "flex flex-col"}  gap-3 w-full`}>

                    {
                        options?.map((o, i) => (
                            <div key={i} className={`py-3 border border-orange-700 border-opacity-30 px-5 w-full rounded-full text-lightblue hover:text-darkblue cursor-pointer hover:bg-lightblue transition-all duration-1000 ease-in-out active:bg-darkblue ${formInputs[name] == o ? "bg-darkblue" : ""}`} onClick={() => {
                                formInputs[name] = o
                                setShowPopUp('')
                            }}>
                                {o}
                            </div>
                        ))
                    }

                </div>
            </div>
    )
}




// ************* RADIO BUTTONS *************************


export const RadioSelect = ({options, formInputs, label, name, setFormInputs }) => {
    return(
        <div className={`flex flex-col w-full gap-2 relative`}>
            <label htmlFor={label} className={`${formInputs[name] !== "" ? "text-tertiary" : "text-zinc-900"} font-bold text-sm`}>
                {label}
            </label>
            <div className="flex flex-col gap-2">
                {
                    options.map((o, i) => (
                        <div key={i} className="flex items-center gap-2 cursor-pointer" onClick={() => {
                            setFormInputs({
                                ...formInputs, 
                                [name]: o
                            })
                         }}>
                            <div className={`size-5 transition-ll duration-1000 rounded-full border-2 ${formInputs[name] == o ? "bg-primary" : "bg-secondary border border-gray-100"}`}></div>
                            <span className={`${formInputs[name] == o ? "font-bold" : "last:"}`}>{o}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


// ************SELECT COUNTRIES ***************************//




export const CountriesOption = ({setFormInputs, setShowCountries, showCountries, searchInput, setSearchInput, formInputs }) => {
    const [ Countries, setCountries ] = useState([])
    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language


    useEffect(() => {
        const newCountriesList = countries.filter((c) => c.country.toLowerCase().includes(searchInput.toLowerCase()))

        setCountries(newCountriesList)
    }, [searchInput])

    return(
            <div className={`absolute w-full z-20 flex flex-col shadow-xl rounded-xl h-fit gap-6 transition-all duration-500 max-h-[70vh] overflow-y-auto border border-orange-700 border-opacity-30 ${showCountries ? '' : 'opacity-[0] scale-[0]'}`}>

            <div className={`w-full center flex-col bg-darkblue bg-opacity-90 backdrop-blur-3xl h-fit gap-6`}>
                <div className="text-sm w-full flex flex-col  justify-between items-center cursor-pointer sticky top-0 backdrop-blur-xl z-20 gap-4 px-9 pt-9 pb-4 text-gray-300 bg-darkblue bg-opacity-70">
                    <div className="flex justify-between items-center w-full font-bold text-xl" onClick={() => {
                    setShowCountries(false)
                }}>
                        {language == "eng" ? "Select Country" : "Sélectionnez un pays"}
                        <BiX className="text-3xl text-gray-200"/>
                    </div>
                    <div className="flex bg-darkblue bg-opacity-10 w-full rounded-full border border-orange-700 overflow-hidden border-opacity-40">
                        <div className="p-3">
                            <BsSearch className="text-lg text-zinc-200"/>
                        </div>
                        <input type="text"  placeholder="Search Countries" 
                        className="bg-transparent outline-none w-full p-3" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>

                    </div>

                </div>

                <div className="flex flex-col gap-3 w-full px-9 pb-9">

                    {
                        Countries.map((c, i) => (
                            <div key={i} className={`py-3 border border-orange-700 px-5 w-full rounded-full border-opacity-30 text-sm cursor-pointer hover:bg-lightblue hover:text-darkblue transition-all duration-500 flex items-center gap-3 ${formInputs.country == c.country ? "bg-lightblue text-darkblue" : "text-gray-200"}`} onClick={() => {
                                setFormInputs({
                                    ...formInputs,
                                    ["country"]: c.country
                                })
                                setShowCountries(false)
                                setSearchInput("")
                            }}> 
                                <i className={c.flag}></i>
                                {c.country}
                            </div>
                        ))
                    }
                    {
                        Countries.length == 0 ? 
                        <p className="text-sm text-gray-200">Not Found</p> : ''
                    }

                </div>
            </div>
            </div>
    )
}






export const SelectMultiple = ({label, name, value, formInputs, setFormInputs, options}) => {
    return(
        <div className="flex flex-col w-full gap-3">
            <label htmlFor={"focus"} className={`${formInputs.focus.length == 0 ? "text-darkblue" : "text-gray-500"} font-bold text- sm`}>
              {label}
          </label>      
            <div className="grid md:gr id-cols-2 gap-3 ml-2">
                {options.map((o, i) => (
                    <div key={i} className="flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                            if(formInputs[name].includes(o)) {
                                const a = formInputs[name].filter(a => o !== a)
                                setFormInputs({
                                    ...formInputs,
                                    [name]: a
                                })

                            }else{
                                setFormInputs({
                                    ...formInputs,
                                    [name]: [...formInputs[name], o]
                                })
                            }
                            // console.table(formInputs[name])
                        }}
                    >
                        <div className={`size-4 ${formInputs[name].includes(o) ? "bg-darkblue" : "bg-white" } transition-colors duration-500 rounded-[2px] border border-darkblue`}></div>
                        <p>{o}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}