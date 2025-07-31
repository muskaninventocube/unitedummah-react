import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommunityEventsStats from './Components/CommunityEventsStats';
import Home from './Components/home';
import Static from './Components/static';
import UpcomingEvents from './Components/upcomingevents';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <Home />
        <CommunityEventsStats />
        <Static />
        <UpcomingEvents />
  </React.StrictMode>
);
