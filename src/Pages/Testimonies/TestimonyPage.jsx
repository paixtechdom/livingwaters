import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../../Components/Utils/Button'
import { testimonies } from '../../../public/Constant'
import { ATestimony } from './ATestimony'
import { BreadCrumbs } from '../../Components/Utils/BreadCrumbs'



const TestimonyPage = () => {
  const appslice = useSelector((state) => state.appslice)  
  const language = appslice.language
  const  [ currentTestimony, setCurrentTestimony ] = useState(null)
  const  [ show, setShow ] = useState(null)


  return (
    <main className="w-full center flex-col min-h -screen mb-[10vh] relative">
      <section className="w-full center text-center h-[50vh] pt-[15vh] relative">
          <div className="absolute top-0 left-0 h-full w-full bg-darkblue center flex-col">
              <h1 className="font-bold text-3xl md:text-5xl center text-blue-200 white tracking-wide leading-snug bg-lightblue bg-opacity-20 backdrop-blur-lg p-3 px-10 rounded-3xl w-fit">
                  <div className="bi bi-chat-left-quote-fill mr-3"></div>
                  {language === "eng" ? "Testimonies" : "Témoignages"}
              </h1>
            <BreadCrumbs
              text="text-gray-200"
               link={language == "eng" ? "Testimonies" : "Témoignages"}
              />
          </div>
      </section>


        <div className="w-11/12 lg:w-10/12 flex flex-col gap-12 mt-12 lg:mt-20">
          <div className="w-full grid lg:grid-cols-2 gap-9 ">
            {testimonies[language].map((testimony, i) =>(
              <div key={i} className="flex flex-col gap-2 bg-lightblue bg-opacity-20 rounded-xl shadow p-5">
                <div className="flex flex-col gap-1 border-l-4 border-orange-700 pl-2">
                  <h2 className="capitalize font-bold text-darkblue">{testimony.title}</h2>
                  <i className="text-sm">{language == "eng" ? "by" : "par"} {testimony.name}</i>
                </div>
                <p>{testimony.content[0].slice(0, 150)}...</p>

                  <Button
                    text={language == "eng" ? "Read more" : "Lire la suite"}
                    className={"w-fit"}
                    func={() => {
                      setCurrentTestimony(testimony)
                      setShow(true)
                    }}
                  />
              </div>

            ) )}

            </div>

            <div className="flex flex-col gap-2 lg:w-9/12 mt-4">
                {language == "eng" ? 
                <>
                  <p>
                    Do you want to testify aboout something God has done in your life?
                  </p>
                  <p>
                    Keep in mind that testimonies are powerful reminders of God's love and faithfulness. Hearing what God has done for you can strenghten and inspire others to trust Him more.
                  </p>
                  <p>
                  Kindly, click the link below to boost someone's faith
                  </p>
                <a href={"mailto:livingwatersglobalministry4@gmail.com"} className="mt-3">
                  <Button
                    text={"Share your Testimony"}
                  />
                  </a>
                </> : 
                  <>
                  <p>
                      Voulez-vous témoigner de ce que Dieu a fait dans votre vie ?
                    </p>
                    <p>
                      Gardez à l’esprit que les témoignages sont de puissants rappels de l’amour et de la fidélité de Dieu. Entendre ce que Dieu a fait pour vous peut fortifier et inspirer d’autres à lui faire encore plus confiance.
                    </p>
                    <p>
                      Veuillez cliquer sur le lien ci-dessous pour renforcer la foi de quelqu’un.
                    </p>
                    <a href={"mailto:livingwatersglobalministry4@gmail.com"} className="mt-3">
                      <Button
                        text={"Partagez votre témoignage"}
                      />
                    </a>

                  </>}

              </div>
        </div>

        <ATestimony
          testimony={currentTestimony}
          show={show}
          setShow={setShow}
        />
    </main>
  )
}

export default TestimonyPage