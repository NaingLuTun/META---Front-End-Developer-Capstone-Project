import "./css/App.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlight from "./components/Highlight"
import About from "./components/About"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Highlight />
        <Testimonials />
        <About />
      </main>

      <Footer />
    </>
  )
}

export default App
