import { useState } from "react";
import star from "../assets/images/estrella.png"
import yellowStar from "../assets/images/estrella-de-navidad.png"
import diamond from "../assets/images/gemas.png"
import "./Details.css"


function Details({ apartmentDetail }) {

    const [showDescription, setShowDescription] = useState(false);

    const toggleDescriptionVisibility = () => {
        setShowDescription(!showDescription);
    }



    return (
        <>
            <div className="everything">
                <div className="fullPage">
                    <div className="column1">
                        <h1 className="title">{apartmentDetail.name}</h1>
                        <img className="detailsImg" src={apartmentDetail.picture_url.url} alt="" />
                        <h3 className="locationDetails">{apartmentDetail.property_type} in {apartmentDetail.city}, {apartmentDetail.country}</h3>
                        <ul className="generalDetails">
                            <li>{apartmentDetail.accommodates} guests</li>
                            <li>{apartmentDetail.bedrooms} bedrooms</li>
                            <li>{apartmentDetail.bathrooms} bathrooms</li>

                        </ul>
                        <h4>Price: {apartmentDetail.price} €/night</h4>
                    </div>
                    <div className="column2">
                        <div className="ratingBox">
                            <img className="starImg" src={star} alt="" />
                            <p>One of the most loved homes on Airbnb <br /> based on ratings, reviews, and reliability</p>
                            <p className="rating">{apartmentDetail.review_scores_rating}/100  <img className="yellowStar" src={yellowStar} alt="" /></p>

                        </div>

                        <p className="host">Hosted by: {apartmentDetail.host_name} <br />
                            {apartmentDetail.host_name} is a Superhost <br /> <p> Superhosts are experienced, highly rated Hosts. </p></p>
                        <div className="rareFind">
                            <img src={diamond} alt="" className="diamond" />
                            <p>  This is a rare find <br /> Pedro's place is usually fully booked.</p>
                        </div>
                        <p className="checkIn">Great check-in experience {Math.floor(Math.random() * (100 - 80 + 1)) + 80}% of recent guests gave the check-in process a 5-star rating.</p>
                    </div>
                </div>
                <div className="buttons">
                        <button onClick={toggleDescriptionVisibility} className="toggleDescription">
                            {showDescription ? 'Hide Description' : 'Show Description'}
                        </button>

                        {showDescription && (
                            <p className="description"> <br />
                                {apartmentDetail.space}
                            </p>
                        )}

                        {/* <Link to={`/properties`} >
                        <button className="back">Back</button>
                    </Link> */}
                    </div>
            </div>

        </>
    );
}

export default Details;