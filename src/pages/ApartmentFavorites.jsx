import Favorites from "../components/Favorites";


const ApartmentFavorites = ({ favArray, setFavArray }) => {
    return (
        <div className="upper-container">
            <Favorites favArray={favArray} setFavArray={setFavArray} />
        </div>
    )
};

export default ApartmentFavorites;