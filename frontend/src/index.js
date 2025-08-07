import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommunityEventsStats from './Components/CommunityEventsStats';
import Home from './Components/home';
import Static from './Components/static';
import UpcomingEvents from './Components/upcomingevents';
import CommunityServices from './Components/CommunityServices';
import Footer from './Components/Footer';
import Header from './Components/header';
import UmmahBuild from './Components/ummahBuild';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="relative w-full overflow-x-hidden overflow-y-hidden">
       <div className="fixed top-8 left-12 right-12 z-40 rounded-full overflow-hidden">
      <Header />
        
    </div>


    <Home />
        <CommunityEventsStats />
      
     </div>
<Static />
       
  <UpcomingEvents />
  <CommunityServices />
 
   <div className=" overflow-x-hidden">
     <UmmahBuild />
  <Footer />
   </div>
 

  </React.StrictMode>
);
