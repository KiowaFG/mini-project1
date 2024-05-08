import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Section from './components/Section'
import HomePage from './components/HomePage'
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      
      <Route path="/" element={<HomePage/>} />
      <Route path="/section" element={<Section/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
