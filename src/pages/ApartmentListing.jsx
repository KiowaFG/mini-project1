import Section from "../components/Section";
import SearchBar from '../components/SearchBar';
import "./ApartmentListing.css"
import { useEffect } from "react";

const ApartmentListing = ({ dataArray, setDataArray, favArray, setFavArray, inputData, setInputData, dummyTrigger }) => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    }, []);
    
    return (
        <div className='upper-container'>
            <SearchBar setDataArray={setDataArray} inputData={inputData} setInputData={setInputData} />
            <Section dataArray={dataArray} favArray={favArray} setFavArray={setFavArray} />
        </div>
    )
};

export default ApartmentListing;