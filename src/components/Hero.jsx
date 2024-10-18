import React from 'react'
import "../css/Hero.css"

import heroImg from "../assets/icons_assets/restaurant chef B.jpg"

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="heroSection">

        <div className="heroTexts">
            <h1 className="heroHeaderName">Little Lemon</h1>
            <h1 className="heroHeaderLocation">Chicago</h1>

            <p className="heroPara">
            Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art.
            </p>

            <button className="reserveTableBtn">
                <Link className="reserveTableLink" to="/reservation">Reserve a table</Link>
            </button>
        </div>

        <div className="heroSectionImgContainer">
          <img src={heroImg} alt="chef image" className="heroSectionImg"/>
        </div>
        

    </section>
  )
}

export default Hero