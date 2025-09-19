
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <NavLink to="/" className="logo">
        <h1>Sharma</h1>
      </NavLink>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to="/" end activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Project" activeClassName="active-link">
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
