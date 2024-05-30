import React, { useState, createContext, Suspense, lazy, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter, } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


import './assets/Styles/index.css';

import { PageNotFound } from './Components/PageNotFound';
import { Loader } from './Components/Loader';
import { delayLoad } from './assets/Functions';
import { Alert } from './Components/Alert';

const MesagesList = React.lazy(() => delayLoad(import('./Pages/Home/Messages/MessageList')));
const AMessagePage = React.lazy(() => delayLoad(import('./Pages/Admin/messages/amessage/page')));
const MessagesPage = React.lazy(() => delayLoad(import('./Pages/Admin/messages/page')));
const UploadNewMessagePage = React.lazy(() => delayLoad(import('./Pages/Admin/upload/UploadNewMessagePage')));
const LoginPage = React.lazy(() => delayLoad(import('./Pages/Admin/Login/LoginPage')));
const Navbar = lazy(() => delayLoad(import('./Components/Navbar')));




export const AppContext = createContext()

const Layout = () => {
  const [ currentNav, setCurrentNav ] = useState(0)
  const [ showAlert, setShowAlert ] = useState(false)
  const [ alertType, setAlertType ] = useState('')
  const [ alertMessage, setAlertMessage ] = useState('')
  const [ loginTo, setLoginTo ] = useState('/admin/messages')

    document.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
      })
    })

    return (
      <div className='app bg-white orange-50 bg-opacity-20'>
      <HelmetProvider>
        <AppContext.Provider value={{ currentNav, setCurrentNav, showAlert, setShowAlert, alertType, setAlertType, alertMessage, setAlertMessage, loginTo, setLoginTo }}>
          
          <Suspense fallback={<></>}>
            <Navbar />
          </Suspense>   
          {
            showAlert ?
            <Alert /> : ''
          } 

          {/* <Outlet /> */}
          
          <React.Suspense fallback={<Loader />}>
            <MesagesList />
          </React.Suspense>

        </AppContext.Provider>
      </HelmetProvider>
      </div>
    )

}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: (<React.Suspense fallback={<Loader />}>
                  <MesagesList />
                </React.Suspense>)
      },
      {
        path: 'admin/upload',
        element: (<React.Suspense fallback={<Loader />}>
                  <UploadNewMessagePage />
                </React.Suspense>)
      },
      {
        path: 'admin/login',
        element:( <React.Suspense fallback={<Loader />}>
                  <LoginPage />
                </React.Suspense>)
      },
      {
        path: 'admin/messages',
        element: (<React.Suspense fallback={<Loader />}>
                  <MessagesPage />
                </React.Suspense>)
      },
      {
        path: 'admin/messages/:id',
        element: (<React.Suspense fallback={<Loader />}>
                  <AMessagePage />
                </React.Suspense>)
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
])


function App() {
  return (
    <div className='App'>
        <RouterProvider router={router} />
    </div>
  );


}
export default App
