import searchBar from "../assets/images/search.png"
import apartment_data from "../data/project_data.json";
import "./SearchBar.css"

const SearchBar = ({ setDataArray, inputData, setInputData }) => {
    const updateArray = (e) => {
        setInputData(e.target.value);
    };
    const triggerSetArray = () => {
        setDataArray(
            apartment_data.results.filter(element => element.city.toLowerCase().includes(inputData.toLowerCase()) ||
                element.country.toLowerCase().includes(inputData.toLowerCase()))
        )
    };
    
    return (
        <div className="search-box">
            <button className="btn-search"><img className="search-image" src={searchBar} alt="" /></button>
            <input onKeyUp={(e) => e.key === "Enter" && triggerSetArray()} onChange={updateArray} type="text" className="input-search" placeholder="Type to Search..." value={inputData}></input>
        </div>
    )
}

export default SearchBar;