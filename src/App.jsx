import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ApartmentListing from './pages/ApartmentListing';
import ApartmentFavorites from './pages/ApartmentFavorites';
import ApartmentDetails from './pages/ApartmentDetails';
import HomePage from './pages/HomePage'
import AddApartmentPage from './pages/AddApartmentPage';
import apartment_data from "./data/project_data.json";
import './App.css'

function App() {
  const [dataArray, setDataArray] = useState(apartment_data.results);
  const [favArray, setFavArray] = useState([]);
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setInputData(e.target.value);
      navigate("/properties")
    };
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage handleSubmit={handleSubmit} />} />
        <Route path="/properties" element={<ApartmentListing dataArray={dataArray} setDataArray={setDataArray} favArray={favArray} setFavArray={setFavArray} inputData={inputData} setInputData={setInputData} />}></Route>
        <Route path="/favorites" element={<ApartmentFavorites favArray={favArray} setFavArray={setFavArray} />}></Route>
        <Route path="/details/:apartmentId" element={<ApartmentDetails dataArray={dataArray} />}></Route>
        <Route path="/add_apartment" element={<AddApartmentPage dataArray={dataArray} setDataArray={setDataArray} />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
