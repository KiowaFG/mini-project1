import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Section from './components/Section'
import apartment_data from "./data/project_data.json";
import Favorites from './components/Favorites';

function App() {
  const [dataArray, setDataArray] = useState(apartment_data.results)
  const [favArray, setFavArray] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/properties" element={<Section dataArray={dataArray} favArray={favArray} setFavArray={setFavArray} />}></Route>
        <Route path="/favorites" element={<Favorites favArray={favArray} setFavArray={setFavArray} />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
