import { Link } from "react-router-dom";
import starIcon from "../assets/images/star.png";
import heartFilledIcon from "../assets/images/filledheart_icon.png";
import "./Favorites.css";

const Bookmarks = ({ favArray, setFavArray }) => {
    const setFavStateFunction = (id) => setFavArray([...favArray.filter(element => element.id !== id)]);
    if (favArray.length !== 0) {
        return (
            <div className="major-container">
                {
                    favArray.map((apartment) => {
                        return (
                            <div key={apartment.id} className="main-container">
                                <img onClick={() => setFavStateFunction(apartment.id)} className="fav-icon" src={heartFilledIcon} alt="test" />
                                <Link key={apartment.id} to={`/details/${apartment.id}`}>
                                    <img className="image-portfolio" src={apartment.picture_url.url} alt="test" />
                                    <div className="lower-container">
                                        <div className="lower2-container">
                                            <h5>{`${apartment.property_type} in ${apartment.neighbourhood ? apartment.neighbourhood : "La Latina"}`}</h5>
                                            <p className="card-info">{`${apartment.city}, ${apartment.country}`}</p>
                                            <p className="card-info">Max capacity: {apartment.accommodates} people</p>
                                            <p className="priceCard-info"><span className="bold">€{apartment.price}</span> night</p>
                                        </div>
                                        <div className="lower3-container">
                                            <img className="rate-icon" src={starIcon} alt="" />
                                            <p className="rating-info">{apartment.review_scores_rating ? apartment.review_scores_rating / 10 : `N/A`}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div className="major-container">
                <div className="nofavorites">No Favorites Selected</div>
            </div>
        )
    };
};

export default Bookmarks;