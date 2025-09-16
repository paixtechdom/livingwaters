import React, { createContext, useEffect } from 'react'
import { AppRouter } from './AppRouter';
import './assets/Styles/index.css';
import { useDispatch } from "react-redux";
import { DocscrollTop } from "./assets/Functions"
import { toggleScrolledDown } from './assets/store/navigation/navigationSlice';
import { Loader } from './Components/Utils/Loader';




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
        {/* <Loader /> */}
        {/* <div className="text-5xl font-bold">Living Waters Global Ministry</div> */}
    </div>
  );


}
export default App
