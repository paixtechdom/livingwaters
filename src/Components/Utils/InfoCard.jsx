import { useContext, useEffect, useState } from 'react'
// import { Parallax, ParallaxRight } from '../../Components/Utils/Parallax'
import { AppContext } from '../../App'
import { Parallax } from '../Sections/Parallax'
import { TrimText } from '../../assets/Functions'


export const InfoCard = ({data, title, img, btn}) => {
    const [ currentGet, setCurrentGet ] = useState(0)

   
    return(
        <section id={title[1]} className="w-full center relative">
            <div className="flex flex-col justify-between w-11/12 lg:w-8/12 h-full lg:gap-0 p-4 py-9 lg:p-9 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="bg-darkblue opacity-55 size-full absolute left-0 top-0 z-[1]"></div>
                <div className="absolute w-full h-full top-0 left-0 z-0">
                    <img src={img} alt={title} className="size-full object-cover " />
                </div>
                <div className={`flex flex-col w-full  justify-center border-l-4 pl-3 text-3xl lg:text-4xl text-gray-100 font-bold border-orange-700 gap-3 z-[2]`}>
                    {
                        title.map((t, i) => (
                            <Parallax id={TrimText(t)} key={i}>
                                <h2 key={i} className=''>{t}</h2>
                            </Parallax>

                        ))
                    }
                </div>

                <div className="w-full mt-4 text-zinc-200  flex flex-col justify-center lg:items-center h-full gap-3 z-[2]">
                    {
                        data.map((g, i) => (
                            <Parallax  type="right"
                            key={i} 
                                id={TrimText(g.title+title[1])} 
                                className={''}>
                                <div key={i} className="flex flex-col gap-1 overflow-hidden">
                                    {
                                        g.desc?
                                        <p className={`px-3 transition-all duration-500 tracking-wide leading-relaxed ${currentGet == i ? `h-[vh] bg-darkblue bg-opacity-90 py-3 rounded-xl` : 'h-0'}`}>{g.desc}</p> 
                                        : <p className={`px-3 transition-all duration-500 tracking-wide leading-relaxed ${currentGet == i ? `h-[vh] bg-darkblue bg-opacity-90 py-3 rounded-xl` : 'h-0'}`}>{g}</p> 
                                    }
                                </div>
                            </Parallax>
                        ))
                    }
                </div>
                <div className="z-[2]">
                    {btn}
                </div>
            </div>
        </section>
    )
}