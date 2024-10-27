import { useContext, useEffect, useState } from 'react'
// import { Parallax, ParallaxRight } from '../../Components/Utils/Parallax'
import { AppContext } from '../../App'
import { Parallax, ParallaxRight } from './Parallax'


export const InfoCard = ({data, title}) => {
    const [ currentGet, setCurrentGet ] = useState(0)
    const { navBg, setNavBg } = useContext(AppContext)

   
    return(
        <section id={title[1]} className="w-full center">
            <div className="flex flex-col lg:flex-row justify-between w-11/12  h-full lg:gap-0  bg-white p-4 py-9 lg:p-9 rounded-3xl shadow-xl">
                <div className="flex flex-col w-full lg:w-4/12 justify-center items-end text-3xl lg:text-4xl pr-3 text-zinc-600 font-bold border-r border-orange gap-3">
                    {
                        title.map((t, i) => (
                            <Parallax id={t} key={i}>
                                <h2 key={i} className=''>{t}</h2>
                            </Parallax>

                        ))
                    }
                </div>

                <div className="w-full lg:w-8/12 text-zinc-700  flex flex-col justify-center lg:items-center h-full gap-3">
                    {
                        data.map((g, i) => (
                            <ParallaxRight key={i} id={g.title+title[1]} clas={'lg:w-11/12'}>
                                <div key={i} className="flex flex-col gap-1 overflow-hidden">
                                    {
                                        g.desc &&
                                        <p className={`px-3 transition-all duration-500 tracking-wide leading-relaxed ${currentGet == i ? `h-[vh] bg-white py-3 rounded-xl` : 'h-0'}`}>{g.desc}</p>
                                    }
                                </div>
                            </ParallaxRight>
                        ))
                    }
                </div>
                 
            </div>
        </section>
    )
}