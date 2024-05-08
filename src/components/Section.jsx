import { Link } from "react-router-dom";
import { useState } from "react";
import starIcon from "../assets/images/star.png";
import heartFilledIcon from "../assets/images/filledheart_icon.png";
import heartIcon from "../assets/images/heart_icon.png";
import "./Section.css";

const Section = ({ dataArray, favArray, setFavArray }) => {
    return (
        <div className="major-container">
            {
                dataArray.map((apartment) => {
                    // Code below needs to be refactored, hooks cannot live within loops
                    // const [favState, setFavState] = useState(false);
                    // const setFavStateFunction = (id) => {
                    //     if (!favState) {
                    //         const newFavArray = [...favArray, ...dataArray.filter(element => element.id === id)];
                    //         setFavArray(newFavArray);
                    //     } else {
                    //         const newFavArray = [...favArray.filter(element => element.id !== id)];
                    //         setFavArray(newFavArray);
                    //     };
                    //     setFavState(!favState);
                    // };
                    // Code to refacor ends here
                    return (
                        <div key={apartment.id} className="main-container">
                            <img onClick={() => setFavStateFunction(apartment.id)} className="fav-icon" src= {heartIcon} alt="test" />  {/*{favState ? heartFilledIcon : heartIcon} alt="test" />  */}
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
};

export default Section;