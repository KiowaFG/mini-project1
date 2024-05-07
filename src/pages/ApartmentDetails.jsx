import { useParams } from "react-router-dom";
import apartment_data from "../data/project_data.json";

const ApartmentDetails = () => {
    const {apartmentId} = useParams()
    const apartmentDetail = apartment_data.results.find(element => element.id === apartmentId)
    // console.log(apartmentDetail);
    return 
}

export default ApartmentDetails;