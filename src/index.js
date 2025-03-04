import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './CSS/MemberPage.css'
import './CSS/SponsersPage.css'
import './CSS/GalleryPage.css'
import './CSS/HomePage.css'
import './CSS/EventsPage.css'
import App from './App'
// import './CSS/MemberPageCSS.css'
// import './CSS/SponsersPage.css'
// import './'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
