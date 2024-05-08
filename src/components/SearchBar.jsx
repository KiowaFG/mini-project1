import "./SearchBar.css"
import searchBar from "../assets/images/search.png"
import apartment_data from "../data/project_data.json";
import { useEffect } from "react";

const SearchBar = ({ setDataArray, inputData, setInputData }) => {
    // Question for Marcel - why need to add useEffect to sort out delay?
    // improve searchbar functionality
    useEffect(() => {
        setDataArray(
            apartment_data.results.filter(element => element.city.toLowerCase().includes(inputData.toLowerCase()) ||
                element.country.toLowerCase().includes(inputData.toLowerCase()))
        )
    }, [inputData]);
    const updateArray = (e) => {
        setInputData(e.target.value);
    };

    return (
        <div className="search-box">
            <button className="btn-search"><img className="search-image" src={searchBar} alt="" /></button>
            <input onChange={updateArray} type="text" className="input-search" placeholder="Type to Search..."></input>
        </div>
    )
}

export default SearchBar;