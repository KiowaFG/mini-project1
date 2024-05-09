import { useEffect } from "react";
import searchBar from "../assets/images/search.png";
import "./SearchBar.css";

const SearchBar = ({
  setDataArray,
  inputData,
  setInputData,
  allApartments,
}) => {
  const updateArray = (e) => {
    setInputData(e.target.value);
  };
  const triggerSetArray = () => {
    setDataArray(
      allApartments.filter(
        (element) =>
          element.city.toLowerCase().includes(inputData.toLowerCase()) ||
          element.country.toLowerCase().includes(inputData.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    triggerSetArray();
  }, []);

  return (
    <div className="search-box">
      <button className="btn-search">
        <img className="search-image" src={searchBar} alt="" />
      </button>
      <input
        onKeyUp={(e) => e.key === "Enter" && triggerSetArray()}
        onChange={updateArray}
        type="text"
        className="input-search"
        placeholder="Type to Search..."
        value={inputData}
      ></input>
    </div>
  );
};

export default SearchBar;
