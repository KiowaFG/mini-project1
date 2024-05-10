import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Details from "../components/Details";
import "./ApartmentListing.css";

const ApartmentDetails = ({ dataArray }) => {
  const { apartmentId } = useParams();
  const apartmentDetail = dataArray.find(
    (element) => element.id === apartmentId,
  );

  // consider creating a function to handle the scroll that you can import in other components
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="upper-container">
      <Details apartmentDetail={apartmentDetail} />
    </div>
  );
};

export default ApartmentDetails;
