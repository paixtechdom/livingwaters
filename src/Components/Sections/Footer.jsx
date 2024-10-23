import { Link } from "react-router-dom"
import { About, Contacts, navs } from "../../assets/Constant"
import { Button } from "../Utils/Button"

export const Footer = () => {
    return(
        <section className="center w-full bg-footerBg bg-center bg-no-repeat bg-fixed bg-cover relative py-[10vh] text-sm">
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-95">
            </div>

            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row justify-between gap-9 md:gap-16 lg:gap-9 text-white z-10">

                <div className="flex flex-col gap-4 lg:w-7/12">
                    <h3 className="font-bold text-blue-100 capitalize text-3xl">Living Waters Global Ministry</h3>

                    <p>{About.mission.pre}</p>
                    <p>{About.mission.desc[0].desc}</p>
                    <Link to="/who-we-are">
                    <Button 
                        type={"primary"}
                        text={"Read More"}
                        className={"w-fit"}
                    />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-9 lg:w-4/12 mt-6 lg:mt-0">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-blue-100 text-lg">Links</h3>

                        <div className="flex flex-col gap-3">
                            {
                                navs.map((nav, i) => (
                                    nav.sublinks ? 

                                    nav.sublinks.map((subnav, j) => (
                                        <Link key={j}>
                                            {subnav.title}
                                        </Link>

                                    )) :
                                    <Link key={i}>
                                        {nav.title}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">

                        <h3 className="font-bold text-blue-100 text-lg">Social Media</h3>
                        <div className="flex flex-col gap-3">
                            {
                                Contacts.social_media.map((contact, i) => (
                                    <Link key={i}>
                                        {contact.title}
                                        {/* <i className={`bi bi-${contact.icon}`}></i> */}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}