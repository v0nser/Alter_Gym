import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logoblack.svg';
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
    <nav className="navbar container">
            <a href="/" className="logo"><img src={logo} alt="Logo" /></a>
            <input type="checkbox" id="toggler" />
            <label for="toggler"><i class="ri-menu-line"></i></label>
            <div class="menu">
                <ul className="list">
                  <li>
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to='/location'>LOCATION</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">ABOUT</NavLink>
                  </li>
                  <li>
                    <NavLink to="/service">SERVICE</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contacts">CONTACTS</NavLink>
                  </li>
                  <li>
                     <NavLink to="/freetrial" className='btn1'>FREE TRIAL</NavLink>
                  </li>
                  <li>
                    <NavLink to="/join" className="btn2">JOIN</NavLink>
                  </li>
                </ul>
            </div>
        </nav>
  </>
  );
};

export default NavBar;


