import React, { useState } from 'react'
import give from "../../assets/images/dev/give.jpg"
import { useSelector } from 'react-redux'
import { PartnershipForm } from './PartnershipForm'
import { InfoCard } from '../../Components/Utils/InfoCard'
import { Link } from 'react-router-dom'
import { Parallax } from '../../Components/Sections/Parallax'
import { Button } from '../../Components/Utils/Button'
import { BreadCrumbs } from '../../Components/Utils/BreadCrumbs'

const Partnership = () => {
  const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language


  return (
   <main className="w-full relative center flex-col">
        {/* <section className="center w-full h-[50vh] pt-[15vh] bg-gray-950 text-gray-100 relative bg-no-repeat bg-fixed bg-cover bg-partnersBg">
        <div className="absolute top-0 left-0 h-full w-full opacity-90 bg-black center flex-col"></div>
        <div className="center gap-3 h-full w-11/12 lg:w-10/12 flex-col text-center z-[1]">

            <h1 className="font-bold text-4xl md:text-5xl w-full center text-blue-200 white tracking-wide leading-snug">
                {language === "eng" ? "Become a partner" : "Doner"}
            </h1>

           
          <div className="flex flex-col gap-2 text-sm italic text-gray-300">
              <p>{language == "eng" ? 
                  "Partners are friends of Living Waters Global Minstry (both members and non members), who are committed to sowing financially on a regular basis to help move forward the vision of the ministry."
                  : 
                  ""}
                  </p>
          </div>
            <BreadCrumbs
                  link={"Partnership"}
              />
        </div>
      </section>
      <div className="w-11/12 lg:w-8/12 flex flex-col lg:flex-row items-center justify-between mb-[10vh] lg:[15vh] mt-9 gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
              <Link to={"/give"} className="">
                <Button
                  type={"secondary"}
                  text={"Already a partner? Give now"}
                  className="py 4"
                />
                
            </Link>
          </div>

          <p>New partner? (Fill the form below)</p>

        </div> */}

            
      <PartnershipForm />

      <div className="w-11/12 lg:w-10/12 flex mb-[10vh] lg:[15vh]">
            <InfoCard
                data={["To give offerings, tithes, sow a seed and partnership commitments"]}
                title={["Already", "a partner?"]}
                img={give}
                btn={
                    <Link to={"/give"} className="z-[2] mt-4">
                        <Parallax id={"partnergivebtn"} type={"right"}>
                            <Button
                                type={"primary"}
                                text={"Give"}
                            />
                        </Parallax>
                    </Link>
                }
            />
        </div>
   </main>
  )
}

export default Partnership