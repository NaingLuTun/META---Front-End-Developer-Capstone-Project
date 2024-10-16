import React from 'react'

import "../css/Testimonials.css"

import personImg1 from "../assets/icons_assets/person1.jpg"
import personImg2 from "../assets/icons_assets/person2.jpg"
import personImg3 from "../assets/icons_assets/person3.jpg"

import starImg from "../assets/icons_assets/star-svgrepo-com.svg"

const Testimonials = () => {
    const numberOfStars = [1, 2, 3, 4, 5]
  return (
    <section className="testimonialsSection">
        <h1 className="testimonialsHeader">Testimonials</h1>

        <div className="testimonialsCardsContainer">
            <div className="testimonialsCard">
                <div className="ratingContainer">
                    {numberOfStars.map((_, index) => (
                        <img key={index} src={starImg} alt="rating" className="starImg" />
                    ))}
                </div>

                <div className='testimonialsCardHeaderContainer'>
                    <img src={personImg1} alt="person 1" className="personImg"/>
                    <p className="personName">Emily Johnson</p>
                </div>

                <p className="testimonialsPara">
                    Little Lemon's Bruschetta is a symphony of flavors; perfectly crispy bread coupled with the freshest tomatoes.
                </p>
            </div>

            <div className="testimonialsCard">
                <div className="ratingContainer">
                    {numberOfStars.map((_, index) => (
                        <img key={index} src={starImg} alt="rating" className="starImg" />
                    ))}
                </div>

                <div className='testimonialsCardHeaderContainer'>
                    <img src={personImg2} alt="person 2" className="personImg"/>
                    <p className="personName">Ethan Parker</p>
                </div>

                <p className="testimonialsPara">
                    The burger at Little Lemon was a taste revelation with its juicy, perfectly cooked meat and harmonious ingredient pairing.
                </p>
            </div>

            <div className="testimonialsCard">
                <div className="ratingContainer">
                    {numberOfStars.map((_, index) => (
                        <img key={index} src={starImg} alt="rating" className="starImg" />
                    ))}
                </div>

                <div className='testimonialsCardHeaderContainer'>
                    <img src={personImg3} alt="person 3" className="personImg"/>
                    <p className="personName">Sophia Ramirez</p>
                </div>

                <p className="testimonialsPara">
                    The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing. 
                </p>
            </div>

        </div>
    </section>
  )
}

export default Testimonials