import React from 'react'
import { useSelector } from "react-redux"
import lead_minister from "../../assets/images/dev/papa 1.jpg"
import { TrimText } from "../../assets/Functions"
import { Parallax } from "../../Components/Sections/Parallax"
import busola from "../../assets/images/ministers/busola.jpg"
import daniel from "../../assets/images/ministers/daniel.jpg"
import dasola from "../../assets/images/ministers/dasola.jpg"
import feranmi from "../../assets/images/ministers/feranmi.jpg"
import funmi from "../../assets/images/ministers/funmi.jpg"
import delight from "../../assets/images/ministers/delight.jpg"
import peace from "../../assets/images/ministers/peace.jpg"
import noah from "../../assets/images/ministers/noah.jpg"
import { BreadCrumbs } from '../../Components/Utils/BreadCrumbs'


const Leaders = () => {
  const appslice = useSelector((state) => state.appslice)  
  const language = appslice.language

  const ministers = [
    {
      name: "Onido Innocent A.",
      position: {
        eng: "Lead Minister",
        fr: "Ministre principal"
      },
      img: lead_minister
    },
    // {
    //   name: "Eunice Onido",
    //   position: {
    //     eng: "Director of Ministry Affairs",
    //     fr: "Directrice des affaires ministérielles"
    //   },
    //   img: lead_minister
    // },
    {
      name: "Funmilayo Adelowo",
      position: {
        eng: "Director of Programmes / Services",
        fr: "Directrice des programmes / services"
      },
      img: funmi
    },
    // {
    //   name: "Susan Bello",
    //   position: {
    //     eng: "Director of Ministry Treasury",
    //     fr: "Directrice du trésor du ministère"
    //   },
    //   img: lead_minister
    // },
    {
      name: "Oluwaferanmi Hassan",
      position: {
        eng: "Director of Missions (Western Region of Nigeria)",
        fr: "Directeur des missions (région occidentale du Nigéria)"
      },
      img: feranmi
    },
    {
      name: "Noah Oyewale",
      position: {
        eng: "Director of Protocol and Security",
        fr: "Directeur du protocole et de la sécurité"
      },
      img: noah
    },
    {
      name: "Daniel Ajayi ",
      position: {
        eng: "Director of Public Relations Media",
        fr: "Directeur des relations publiques et des médias"
      },
      img: daniel
    },
    {
      name: "Oluwaferanmi John",
      position: {
        eng: "Director of ICT & Technical",
        fr: "Directeur des TIC et techniques"
      },
      img: peace
    },
    {
      name: "Delight Oyelopo",
      position: {
        eng: "Director of Ministry - Benin Republic",
        fr: "Directeur du ministère - République du Bénin"
      },
      img: delight
    },
    {
      name: "Busola Alimi",
      position: {
        eng: "Director of Internal Public Relations and Communications",
        fr: "Directrice des relations publiques internes et de la communication"
      },
      img: busola
    },
    // {
    //   name: "Favor Ogundipe",
    //   position: {
    //     eng: "Director of Welfare and Hospitality",
    //     fr: "Directeur du bien-être et de l’hospitalité"
    //   },
    //   img: lead_minister
    // },
    {
      name: "Dasola Olayiwola",
      position: {
        eng: "Official Yoruba Language Interpreter",
        fr: "Interprète officiel de la langue yoruba"
      },
      img: dasola
    }
  ]

  return (
    <main className="w-full relative center flex-col">

    <section className="center w-full h-[50vh] pt-[15vh] bg-gray-950 text-gray-100 relative bg-no-repeat bg-fixed bg-cover bg-leadersBg">
      <div className="absolute top-0 left-0 h-full w-full opacity-90 bg-black center flex-col"></div>
      <div className="center gap-3 h-full w-11/12 lg:w-10/12 flex-col text-center z-[1]">

          <h1 className="font-bold text-4xl md:text-5xl w-full center text- blue-200 white tracking-wide leading-snug">
              {language === "eng" ? "Our  Leaders" : "Nos Dirigeants"}
          </h1>

          <p className="font-bold">{language == "eng" ? "Meet our Leaders and Ministers" : "Recontrez nos dirigeants et ministres"}</p>
         
        <BreadCrumbs
          text={"text-gray-300"}
            link={language == "eng" ? "Our Leaders" : "Nos Dirigeants"}
          />
      </div>
    </section>



    <section className="w-11/12 lg:w-10/12 grid md:grid-cols-2 lg:grid-cols-3 my-[10vh] gap-5">
      {
        ministers.map((minister, i) => (
          <EachMinister 
            img={minister.img}
            position={minister.position[language]}
            name={minister.name}
            key={i}
            i={i}
          />
        ))
      }
    </section>

    </main>
  )
}

export default Leaders


const EachMinister = ({img, position, name, i}) => {
  return(
    <Parallax 
      id={TrimText(name)} 
      className="w-full"
      type={i % 2 == 0 ? "left" : i % 3 == 0 ? "right" : ""}
    >
    <div 
      className="flex flex-col  rounded-xl overflow-hidden bg-darkblue"
    >
    <div className="ce nter w-full h-[65vh] lg:h-[45vh] overflow-hidden">
        <img src={img} alt="Lead Minister" className="h-full w-full object-cover"/>
    </div>
    <div className="flex flex-col center text-center py-4 relative text-gray-300">
      <p className="font-bold">{name}</p>
      <p className="text-sm text-gray-200">{position}</p>

      <div className="border-2 w-[100px] border-orange-700"></div>
    </div>
  </div>
  </Parallax>
  )
}