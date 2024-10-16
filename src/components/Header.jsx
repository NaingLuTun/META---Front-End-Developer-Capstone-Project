import React, { useState } from 'react'
import "../css/HeaderNav.css"
import hamburgerMenu from "../assets/icons_assets/hamburger_icon1.svg"

import navLogo from "../assets/icons_assets/Logo1.svg"
const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  
  const handleViewMenu = () => {
    setMenuActive(!menuActive)
  }
  return (
    <header className="header">
        <nav className="mainNav">
          <img src={navLogo} alt="logo" className="homeLogo"/>

          <div className="hamburgerMenuContainer">
            <img src={hamburgerMenu} alt="menu" onClick={handleViewMenu} className="hamburgerMenuImg"/>
            {menuActive && 
            (
              <ul className="hamburgerNavLinksContainer">
                <li className="navLinkLists"><a href="/" className="navLinks">Home</a></li>
                <li className="navLinkLists"><a href="/" className="navLinks">About</a></li>
                <li className="navLinkLists"><a href="/" className="navLinks">Menu</a></li>
                <li className="navLinkLists"><a href="" className="navLinks">Reservations</a></li>
                <li className="navLinkLists"><a href="/" className="navLinks">Order Online</a></li>
                <li className="navLinkLists"><a href="/" className="navLinks">Login</a></li>
              </ul>
            )

            }
          </div>
          


          <ul className="navLinksContainer">
            <li className="navLinkLists"><a href="/" className="navLinks">Home</a></li>
            <li className="navLinkLists"><a href="/" className="navLinks">About</a></li>
            <li className="navLinkLists"><a href="/" className="navLinks">Menu</a></li>
            <li className="navLinkLists"><a href="" className="navLinks">Reservations</a></li>
            <li className="navLinkLists"><a href="/" className="navLinks">Order Online</a></li>
            <li className="navLinkLists"><a href="/" className="navLinks">Login</a></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header