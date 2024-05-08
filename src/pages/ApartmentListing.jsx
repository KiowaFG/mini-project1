import { useState } from 'react'
import Section from "../components/Section";
import SearchBar from '../components/SearchBar';
import apartment_data from "../data/project_data.json";
import "./ApartmentListing.css"



const ApartmentListing = ({ favArray, setFavArray, inputData, setInputData, dummyTrigger }) => {
    const [dataArray, setDataArray] = useState(apartment_data.results);

    return (
        <div className='upper-container'>
            <SearchBar dataArray={dataArray} setDataArray={setDataArray} inputData={inputData} setInputData={setInputData} dummyTrigger={dummyTrigger}/>
            <Section dataArray={dataArray} favArray={favArray} setFavArray={setFavArray} inputData={inputData} />
        </div>
    )
};

export default ApartmentListing;