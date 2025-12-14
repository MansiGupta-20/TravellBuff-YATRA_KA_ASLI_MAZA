import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/pictures/logo.png';
import '../App.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);
  const closeNavbar = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbar, { toggle: true });
      bsCollapse.hide();
    }
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link fw-semibold gap-3 ${isActive ? 'active' : ''}`;

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm animate__animated animate__fadeInDown
        ${isHome ? (scrolled ? 'navbar-translucent' : 'navbar-colored') : 'navbar-colored'}`}
    >
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <img src={logo} alt="Logo" height="60" />
          <h2 className="fw-bold ms-3 mb-0 text-green">St. Peter's School</h2>
        </NavLink>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end mt-2" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <NavLink to="/" end className={navLinkClass} onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/info" className={navLinkClass} onClick={closeNavbar}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/events" className={navLinkClass} onClick={closeNavbar}>
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admission" className={navLinkClass} onClick={closeNavbar}>
                Admission
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={navLinkClass} onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item ms-lg-4 mt-2 mt-lg-0">
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  `nav-auth-btn shadow-sm ${isActive ? 'active' : ''}`
                }
                onClick={closeNavbar}
              >
                Sign In / Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
