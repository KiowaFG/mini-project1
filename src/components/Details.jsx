import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Details.css"


function Details( {apartmentDetail}) {
  return (
    <>

        <h1>{apartmentDetail.name}</h1>
        <img src={apartmentDetail.picture_url.url} alt="" />
        <p>{apartmentDetail.room_type} in {apartmentDetail.city}, {apartmentDetail.country}</p>
        <ul>
            <li>{apartmentDetail.accommodates} guests</li>
            <li>{apartmentDetail.bedrooms} bedrooms</li>
            <li>{apartmentDetail.bathrooms}bathrooms</li>

        </ul>
        <p>Host: {apartmentDetail.host_name}</p>
        <p>{apartmentDetail.host_name} is a Superhost <br /> <p> Superhosts are experienced, highly rated Hosts. </p></p>

        <p>This is a rare find <br /> <p> Pedro's place is usually fully booked.</p></p>
        <p>Great check-in experience {/*math random */} 95% of recent guests gave the check-in process a 5-star rating.</p>
        
        <p>Description: <br />
            {apartmentDetail.space} <br />
            {apartmentDetail.description}
        </p>
        <p className="rating">{apartmentDetail.review_scores_rating}</p>

    </>
  );
}

export default Details;