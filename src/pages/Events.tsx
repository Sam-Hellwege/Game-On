// pages/Events.tsx
import React from 'react';
import BasePage from './Base';
// import FrostedGlassPane from '../components/FrostedPane';
import EventLoader from '../components/EventLoader';
import '../assets/fonts/fonts.css'

const EventsPage: React.FC = () => {
  return (
    <BasePage title="Events">
        <EventLoader />
    </BasePage>
  );
};

export default EventsPage;
