import React, { useState, createContext, Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter } from 'react-router-dom';

import './assets/Styles/index.css';

import { PageNotFound } from './Components/PageNotFound';
import { Loader } from './Components/Loader';
import { delayLoad } from './assets/Functions';

const MesagesList = lazy(() => delayLoad(import('./Pages/Home/Messages/MessageList')));
const AMessagePage = lazy(() => delayLoad(import('./Pages/Admin/messages/amessage/page')));
const MessagesPage = lazy(() => delayLoad(import('./Pages/Admin/messages/page')));
const UploadNewMessagePage = lazy(() => delayLoad(import('./Pages/Admin/upload/UploadNewMessagePage')));
const LoginPage = lazy(() => delayLoad(import('./Pages/Admin/Login/LoginPage')));
const Home = lazy(() => delayLoad(import('./Pages/Home/Home')));
const Navbar = lazy(() => delayLoad(import('./Components/Navbar')));



export const AppContext = createContext()

const Layout = () => {
  const [ currentNav, setCurrentNav ] = useState(0)

    document.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
      })
    })

    return (
      <AppContext.Provider value={{ currentNav, setCurrentNav }}>
        
        <div className='app bg-white orange-50 bg-opacity-20'>
          <Suspense fallback={<></>}>
            <Navbar />
          </Suspense>    

          <Outlet />
        
        </div>

      </AppContext.Provider>
    )

}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element:   
              <Suspense fallback={<Loader />}>
                <MesagesList />
                {/* <Home /> */}
              </Suspense>
      },
      {
        path: '/admin/upload',
        element:   
              <Suspense fallback={<Loader />}>
                <UploadNewMessagePage />
              </Suspense>
      },
      {
        path: '/admin/login',
        element:   
              <Suspense fallback={<Loader />}>
                <LoginPage />
              </Suspense>
      },
      {
        path: '/admin/messages',
        element:   
              <Suspense fallback={<Loader />}>
                <MessagesPage />
              </Suspense>
      },
      {
        path: '/admin/messages/:id',
        element:   
              <Suspense fallback={<Loader />}>
                <AMessagePage />
              </Suspense>
      },
      {
        path: '/*',
        element: <PageNotFound />
      }
    ]
  },
])

function App() {
  

  return (
    <div className='App'>
        <RouterProvider router={router} />

    </div>
  );


}
export default App
