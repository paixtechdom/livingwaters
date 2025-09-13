import { Parallax } from "./Parallax"
import { TrimText } from "../../assets/Functions"


// const imageClass = " font - color - navbar ( home services about ) - services on the home page"

export const ImageText = ({img1, img2, header, desc, btn, span, subHeader}) => {
  return (

    <section className="w-full center">
        <div className="flex flex-col-reverse w-11/12 lg:w-10/12 lg:flex-row justify-between gap-[50px] gap-y-12">
            {img1 &&
                <div className="w-full lg:w-11/12 relative flex flex-col">
                    <Parallax id={TrimText(header)+"img"} type="left">
                        <div className="h-[30vh] lg:h-[35vh] w-11/12 rounded-3xl shadow-xl overflow-hidden">
                            <img src={img1} alt="" className="w-full h-full object-cover"/>
                        </div>
                    </Parallax>

                        
                    <div className="h-[20vh] w-6/12 absolute top-[45%] right-0 rounded-3xl shadow-xl overflow-hidden center">
                        <div className="w-full h-full">
                            <img src={img2} alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            }

            <div className="flex flex-col gap-3 w-full">
                <Parallax id={TrimText(header)} type="right">
                    <h2 className="text-zinc-900 font-bold text-4xl relative">{header} <br />
                        {
                            span && <span className="text-zinc-900">{span}</span>
                        }
                    </h2>
                </Parallax>

                <Parallax id={TrimText(header)+'subHeader'} type="left">
                    <h3 className="font-bold text-xl text-zinc-800">{subHeader}</h3>
                </Parallax>

                <Parallax id={TrimText(header)+'desc'} type="left">
                    <p className="tracking-wide leading-relaxed text-black">{desc}</p>
                </Parallax>
                <Parallax id={TrimText(header)+'btn'}>
                    {btn}
                </Parallax>
            </div>
        </div>
    </section>
  )
}
