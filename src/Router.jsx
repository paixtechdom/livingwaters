import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import React, { lazy, Suspense, useState } from 'react';
import { Loader } from './Components/Loader';
import { Alert } from './Components/Alert';
import { PageNotFound } from './Components/PageNotFound';
import { delayLoad } from './assets/Functions';
import { AppContext } from './App';
import { HelmetProvider } from 'react-helmet-async';



const MesagesList = lazy(() => delayLoad(import('./Pages/Home/Messages/MessageList')));
const AMessagePage = lazy(() => delayLoad(import('./Pages/Admin/messages/amessage/page')));
const MessagesPage = lazy(() => delayLoad(import('./Pages/Admin/messages/page')));
const UploadNewMessagePage = lazy(() => delayLoad(import('./Pages/Admin/upload/UploadNewMessagePage')));
const LoginPage = lazy(() => delayLoad(import('./Pages/Admin/Login/LoginPage')));
const Navbar = lazy(() => delayLoad(import('./Components/Navbar')));


export const AppRouter = () => {  
    
    const [ currentNav, setCurrentNav ] = useState(0)
    const [ showAlert, setShowAlert ] = useState(false)
    const [ alertType, setAlertType ] = useState('')
    const [ alertMessage, setAlertMessage ] = useState('')
    const [ loginTo, setLoginTo ] = useState('/admin/messages')


    return (
        <HelmetProvider>
            <AppContext.Provider value={{ currentNav, setCurrentNav, showAlert, setShowAlert, alertType, setAlertType, alertMessage, setAlertMessage,   loginTo, setLoginTo }}>
            { showAlert && <Alert /> } 
            <Router>
                <Suspense fallback={<Loader />}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<MesagesList />} />
                        <Route path="/admin/upload" element={<UploadNewMessagePage />} />
                        <Route path="/admin/login" element={<LoginPage />} />
                        <Route path="/admin/messages" element={<MessagesPage />} />
                        <Route path="/admin/messages/:id" element={<AMessagePage />} />
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </Router>

            </AppContext.Provider>
        </HelmetProvider>
    );
  };