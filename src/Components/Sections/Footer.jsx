import { Link } from "react-router-dom"
import { About, Contacts, Navigation } from "../../../public/Constant"
import { Button } from "../Utils/Button"
import { useDispatch, useSelector } from "react-redux"
import { setLanguage } from "../../assets/store/AppSlice/AppSlice"



export const Footer = () => {
    const dispatch = useDispatch()
    const appslice = useSelector((state) => state.appslice)
    const language = appslice.language


    return(
        <section className="center w-full bg-footerBg bg-center bg-no-repeat bg-fixed bg-cover relative py-[10vh] text-sm">
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-95">
            </div>

            <div className="w-11/12 lg:w-10/12 flex flex-col gap-9 md:gap-16 lg:gap-9 text-white z-10">
                <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3  gap-9 md:gap-16 lg:gap-9 text-white z-10">

                    <div className="flex flex-col gap-4  col-span-2">
                        <h2 className="font-bold text-blue-100 capitalize text-3xl">Living Waters Global Ministry</h2>

                        <p>{About[language].mission.pre}</p>
                        <p>{About[language].mission.desc[0].desc}</p>
                        <Link to="/who-we-are">
                        <Button 
                            type={"primary"}
                            text={"Read More"}
                            className={"w-fit"}
                        />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-blue-100 text-lg">{language === "eng" ? "Links" : "Liens"}</h3>

                        <div className="flex flex-col gap-3">
                            {
                                Navigation[language].map((nav, i) => (
                                    nav.sublinks ? 

                                    nav.sublinks.map((subnav, j) => (
                                        <Link to={`/${subnav.link}`} key={j}>
                                            {subnav.title}
                                        </Link>

                                    )) :
                                    <Link to={`/${nav.link}`} key={i}>
                                        {nav.title}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">

                        <h3 className="font-bold text-blue-100 text-lg">{language == "eng" ? "For prayers, enquiry and counseling": "Pour les priers, les demmandes d'information et le conseil"
                        }</h3>
                        <div className="flex flex-col gap-3">
                            {
                                Contacts.numbers.map((contact, i) => (
                                    <a href={`${contact.link}`} key={i} className="flex gap-2">
                                        <i className={`bi bi-telephone-fill`}></i>
                                        {contact.title}
                                    </a>
                                ))
                            }
                            {
                                Contacts.email.map((email, i) => (
                                    <a href={`${email.link}`} key={i} className="flex gap-2">
                                        <i className={`bi bi-envelope-fill`}></i>
                                        {email.title}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">

                        <h3 className="font-bold text-blue-100 text-lg">{language == "eng" ? "Follow us on Social Media": "Suivez-nous sur les Réseaux sociaux"
                        }</h3>
                        <div className="flex flex-col gap-3">
                            {
                                Contacts.social_media.map((contact, i) => (
                                    <a href={`${contact.link}`} key={i} className="flex gap-2">
                                        <i className={`bi bi-${contact.icon}`}></i>
                                        {contact.title}
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:justify-end w-full">
                        <p className="text-lg">
                            {language === "eng" ? "Changer de langue" : "Switch Language"}
                        </p>
                        <Button 
                            btnType={"secondary"}
                            text={language==="eng" ? "Francais" : "English"} 
                            type={'primary'} 
                            className={'w-fit [150px]'} 
                            func={() => {
                                if(language === "eng"){
                                    dispatch(setLanguage('fr'))
                                }else{
                                    dispatch(setLanguage('eng'))
                                }
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}