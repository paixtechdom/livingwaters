import React from 'react'
import { useSelector } from "react-redux"
import lead_minister from "../../assets/images/dev/papa 1.jpg"



const Leaders = () => {
  const appslice = useSelector((state) => state.appslice)  
  const language = appslice.language
  return (
    <main className="w-full relative center flex-col min-h-s creen">

    <section className="center w-full h-[60vh] bg-gray-950 text-gray-100 relative bg-no-repeat bg-fixed bg-cover bg-leadersBg">
      <div className="absolute top-0 left-0 h-full w-full opacity-90 bg-black center flex-col"></div>
      <div className="center gap-3 h-full w-11/12 lg:w-10/12 flex-col text-center z-[1]">

          <h1 className="font-bold text-4xl md:text-5xl w-full center text- blue-200 white tracking-wide leading-snug">
              {language === "eng" ? "Our  Leaders" : "Nos Leaders"}
          </h1>

          <p className="font-bold">{language == "eng" ? "Meet our Leaders and Ministers" : "Recontrez nos dirigeants et ministres"}</p>
         
      </div>
    </section>

    <section className="w-11/12 lg:w-10/12 center g rid grid-c ols-3 my-[10vh]">

      <EachMinister 
        img={lead_minister}
        position={language === "eng" ? "Lead Minister": "Ministre Principal"}
        name={"Onido Innocent A."}
      />
    </section>

    </main>
  )
}

export default Leaders


const EachMinister = ({img, position, name}) => {
  return(
    <div className="flex flex-col center gap-4">
    <div className="center w-full h-[50vh] overflow-hidden">
        <img src={img} alt="Lead Minister" className="h-full w-full object-cover rounded-xl"/>
    </div>
    <div className="flex flex-col text-center">
      <strong>{position}</strong>
      <p className="uppercase">{name}</p>
    </div>
  </div>
  )
}