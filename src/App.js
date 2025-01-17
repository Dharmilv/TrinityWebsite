import './App.css'
import Home from './components/Home'
// import Details from './components/Details'
import Socials from './components/Socials'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import MembersPage from './components/Members-page-components/MembersPage'
import ContactUsPage from './components/contactus-page-components/ContactUsPage'
import AboutPage from './components/About-page-componenets/AboutPage'
import Sponsors from './components/sponsors'
import GalleryPage from './components/GalleryPageComponents/GalleryPage'
import EventsPage from './components/Events-page-components/EventsPage'
import Sportspage from './components/Sports-page-components/Sports'
import Cultural from './components/Cultural-page-component/Cultural'
import Technical from './components/Technical-page-component/Technical'
import { Theme } from './components/Theme/Theme'
// import Deprev_cards from './components/Department_reveal-components/deprev_cards'
// import Department_reveal from './components/Department-components/Department_reveal'

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/about' element={<AboutPage />} />
				<Route exact path='/team' element={<MembersPage />} />
				<Route exact path='/team' element={<MembersPage />} />
				<Route exact path='/events' element={<EventsPage />} />
				<Route exact path='/sponsors' element={<Sponsors />} />
				<Route exact path='/gallery' element={<GalleryPage />} />
				<Route exact path='/contact' element={<ContactUsPage />} />
				<Route exact path='/sports' element={<Sportspage />} />
				<Route exact path='/cultural' element={<Cultural />} />
				<Route exact path='/technical' element={<Technical />} />
				<Route exact path='/theme' element={<Theme />} />
			</Routes>
			<Socials />
			<Footer />
		</>
	)
}

export default App
