import React from 'react'

import aboutImg1 from "../assets/icons_assets/Mario and Adrian A.jpg"
import aboutImg2 from "../assets/icons_assets/restaurant.jpg"

import "../css/About.css"
const About = () => {
  return (
    <section className='aboutSection'>
        <div className="aboutTextsContainer">
            <h1 className="aboutSectionNameHeader aboutSectionHeader">Little Lemon</h1>
            <h2 className="aboutSectionLocationHeader aboutSectionHeader">Chicago</h2>

            <p className="aboutPara">
                Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art. Crafted by expert chefs with locally-sourced ingredients, our dishes not only delight the palate but nourish the soul. Whether you're seeking a romantic dinner, a family meal, or a relaxed atmosphere with friends, Little Lemon is your ideal culinary destination. Find us in the heart of Chicago for an unforgettable experience.
            </p>
        </div>


        <div className="aboutSectionImgContainer">
            <img src={aboutImg1} alt="restaurant" className="aboutImg1 aboutImg" />
            <img src={aboutImg2} alt="restaurant" className="aboutImg2 aboutImg"/>
        </div>

    </section>
  )
}

export default About