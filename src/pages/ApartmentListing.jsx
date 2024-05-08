import Section from "../components/Section";
import SearchBar from '../components/SearchBar';
import "./ApartmentListing.css"

const ApartmentListing = ({ dataArray, setDataArray, favArray, setFavArray, inputData, setInputData, dummyTrigger }) => {
    return (
        <div className='upper-container'>
            <SearchBar dataArray={dataArray} setDataArray={setDataArray} inputData={inputData} setInputData={setInputData} dummyTrigger={dummyTrigger} />
            <Section dataArray={dataArray} favArray={favArray} setFavArray={setFavArray} />
        </div>
    )
};

export default ApartmentListing;