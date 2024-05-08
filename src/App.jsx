import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ApartmentListing from './pages/ApartmentListing';
import ApartmentFavorites from './pages/ApartmentFavorites';
import ApartmentDetails from './pages/ApartmentDetails';
import HomePage from './components/HomePage'
import './App.css'

function App() {
  const [favArray, setFavArray] = useState([]);
  // const [searchArray, setSearchArray] = useState([]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/properties" element={<ApartmentListing favArray={favArray} setFavArray={setFavArray} />}></Route>
        <Route path="/favorites" element={<ApartmentFavorites favArray={favArray} setFavArray={setFavArray} />}></Route>
        <Route path="/details/:apartmentId" element={<ApartmentDetails />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
