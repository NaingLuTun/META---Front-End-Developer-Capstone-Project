import React, { useState } from 'react'
import "../css/HeaderNav.css"
import hamburgerMenu from "../assets/icons_assets/hamburger_icon1.svg"

import navLogo from "../assets/icons_assets/Logo1.svg"
import { Link } from 'react-router-dom'
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
                <li className="navLinkLists"><Link to="/home-page" className="navLinks">Home</Link></li>
                <li className="navLinkLists"><Link to="/home-page" className="navLinks">About</Link></li>
                <li className="navLinkLists"><Link to="/home-page" className="navLinks">Menu</Link></li>
                <li className="navLinkLists"><Link to="/reservation" className="navLinks">Reservations</Link></li>
                <li className="navLinkLists"><Link to="/home-page" className="navLinks">Order Online</Link></li>
                <li className="navLinkLists"><Link to="/home-page" className="navLinks">Login</Link></li>
              </ul>
            )

            }
          </div>
          


          <ul className="navLinksContainer">
            <li className="navLinkLists"><Link to="/home-page" className="navLinks">Home</Link></li>
            <li className="navLinkLists"><Link to="/home-page" className="navLinks">About</Link></li>
            <li className="navLinkLists"><Link to="/home-page" className="navLinks">Menu</Link></li>
            <li className="navLinkLists"><Link to="/reservation" className="navLinks">Reservations</Link></li>
            <li className="navLinkLists"><Link to="/home-page" className="navLinks">Order Online</Link></li>
            <li className="navLinkLists"><Link to="/home-page" className="navLinks">Login</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header