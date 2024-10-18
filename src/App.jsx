import "./css/App.css"

import HomePage from "./pages/HomePage"

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import ReservationPage from "./pages/ReservationPage"

import { useReducer } from "react"

function App() {

  const randomSeed = (seed) => {
      const m = 2**35 - 31;
      const a = 185852;
      let s = seed % m;
      return () => {
      return (s = s * a % m) /m;
    }
  }

  const fetchAPI = (date) => {
      let result = [];
      let random = randomSeed(date.getDate());
      for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
          result.push(i + ':00');
        }
        if(random() > 0.5) {
          result.push(i + ':30');
        }
      }
      return result;
  } 

  const updateTimes = (state, date) => {
    return {availableTimes: fetchAPI(new Date())}
  }


  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage availableTimes={state} dispatch={dispatch}  />}/>
          <Route path="*" element={<Navigate to="/home-page" />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
