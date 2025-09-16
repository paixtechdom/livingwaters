import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense, useState } from 'react';
import { Loader } from './Components/Utils/Loader';
import { PageNotFound } from './Pages/PageNotFound';
import { AppContext } from './App';
import { HelmetProvider } from 'react-helmet-async';
import { Footer } from './Components/Sections/Footer';
import Navbar from './Components/Sections/Navbar';
import { ZoomedImage } from './Components/Gallery/ZoomedImage';
import Alert from './Components/Alert';



const WhoWeAre = lazy(() => import('./Pages/About/WhoWeAre'));

const Home = lazy(() => import('./Pages/Home/Home'));
const MessagesPage = lazy(() => import('./Pages/Media/Messages/MessagesPage'));
const PicturesPage = lazy(() => import('./Pages/Media/Pictures/PicturesPage'));
const VideosPage = lazy(() => import('./Pages/Media/Videos/VideosPage'));
const Give = lazy(() => import('./Pages/Give/Give'));
const TestimonyPage = lazy(() => import("./Pages/Testimonies/TestimonyPage"))
const Leaders = lazy(() => import('./Pages/About/Leaders'));
const Partnership = lazy(() => import("./Pages/Give/Partnership"))
const Announcements = lazy(() => import("./Pages/info_center/Announcements")) 
const Conferences = lazy(() => import("./Pages/info_center/Conferences")) 
const IbadanPage = lazy(() => import ('./Pages/Centers/IbadanPage'));
const BeninPage = lazy(() => import ('./Pages/Centers/BeninPage'));


const AMessagePage = lazy(() => import('./Pages/Admin/messages/amessage/page'));
// const MessagesPage = lazy(() => import('./Pages/Admin/messages/page'));
const UploadNewMessagePage = lazy(() => import('./Pages/Admin/upload/UploadNewMessagePage'));
const LoginPage = lazy(() => import('./Pages/Admin/Login/LoginPage'));



export const AppRouter = () => {  
    const [ loginTo, setLoginTo ] = useState('/admin/messages')
    const [ images, setImages ] = useState([])


    return (
        <HelmetProvider>
            <AppContext.Provider value={{ images, setImages,  loginTo, setLoginTo }}>
            <Alert /> 
            <Router>
                <Suspense fallback={<Loader />}>
                    <Navbar />
                    <ZoomedImage />
                   <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us/who-we-are" element={<WhoWeAre />} />
                        <Route path="/about-us/our-leaders" element={<Leaders />} />
                        <Route path="/media/pictures" element={<PicturesPage />} />
                        <Route path="/give" element={<Give />} />
                        <Route path="/partnership" element={<Partnership />} />
                        <Route path="/media/messages" element={<MessagesPage />} />
                        <Route path="/testimonies" element={<TestimonyPage />} />
                        <Route path="/centers/ibadan" element={<IbadanPage />} />
                        <Route path="/centers/benin-republic" element={<BeninPage />} />

                        
                        {/* <Route path="/info-center/announcements" element={<Announcements />} />
                        <Route path="/info-center/conferences" element={<Conferences />} /> */}


                        <Route path="/media/videos" element={<VideosPage />} />
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