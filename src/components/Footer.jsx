import React from 'react'
import "../css/Footer.css"

import footerImage from "../assets/icons_assets/footer-image.png"



const Footer = () => {
  return (
    <footer className="footer">
        <section className="footerContent">
        
        <img src={footerImage} alt="footer-logo" className="footerImage"/>

        <nav className="footerNav" aria-label="footer doormat navigation">
            <p className="doormatNavHeader footerNavHeader">Doormat Navigation</p>

            <ul className="footerDoormatLinksContainer footerLinksContainer">
            <li className="footerDoormatLinkLists footerLinkLists">
                <a href="/" className="footerDoormatLinks footerLinks">Home</a>
            </li>

            <li className="footerDoormatLinkLists footerLinkLists">
                <a href="/" className="footerDoormatLinks footerLinks">About</a>
            </li>

            <li className="footerDoormatLinkLists footerLinkLists">
                <a href="/" className="footerDoormatLinks footerLinks">Menu</a>
            </li>

            <li className="footerDoormatLinkLists footerLinkLists">
                <a href="/" className="footerDoormatLinks footerLinks">Reservations</a>
            </li>

            <li className="footerDoormatLinkLists footerLinkLists">
                <a href="/" className="footerDoormatLinks footerLinks">Order Online</a>
            </li>

            <li className="footerDoormatLinkLists footerLinkLists">
                <a href="/" className="footerDoormatLinks footerLinks">Login</a>
            </li>
            </ul>
        </nav>

        <nav className="footerNav" aria-label="footer contact navigation">
            <p className="contactNavHeader footerNavHeader">Contact</p>

            <ul className="footerContactLinksContainer footerLinksContainer">
            <li className="footerContactLinkLists footerLinkLists">
                <a href="/" className="footerContactLinks footerLinks">Address</a>
            </li>
            <li className="footerContactLinkLists footerLinkLists">
                <a href="/" className="footerContactLinks footerLinks">Phone number</a>
            </li>
            <li className="footerContactLinkLists footerLinkLists">
                <a href="/" className="footerContactLinks footerLinks">Email</a>
            </li>
            </ul>

        </nav>

        <nav className="footerNav" aria-label="footer socials navigation">
            <p className="socialNavHeader footerNavHeader">Social Media Links</p>

            <ul className="footerSocialLinksContainer footerLinksContainer">
            <li className="footerSocialLinkLists footerLinkLists">
                <a href="/" className="footerSocialLinks footerLinks">Address</a>
            </li>
            <li className="footerSocialLinkLists footerLinkLists">
                <a href="/" className="footerSocialLinks footerLinks">Phone number</a>
            </li>
            <li className="footerSocialLinkLists footerLinkLists">
                <a href="/" className="footerSocialLinks footerLinks">Email</a>
            </li>
            </ul>
        </nav>

        </section>
  </footer>
  )
}

export default Footer