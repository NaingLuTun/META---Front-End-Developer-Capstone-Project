import "./css/App.css"

import HomePage from "./pages/HomePage"

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import ReservationPage from "./pages/ReservationPage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />}/>
          <Route path="*" element={<Navigate to="/home-page" />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
