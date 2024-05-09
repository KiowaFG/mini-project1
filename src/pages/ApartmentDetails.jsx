import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import apartment_data from "../data/project_data.json";
import Details from "../components/Details";
import "./ApartmentListing.css"

const ApartmentDetails = ({dataArray}) => {
    const { apartmentId } = useParams()
    console.log(dataArray);
    const apartmentDetail = dataArray.find(element => element.id === apartmentId)
    console.log(apartmentDetail);
    console.log(apartmentId);
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    }, []);
    
    return (
        <div className='upper-container'>
            <Details apartmentDetail={apartmentDetail} />
        </div>
    )
}

export default ApartmentDetails;