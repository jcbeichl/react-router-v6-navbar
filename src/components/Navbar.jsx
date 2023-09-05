import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiPlanet } from "react-icons/pi";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NavbarData } from "../data/NavbarDataProvider";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <PiPlanet className="navbar-icon" />
            Planet
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaXmark /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {NavbarData.map((data) => {
              return (
                <li className="nav-item" key={data.label}>
                  <Button
                    to={data.path}
                    onClick={closeMobileMenu}
                    label={data.label}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
