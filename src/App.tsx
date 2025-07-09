// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import BandMembersPage from './pages/BandMembers';
import MediaPage from './pages/Media';
import HonkingStuffPage from './pages/HonkingStuff';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<EventsPage />} />
        <Route path="/Band_Members" element={<BandMembersPage />} />
        <Route path="/Media" element={<MediaPage />} />
        <Route path="/Honking_Stuff" element={<HonkingStuffPage />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

