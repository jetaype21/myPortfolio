import React from "react"
import { About } from "./components/aboout/About"
import { Contact } from "./components/contact/Contact"
import { Experience } from "./components/experience/Experience"
import { Footer } from "./components/footer/Footer"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import { Portfolio } from "./components/portfolio/Portfolio"

function App() {

  return (
    <div className="App">
      < Header />
      < Nav />
      < About /> 
      < Experience />
      < Portfolio />
      < Contact />
      < Footer />
    </div>
  )
}

export default App
