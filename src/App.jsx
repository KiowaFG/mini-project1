import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// When we have this amount of imports, is good to divide them in groups separated by a blank line or comments to make it more readable for other developers
// Also, think about handling the exports in a single file so you can import them all at once
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ApartmentListing from "./pages/ApartmentListing";
import ApartmentFavorites from "./pages/ApartmentFavorites";
import ApartmentDetails from "./pages/ApartmentDetails";
import HomePage from "./pages/HomePage";
import AddApartmentPage from "./pages/AddApartmentPage";
import apartment_data from "./data/project_data.json";
import "./App.css";
import AboutUs from "./components/AboutUs";

function App() {
  const [dataArray, setDataArray] = useState(apartment_data.results);
  const [allApartments, setAllApartments] = useState(apartment_data.results);
  const [favArray, setFavArray] = useState([]);
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();

  // If the function is only used in one component, you can declare it inside the component
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setInputData(e.target.value);
      navigate("/properties");
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage handleSubmit={handleSubmit} />} />
        <Route
          path="/properties"
          element={
            <ApartmentListing
              allApartments={allApartments}
              dataArray={dataArray}
              setDataArray={setDataArray}
              favArray={favArray}
              setFavArray={setFavArray}
              inputData={inputData}
              setInputData={setInputData}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <ApartmentFavorites favArray={favArray} setFavArray={setFavArray} />
          }
        ></Route>
        <Route
          path="/details/:apartmentId"
          element={<ApartmentDetails dataArray={dataArray} />}
        ></Route>
        <Route
          path="/add_apartment"
          element={
            <AddApartmentPage
              dataArray={dataArray}
              setDataArray={setDataArray}
              allApartments={allApartments}
              setAllApartments={setAllApartments}
            />
          }
        ></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
