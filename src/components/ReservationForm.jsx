import React from 'react'

import { useState } from 'react';

import "../css/ReservationForm.css"

import backArrowIcon from "../assets/icons_assets/back-svgrepo-com.svg"

const ReservationForm = (props) => {


    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const [isConfirmed, setIsConfirmed] = useState(false)

    const [isValid, setIsValid] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsConfirmed(true)
    }
  
    

    const validate = () => {
      if(date && times) {
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    }

    const handleDateChange = (e) => {
      setDate(e);
      validate()
      props.dispatch(e)
    }
  
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

  return (
    <>
      {!isConfirmed && 
      (
        <section className='reservationForm'>

          

          <form onSubmit={handleSubmit}>
            <fieldset className='fieldset'>
              <h1 className='reservationHeader'>Table Reservation</h1>

              <div className='chooseDateContainer inputfieldContainer'>
                <label htmlFor="reservationDate">Choose Date<span className='requiredSign'>*</span></label>
                <input id="reservationDate" type="date" value={date} onChange={e => handleDateChange(e.target.value)} required/>
              </div>

              <div className='chooseTimeContainer inputfieldContainer'>
                <label htmlFor="reservationTime">Choose Time<span className='requiredSign'>*</span></label>
                <select name="reservationTime" id="reservationTime" value={times} onChange={e => setTimes(e.target.value)} required>
                  <option>Select a Time</option>
                  {
                    availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                  }
                </select>
              </div>

              <div className='chooseGuestsContainer inputfieldContainer'>
                <label htmlFor="numberOfGuests">Number of Guests</label>
                <input type="number" id='numberOfGuests' min={1} placeholder="1" value={guests} onChange={e => setGuests(e.target.value)} required/>
              </div>

              <div className='chooseOccasionContainer inputfieldContainer'>
                <label htmlFor="reservationOccasion">Occasion</label>
                <select name="reservationOccasion" id="reservationOccasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
                  <option>Select an occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </div>

              <div className='confirmationBtnContainer'>
                <button className='confirmationBtn' disabled={!isValid} onClick = {handleSubmit}>Make Your Reservation</button>
              </div>
            </fieldset>
          </form>
        </section>
      )}

      {isConfirmed && 
      (
        <div className='confirmationContainer'>
          <p className='confirmationText'>Your reservation have been confirmed!</p>
          <button className='backToForm' onClick={() => setIsConfirmed(false)}><img className='backToFormIcon' src={backArrowIcon} alt='back'/></button>
        </div>
      )}
    
    </>
    
  )
}

export default ReservationForm