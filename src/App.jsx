import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ApartmentListing from './pages/ApartmentListing';
import ApartmentFavorites from './pages/ApartmentFavorites';
import ApartmentDetails from './pages/ApartmentDetails';
import HomePage from './components/HomePage'
import './App.css'

function App() {
  const [favArray, setFavArray] = useState([]);
  const [inputData, setInputData] = useState("");
  const [dummyTrigger, setDummyTrigger] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if(e.key === "Enter"){
      setInputData(e.target.value);
      navigate("/properties")
    };
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage handleSubmit={handleSubmit} />} />
        <Route path="/properties" element={<ApartmentListing favArray={favArray} setFavArray={setFavArray} inputData={inputData} setInputData={setInputData} dummyTrigger={dummyTrigger} />}></Route>
        <Route path="/favorites" element={<ApartmentFavorites favArray={favArray} setFavArray={setFavArray} />}></Route>
        <Route path="/details/:apartmentId" element={<ApartmentDetails />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
