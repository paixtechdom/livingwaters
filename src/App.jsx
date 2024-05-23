import React, { useState, createContext, Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter } from 'react-router-dom';

import './assets/Styles/index.css';

import { PageNotFound } from './Components/PageNotFound';
import { Loader } from './Components/Loader';
import { delayLoad } from './assets/Functions';
import UploadNewMessagePage from './Pages/Admin/upload/UploadNewMessagePage';
import MessagesPage from './Pages/Admin/messages/page';
import AMessagePage from './Pages/Admin/messages/amessage/page';
import MesagesList from './Pages/Home/Messages/MessageList';

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
        
        <div className='app bg-gray-100'>
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
