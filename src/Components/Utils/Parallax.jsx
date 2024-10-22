import { useState } from "react"
import { useEffect } from "react"

const Parallax = ({children, id, clas}) => {
    const newId = id
                    .replaceAll(' ', '')
                    .replaceAll('-', '')
                    .replaceAll('(', '')
                    .replaceAll(')', '')
                    .replaceAll(';', '')
                    .replaceAll("'", '')
                    .replaceAll(',', '')
                    .replaceAll('.', '')
                    .replaceAll('/', '')
                    .replaceAll('?', '')
                    .replaceAll('@', '')
    const [ isPosMatch, setIsPosMatch ] = useState(false)
    useEffect(() =>{
        
        const pos = document.querySelector(`#${newId}`).getBoundingClientRect()
        if(pos.top < 800){
            setIsPosMatch(true)
        }      
        
    }, [])
    const handleScroll = () => {
        const pos = document.querySelector(`#${newId}`).getBoundingClientRect()
        if(pos.top < 800){
            setIsPosMatch(true)
        }  
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])

    return(
        <div id={newId} className={`transition-all duration-[2s] relative ${clas} ${isPosMatch ? '' : 'opacity-0 -translate-x-[10%]  scale-[0.2]'}`}>
                {children}
        </div>
    )
}



const ParallaxRight = ({children, id, clas}) => {
    const newId = id
                    .replaceAll(' ', '')
                    .replaceAll('-', '')
                    .replaceAll('(', '')
                    .replaceAll(')', '')
                    .replaceAll(';', '')
                    .replaceAll('?', '')
                    .replaceAll("'", '')
                    .replaceAll(',', '')
                    .replaceAll('.', '')
                    .replaceAll('/', '')
                    .replaceAll('@', '')
    const [ isPosMatch, setIsPosMatch ] = useState(false)
    useEffect(() =>{
        
        const pos = document.querySelector(`#${newId}`).getBoundingClientRect()
        if(pos.top < 800){
            setIsPosMatch(true)
        }      
        
    }, [])
    const handleScroll = () => {
        const pos = document.querySelector(`#${newId}`).getBoundingClientRect()
        if(pos.top < 800){
            setIsPosMatch(true)
        }  
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])

    return(
        <div id={newId} className={`transition-all duration-[2s] relative ${clas} ${isPosMatch ? '' : 'opacity-0 translate-x-[10%] scale-[0.2]'}`}>
                {children}
        </div>
    )
}

export { Parallax, ParallaxRight }