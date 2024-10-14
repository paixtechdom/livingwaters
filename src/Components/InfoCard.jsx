import { useContext, useEffect, useState } from 'react'
// import { Parallax, ParallaxRight } from '../../Components/Utils/Parallax'
import { AppContext } from '../App'
import { Parallax, ParallaxRight } from '../assets/Components/Utils/Parallax'


export const InfoCard = ({data, title}) => {
    const [ currentGet, setCurrentGet ] = useState(0)
    const { navBg, setNavBg } = useContext(AppContext)

   
    return(
        <section id={title[1]} className="w-full center py-[15vh] lg:screen">
            <div className="flex flex-col lg:flex-row justify-between w-11/12 lg:w-10/12 h-full gap-[9vh] lg:gap-0  bg-base p-6 py-[15vh] lg:p-9 lg:py-[15vh] rounded-3xl">
                <div className="flex flex-col w-full lg:w-6/12 justify-center items-end text-4xl lg:text-5xl pr-3 text-white font-bold border-r border-orange gap-3">
                    {
                        title.map((t, i) => (
                            <Parallax id={t} key={i}>
                                <h2 key={i} className=''>{t}</h2>
                            </Parallax>

                        ))
                    }
                </div>

                <div className="w-full lg:w-6/12 text-white  flex flex-col justify-center lg:items-center h-full gap-3">
                    {
                        data.map((g, i) => (
                            <ParallaxRight key={i} id={g.title+title[1]} clas={'lg:w-11/12'}>
                                <div key={i} className="flex flex-col gap-1 overflow-hidden">
                                    <div className="flex justify-start items-start font-bold text-xl gap-4 md:gap-8 hover:bg-white hover:bg-opacity-10 transition-all duration-500 p-3 rounded-xl cursor-pointer w-full" onClick={() => {
                                            setCurrentGet(g.desc && currentGet == i ? 0 : i)
                                        }}>
                                        <h3 className='w-full'>{g.title}</h3>
                                        {
                                            g.desc && g.title && data.length > 1 ?
                                            <i className={`bi bi-${currentGet == i ? 'eye-slash-fill' : 'eye-fill'}`} ></i> : ''
                                        }
                                    </div>
                                    {
                                        g.desc &&
                                        <p className={`px-3 text-base transition-all duration-500 tracking-wide leading-relaxed ${currentGet == i ? `h-[vh] bg-white py-3 rounded-xl` : 'h-0'}`}>{g.desc}</p>
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