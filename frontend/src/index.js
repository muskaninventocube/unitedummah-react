import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommunityEventsStats from './Components/CommunityEventsStats';
import Home from './Components/home';
import Static from './Components/static';
import UpcomingEvents from './Components/upcomingevents';
import CommunityServices from './Components/CommunityServices';
import Footer from './Components/Footer';
// import Header from './Components/header';
import UmmahBuild from './Components/ummahBuild';
import TestHoverGallery from "./Components/TestHoverGallery"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="relative w-full overflow-x-hidden">
    {/* <Header /> */}
    <Home />
        <CommunityEventsStats />
        <Static />
     
  <UpcomingEvents />
  <CommunityServices />
  <UmmahBuild />
  <Footer />
  <TestHoverGallery/>
</div>
  </React.StrictMode>
);
