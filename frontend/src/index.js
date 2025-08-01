import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommunityEventsStats from './Components/CommunityEventsStats';
import Home from './Components/home';
import Static from './Components/static';
import UpcomingEvents from './Components/upcomingevents';
import CommunityServices from './Components/CommunityServices';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <Home />
        <CommunityEventsStats />
        <Static />
       <div className="h-[5000px] overflow-y-scroll">
  <UpcomingEvents />
  <CommunityServices />
</div>
  </React.StrictMode>
);
