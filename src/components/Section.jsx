import "./Section.css";
import { useState } from "react";
import apartment_data from "../data/project_data.json";
import starIcon from "../assets/images/star.png";
import heartFilledIcon from "../assets/images/filledheart_icon.png";
import heartIcon from "../assets/images/heart_icon.png";

const apartment_data_test = apartment_data.results

const Section = () => {
    return (
        <div className="major-container">
            {
                apartment_data_test.map((apartment) => {
                    const [favState, setFavState] = useState(false);
                    const setFavStateFunction = () => setFavState(!favState);
                    return (
                        <div key={apartment.id} className="main-container">
                            <img className="image-portfolio" src={apartment.picture_url.url} alt="test" />
                            <img onClick={setFavStateFunction} className="fav-icon" src={favState ? heartFilledIcon : heartIcon} alt="test" />
                            {/* <img src="" alt="" />  We need to add bookmark icon/image here*/}
                            <div className="lower-container">
                                <div className="lower2-container">
                                    <h5>{`${apartment.property_type} in ${apartment.neighbourhood ? apartment.neighbourhood : "La Latina"}`}</h5>
                                    <p className="card-info">{`${apartment.city}, ${apartment.country}`}</p>
                                    {/* <p>Host: {apartment.host_name}</p> */}
                                    <p className="card-info">Max capacity: {apartment.accommodates} people</p>
                                    <p className="priceCard-info"><span className="bold">€{apartment.price}</span> night</p>
                                </div>
                                <div className="lower3-container">
                                    <img className="rate-icon" src={starIcon} alt="" />
                                    <p className="rating-info">{apartment.review_scores_rating ? apartment.review_scores_rating/10 : `N/A`}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Section;