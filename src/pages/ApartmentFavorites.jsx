import Favorites from "../components/Favorites";


const ApartmentFavorites = ({ favArray, setFavArray }) => {
    return (
        <Favorites favArray={favArray} setFavArray={setFavArray} />
    )
};

export default ApartmentFavorites;