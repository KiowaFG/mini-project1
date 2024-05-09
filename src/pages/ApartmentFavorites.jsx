import { useEffect } from "react";
import Favorites from "../components/Favorites";

const ApartmentFavorites = ({ favArray, setFavArray }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="upper-container">
      <Favorites favArray={favArray} setFavArray={setFavArray} />
    </div>
  );
};

export default ApartmentFavorites;
