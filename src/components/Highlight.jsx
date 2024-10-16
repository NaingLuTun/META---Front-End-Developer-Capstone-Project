import React from 'react'

import "../css/Highlight.css"

import greekSaladImg from "../assets/icons_assets/greek salad.jpg"
import bruschettaImg from "../assets/icons_assets/bruchetta.svg"
import lemonDessertImg from "../assets/icons_assets/lemon dessert.jpg"

import deliveryImg from "../assets/icons_assets/motorcycle-1-svgrepo-com.svg"

const Hightlight = () => {
  return (
    <section className="menuSection">
        <div className="menuHeaderContainer">
            <h1 className="menuHeader">Specials</h1>
            <button className="menuBtn">Online Menu</button>
        </div>

        <div className="menuCardsContainer">
            <div className="menuCard">
                <img src={greekSaladImg} alt="greek salad" className="menuCardImg" />

                <div className="menuCardInfoContainer">

                    <div className="menuCardHeaderContainer">
                        <h2 className="menuCardDishName">Greek Salad</h2>
                        <p className="dishPrice">$12.99</p>
                    </div>

                    <p className="menuCardDescription">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                    </p>

                    <button className="deliveryBtn">
                        Order a delivery <img src={deliveryImg} alt="delivery" className="deliveryImg" />
                    </button>
                    
                </div>
            </div>

            <div className="menuCard">
                <img src={bruschettaImg} alt="bruschetta" className="menuCardImg" />

                <div className="menuCardInfoContainer">

                    <div className="menuCardHeaderContainer">
                        <h2 className="menuCardDishName">Bruschetta</h2>
                        <p className="dishPrice">$5.99</p>
                    </div>

                    <p className="menuCardDescription">
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
                    </p>

                    <button className="deliveryBtn">
                        Order a delivery <img src={deliveryImg} alt="delivery" className="deliveryImg" />
                    </button>
                    
                </div>
            </div>

            <div className="menuCard">
                <img src={lemonDessertImg} alt="lemon dessert" className="menuCardImg" />

                <div className="menuCardInfoContainer">

                    <div className="menuCardHeaderContainer">
                        <h2 className="menuCardDishName">Lemon Dessert</h2>
                        <p className="dishPrice">$5.00</p>
                    </div>

                    <p className="menuCardDescription">
                        This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. 
                    </p>

                    <button className="deliveryBtn">
                        Order a delivery <img src={deliveryImg} alt="delivery" className="deliveryImg" />
                    </button>
                    
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Hightlight