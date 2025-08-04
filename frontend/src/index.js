import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommunityEventsStats from './Components/CommunityEventsStats';
import Home from './Components/home';
import Static from './Components/static';
// import UpcomingEvents from './Components/upcomingevents';
import CommunityServices from './Components/CommunityServices';
import Footer from './Components/Footer';
import UmmahBuild from './Components/ummahBuild';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <Home />
        <CommunityEventsStats />
        <Static />
       
  {/* <UpcomingEvents /> */}
  <CommunityServices />
  <UmmahBuild />
  <Footer />
{/* </div> */}
  </React.StrictMode>
);
