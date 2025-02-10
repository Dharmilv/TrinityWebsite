import { Nav, Navbar } from "react-bootstrap";
import "../index.css";
import image from "../resources/images/trinity-cropped.png";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY; // To track the previous scroll position

    const handleScroll = () => {
      if (window.scrollY > 50 && window.scrollY > lastScrollY) {
        // Scrolling down past 50px
        setIsScrolled(true);
      } else if (window.scrollY <= 50 || window.scrollY < lastScrollY) {
        // Scrolling up or back to the top
        setIsScrolled(false);
      }
      lastScrollY = window.scrollY; // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(image);

  return (
    <Navbar
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      className={`sticky-top bg-black  ${
        isScrolled ? "bg-opacity-100 backdrop-blur-md" : "bg-gray-900"
      }`}
      variant="dark"
    >
      <div className="container">
        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle
          className="toggle"
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        {/* Navbar Content */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Left Links */}
          <Nav className="mr-auto d-flex align-items-center">
            <NavLink
              className="nav-link mx-3"
              to="/events"
              onClick={() => setExpanded(false)}
            >
              Events
            </NavLink>
            <NavLink
              className="nav-link mx-3"
              to="/team"
              onClick={() => setExpanded(false)}
            >
              Team
            </NavLink>
            <NavLink
              className="nav-link mx-3"
              to="/leaderboard"
              onClick={() => setExpanded(false)}
            >
              Leaderboard
            </NavLink>
            {/*
						<a
							className="nav-link mx-3"
							href="https://idpt-leaderboard.web.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Leaderboard
						</a>
						*/}
          </Nav>

          {/* Logo */}
          <div className="mx-4 text-center">
            <a href="/">
              <img
                src={image}
                alt="Trinity Logo"
                width="180"
                height="70"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/180x70"; // Placeholder in case of failure
                }}
              />
            </a>
          </div>

          {/* Right Links */}
          <Nav className="ml-auto d-flex align-items-center">
            <NavLink
              className="nav-link mx-3"
              to="/sponsors"
              onClick={() => setExpanded(false)}
            >
              Sponsors
            </NavLink>
            <NavLink
              className="nav-link mx-3"
              to="/gallery"
              onClick={() => setExpanded(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              className="nav-link mx-3"
              to="/contact"
              onClick={() => setExpanded(false)}
            >
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
