import React from 'react'

const Footer = () => {
  return (
    <section>
        <div className="parent center w-full  border-t border-primary border-4 bg-primary pb-[10vh] pt-[15vh]">
            <div className="w-10/12 lg:w-9/12 xl:w-8/12 flex flex-col gap-9 lg:gap-[10%] lg:flex-row text-white tracking-wide ">
                <div className="lg:w-[45%] flex flex-col gap-5">
                    <p className="leading-relaxed">
                        Suscribe to get an alert when we upload messages
                    </p>
                </div>
                <div className="flex flex-row md:flex-col items-center lg:w-[55%] gap-9">
                    <input type="email" placeholder="Enter email address" className="bg-transparent border border-white text-white placeholder-white p-4 outline-none w-11/12 md:w-8/12"/>

                    <Button type='primary' text={'Suscribe'}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer