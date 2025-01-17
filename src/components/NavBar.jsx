import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../index.css'
import image from '../resources/images/trinity-cropped.png'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

function NavBar() {
	const [expanded, setExpanded] = useState(false)
	return (
		<Navbar
			expanded={expanded}
			collapseOnSelect
			expand='lg'
			className='nav sticky-top '
			variant='dark'
		>
			<div className='container'>
				<div className='nav-content'>
					<Navbar.Brand>
						<NavLink className='image' to='/' onClick={() => setExpanded(false)}>
							<img
								src={image}
								alt='trinity logo'
								width='180'
								height='70'
								className='d-inline-block align-top '
							/>
						</NavLink>
					</Navbar.Brand>
				</div>
				<Navbar.Toggle
					className='toggle'
					aria-controls='responsive-navbar-nav'
					onClick={() => setExpanded(!expanded)}
				/>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<ul className='navbar-nav nav-links'>
							<li>
								<NavLink to='/' end onClick={() => setExpanded(false)}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to='/about' onClick={() => setExpanded(false)}>
									About
								</NavLink>
							</li>
							<li>
								<NavLink to='team' onClick={() => setExpanded(false)}>
									Team
								</NavLink>
							</li>
							<li>
								<a href='https://idpt-leaderboard.web.app/'>Leaderboard</a>
							</li>
							<li>
								<NavDropdown
									style={{ marginTop: '-8px' }}
									title='Events'
									id='collasible-nav-dropdown nav-links'
								>
									<ul>
									<li style={{ width: '70%' }} className='dropdown-item'>
										<NavLink to='/sports' onClick={() => setExpanded(false)}>
											SPORTS
										</NavLink>
									</li>
									<li style={{ width: '80%' }} className='dropdown-item'>
										<NavLink to='/cultural' onClick={() => setExpanded(false)}>
											CULTURAL
										</NavLink>
									</li>
									<li style={{ width: '80%' }} className='dropdown-item'>
										<NavLink to='/technical' onClick={() => setExpanded(false)}>
											TECHNICAL
										</NavLink>
									</li>
									</ul>
								</NavDropdown>
							</li>
							<li>
								<NavLink to='/sponsors' onClick={() => setExpanded(false)}>
									Sponsors
								</NavLink>
							</li>
							<li>
								<NavLink to='/gallery' onClick={() => setExpanded(false)}>
									Gallery
								</NavLink>
							</li>
							<li>
								<NavLink to='/theme' onClick={() => setExpanded(false)}>
									Theme
								</NavLink>
							</li>
							<li>
								<NavLink to='/contact' onClick={() => setExpanded(false)}>
									Contact Us
								</NavLink>
							</li>
						</ul>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	)
}
export default NavBar
