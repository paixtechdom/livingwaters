import React, { createContext, useEffect } from 'react'
import { AppRouter } from './Router';
import './assets/Styles/index.css';
import { useDispatch } from "react-redux";
import { DocscrollTop } from "./assets/Functions"
import { toggleScrolledDown } from './assets/store/navigation/navigationSlice';




export const AppContext = createContext()



function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    document.addEventListener('scroll', () => {
        dispatch(toggleScrolledDown(document.documentElement.scrollTop > 50 ? true : false))
        // setShowWhatsappButton(document.documentElement.scrollTop > 1000 ? true : false)
    })
    document.removeEventListener('scroll', () => null)
  }, [])


  useEffect(() => {
    DocscrollTop()
  }, [window.URL])


  return (
    <div className='App w-full overflow-hidden'>
        <AppRouter/>
    </div>
  );


}
export default App
