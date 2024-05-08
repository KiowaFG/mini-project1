import { useParams } from "react-router-dom";
import apartment_data from "../data/project_data.json";
import Details from "../components/Details";
import "./ApartmentListing.css"

const ApartmentDetails = () => {
    const { apartmentId } = useParams()
    const apartmentDetail = apartment_data.results.find(element => element.id === apartmentId)
    console.log(apartmentDetail);
    return (
        <div className='upper-container'>
            <Details apartmentDetail={apartmentDetail} />
        </div>
    )
}

export default ApartmentDetails;