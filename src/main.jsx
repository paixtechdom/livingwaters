import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/Styles/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Provider } from 'react-redux'
import { store } from './assets/store/AppStore.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
