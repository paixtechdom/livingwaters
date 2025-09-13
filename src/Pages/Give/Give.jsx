import { useSelector } from "react-redux"
import { bankaccounts } from "/public/Constant"
import { useEffect, useState } from "react"
import { InfoCard } from "../../Components/Utils/InfoCard"
import partners from "../../assets/images/dev/partners.jpg"
import { Button } from "../../Components/Utils/Button"
import { Parallax } from "../../Components/Sections/Parallax"
import { Link } from "react-router-dom"
import { BreadCrumbs } from "../../Components/Utils/BreadCrumbs"

const Give = () => {
    const [ numberCopied, setNumberCopied ] = useState(0)
    const appslice = useSelector((state) => state.appslice)  
    const language = appslice.language

    useEffect(() => {
    if(numberCopied !== 0){
        setTimeout(() => {
            setNumberCopied(0)
        }, 1000);
    }
     
    }, [numberCopied])
    

  return (
    <main className="w-full relative center flex-col">

      <section className="center w-full h-[50vh] pt-[15vh] bg-gray-950 text-gray-100 relative bg-no-repeat bg-fixed bg-cover bg-giveBg">
        <div className="absolute top-0 left-0 h-full w-full opacity-90 bg-black center flex-col"></div>
        <div className="center gap-3 h-full w-11/12 lg:w-10/12 flex-col text-center z-[1]">

            <h1 className="font-bold text-4xl md:text-5xl w-full center text-blue-200 white tracking-wide leading-snug">
                {language === "eng" ? "Give" : "Doner"}
            </h1>

            <p className="font-bold">{language == "eng" ? "To give offerings, tithes, sow a seed and partnership commitments" : "Semer une graine, donnez our soutenez l'un de nos programmes."}</p>
          <div className="flex flex-col gap-2 text-sm italic text-gray-300">
              <p>{language == "eng" ? 
                  "Now may He who supplies seed to the sower, and bread for food, supply and multiply the seed you have sown and increase the fruits of your righteousness."
                  : 
                  "Celui qui fournit la semence au semeur et du pain pour se nourriture, vous fournira et multipliera la semence que vous avez semée et accroitra las fruits de votre justice"}
                  </p>
              <p className="font-bold">{language == "eng" ? "II Corithians 9:10" : "2 Corinthiens 9: 10"}</p>

          </div>
          <BreadCrumbs
                  link={"Give"}
              />
        </div>
      </section>

        <div className="flex flex-col gap -8 my-[10vh] w-11/12 lg:w-10/12">
                <p className="font-bold text-xl uppercase text-darkblue">
                    Living Waters Global Minstry
                </p>
            {
                bankaccounts[language].map((bankaccount, i) => (
                    <div key={i} className="flex flex-col gap-4 bg-white p-6 lg:p-9 rounded-2xl">
                        <h2 className="font-bold text-lg">{bankaccount.type} </h2>

                        {bankaccount.type == "Foreign Account" &&
                            <div  className="flex items-center flex-co l lg: flex-row gap-2 flex-wrap">
                                <h3 className="uppercase font-bol">{language == "eng" ? "Swift Code:" : "Code SWIFT" } </h3>
                                <p className="font-bold text-lg text-darkblue uppercase">UNAFNGLA005</p>
                            </div>
                        }

                        <div key={i} className="grid lg:grid-cols-2 gap-4">
                            {
                                bankaccount.accounts.map((account, i) => (
                                    <div key={i} className="flex flex-col bg-lightblue bg-opacity-10 shadow-lg p-5 rounded-xl gap-2">
                                        <div title="Copy to clipboard"
                                            className=" flex items-center justify-between "
                                            onClick={() => {
                                                navigator.clipboard.writeText(account.number)
                                                setNumberCopied(account.number)
                                            }}
                                        >
                                        <div title="Copy to clipboard"
                                            className=" flex items-center gap-1 font-bold cursor-pointer hover:border-b w-fit border-base"
                                        >
                                            <p className="text-xl">
                                                {account.number} 
                                            </p> 
                                            <i className={`bi bi-${numberCopied !== account.number ? "clipboard" :"clipboard-check"} ml-1 text-sm`}></i>
                                        </div>
                                        {numberCopied == account.number &&
                                            <div className="bg-white flex items-center gap-1 text-[10px] font-bold shadow-lg p-2 rounded-full">
                                                <i className="bi bi-check-circle-fill text-green-600"></i>
                                                <p>Copied</p>
                                            </div>
                                        }
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <i className="bi bi-circle-fill text-xs text-blue-400 "></i>
                                            <p><span className="text-gray-500 text-sm">{language == "eng" ? "Bank:" : "Banque:" }</span> <b>{account.bank}</b></p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="text-xs font-bold">{account.type}</p>
                                        </div>
                                    </div>

                                ))
                            }         
                        </div>

                    </div>
                    
                ))
            }

        </div>

        <div className="w-11/12 lg:w-10/12 flex mb-[10vh] lg:[15vh]">
            <InfoCard 
                data={["Partners are friends of Living Waters Global Minstry (both members and non members), who are committed to sowing financially on a regular basis to help move forward the vision of the ministry."]}
                title={["Become", "a Partner"]}
                img={partners}
                btn={
                    <Link to={"/partnership"} className="z-[2] mt-4">
                        <Parallax id={"givepartnerbtn"} type={"left"}>
                            <Button
                                type={"primary"}
                                text={"Become a partner"}
                            />
                        </Parallax>
                    </Link>
                }
            />
        </div>


    </main>
  )
}

export default Give
