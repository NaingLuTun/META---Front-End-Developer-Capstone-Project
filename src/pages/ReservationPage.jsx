import React from 'react'

import Header from '../components/Header'
import Highlight from "../components/Highlight"
import Footer from "../components/Footer"
import ReservationForm from '../components/ReservationForm'

const ReservationPage = (props) => {
  return (
    <>
        <Header />
        <ReservationForm availableTimes={props.availableTimes} dispatch={props.dispatch}/>
        <Highlight />
        <Footer />
    </>
  )
}

export default ReservationPage