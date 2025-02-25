import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import React, { lazy, Suspense, useState } from 'react';
import { Loader } from './Components/Utils/Loader';
import { Alert } from './Components/Utils/Alert';
import { PageNotFound } from './Pages/PageNotFound';
import { AppContext } from './App';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Pages/Home/Home';
import { Footer } from './Components/Sections/Footer';
import Navbar from './Components/Sections/Navbar';
import WhoWeAre from './Pages/WhoWeAre/WhoWeAre';
import MediaPage from './Pages/Media/MediaPage';
import MessagesPage from './Pages/Media/Messages/MessagesPage';
import PicturesPage from './Pages/Media/Pictures/PicturesPage';
import { ZoomedImage } from './Components/Utils/ZoomedImage';


const AMessagePage = lazy(() => import('./Pages/Admin/messages/amessage/page'));
// const MessagesPage = lazy(() => import('./Pages/Admin/messages/page'));
const UploadNewMessagePage = lazy(() => import('./Pages/Admin/upload/UploadNewMessagePage'));
const LoginPage = lazy(() => import('./Pages/Admin/Login/LoginPage'));


export const AppRouter = () => {  
    
    const [ showAlert, setShowAlert ] = useState(false)
    const [ alertType, setAlertType ] = useState('')
    const [ alertMessage, setAlertMessage ] = useState('')
    const [ loginTo, setLoginTo ] = useState('/admin/messages')
    const [ images, setImages ] = useState([])


    return (
        <HelmetProvider>
            <AppContext.Provider value={{ images, setImages, showAlert, setShowAlert, alertType, setAlertType, alertMessage, setAlertMessage,   loginTo, setLoginTo }}>
            { showAlert && <Alert /> } 
            <Router>
                <Suspense fallback={<Loader />}>
                    <Navbar />
                    <ZoomedImage />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/who-we-are" element={<WhoWeAre />} />
                        <Route path="/media" element={<MediaPage />} />
                        <Route path="/audio-messages" element={<MessagesPage />} />
                        <Route path="/pictures" element={<PicturesPage />} />
                        <Route path="/admin/upload" element={<UploadNewMessagePage />} />
                        <Route path="/admin/login" element={<LoginPage />} />
                        <Route path="/admin/messages/:id" element={<AMessagePage />} />
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>

            </AppContext.Provider>
        </HelmetProvider>
    );
  };