import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Socials from './components/Socials';
import Footer from './components/Footer';
import MembersPage from './components/Members-page-components/MembersPage';
import ContactUsPage from './components/contactus-page-components/registration';
import Sponsors from './components/sponsors';
import GalleryPage from './components/GalleryPageComponents/GalleryPage';
import Leaderboard from './components/Leaderboard/Leaderboard';
import EventsPage from './components/Events-page-components/EventsPage';
import Sportspage from './components/Sports-page-components/Sports';
import Cultural from './components/Cultural-page-component/Cultural';
import Technical from './components/Technical-page-component/Technical';
import HomePage from './components/HomePage/Home';

const App = () => {
 
  return (
    <>
      <Navbar />
      
      <Routes>
      <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/events" element={<EventsPage />} />
        <Route path="/team" element={<MembersPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/sports" element={<Sportspage />} />
        <Route path="/cultural" element={<Cultural />} />
        <Route path="/technical" element={<Technical />} />
      </Routes>
      <Socials />
      <Footer />
    </>
  );
};

export default App;
