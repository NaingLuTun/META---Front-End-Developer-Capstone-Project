import React from 'react'

import { useState } from 'react';

const ReservationForm = (props) => {


    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const [isConfirmed, setIsConfirmed] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }
  
    const handleDateChange = (e) => {
      setDate(e);
      props.dispatch(e)
    }
  
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

  return (
    <section className='booking-form'>
      <form onSubmit={handleSubmit}>
        <fieldset>

          <div>
            <label htmlFor="reservationDate">Choose Date:</label>
            <input id="reservationDate" type="date" value={date} onChange={e => handleDateChange(e.target.value)} required/>
          </div>

          <div>
            <label htmlFor="reservationTime">Choose Time:</label>
            <select name="reservationTime" id="reservationTime" value={times} onChange={e => setTimes(e.target.value)} required>
              <option>Select a Time</option>
              {
                availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
              }
            </select>
          </div>
          {/* Number of Guests */}
          <div>
            <label htmlFor="numberOfGuests">Number of Guests:</label>
            <input type="number" id='numberOfGuests' min={1} placeholder="1" value={guests} onChange={e => setGuests(e.target.value)} required/>
          </div>
          {/* Occasion */}
          <div>
            <label htmlFor="reservationOccasion">Occasion:</label>
            <select name="reservationOccasion" id="reservationOccasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          {/* Reservation Button */}
          <div className='reservationBtn' onClick = {handleSubmit}>
            <button>Make Your Reservation</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default ReservationForm