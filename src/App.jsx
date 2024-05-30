import React, { useState, createContext, lazy } from 'react'
import { AppRouter } from './Router';
import './assets/Styles/index.css';




export const AppContext = createContext()




function App() {
  return (
    <div className='App'>
        <AppRouter/>
    </div>
  );


}
export default App
