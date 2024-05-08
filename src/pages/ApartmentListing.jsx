import { useState } from 'react'
import Section from "../components/Section";
import SearchBar from '../components/SearchBar';
import apartment_data from "../data/project_data.json";
import "./ApartmentListing.css"



const ApartmentListing = ({ favArray, setFavArray }) => {
    const [dataArray, setDataArray] = useState(apartment_data.results);
    const [inputData, setInputData] = useState("");
    
    return (
        <div className='upper-container'>
            <SearchBar dataArray={dataArray} setDataArray={setDataArray} inputData={inputData} setInputData={setInputData} />
            <Section dataArray={dataArray} favArray={favArray} setFavArray={setFavArray} />
        </div>
    )
};

export default ApartmentListing;