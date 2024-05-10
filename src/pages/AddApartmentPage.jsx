import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddApartmentPage.css";

// Nice job on creating a constant for the initial state
const initialState = {
  id: "",
  name: "",
  country: "",
  city: "",
  neighbourhood: "",
  space: "",
  bathrooms: "",
  bedrooms: "",
  price: "",
  review_scores_rating: "",
  accommodates: "",
  property_type: "",
  host_name: "",
  picture_url: { url: "" },
};

const AddApartmentPage = ({
  dataArray,
  setDataArray,
  setAllApartments,
  allApartments,
}) => {
  const [dataForm, setDataForm] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {}, [dataForm]);

  const handleInput = (e) => {
    const random_id = String(Math.floor(Math.random() * 20000000000));
    const { name, value } = e.target;
    if (name === "picture_url") {
      setDataForm({ ...dataForm, [name]: { url: value }, id: random_id });
    } else {
      setDataForm({ ...dataForm, [name]: value, id: random_id });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = [dataForm, ...dataArray];
    const newArray2 = [dataForm, ...allApartments];
    setDataArray(newArray);
    setAllApartments(newArray2);
    setDataForm(initialState);
    navigate("/properties");
  };

  return (
    <div className="major-container">
      <form onSubmit={handleSubmit} className="form-row">
        <div className="form-column">
          <label htmlFor="name">Apartment Description</label>
          <input
            onChange={handleInput}
            type="text"
            name="name"
            placeholder="Piso Cava Alta / Plaza Mayor "
            value={dataForm.name}
            required
          />
          <label htmlFor="picture_url">Picture (add url)</label>
          <input
            onChange={handleInput}
            type="text"
            name="picture_url"
            placeholder="https://www.example.com"
            value={dataForm.picture_url.url}
            required
          />
          <label htmlFor="property_type">Room Type</label>
          <input
            onChange={handleInput}
            type="text"
            name="property_type"
            placeholder="Entire Apartment"
            value={dataForm.property_type}
            required
          />
          <label htmlFor="city">City</label>
          <input
            onChange={handleInput}
            type="text"
            name="city"
            placeholder="Cadaqués"
            value={dataForm.city}
            required
          />
          <label htmlFor="country">Country</label>
          <input
            onChange={handleInput}
            type="text"
            name="country"
            placeholder="Spain"
            value={dataForm.country}
            required
          />
          <label htmlFor="neighbourhood">Neighbourhood</label>
          <input
            onChange={handleInput}
            type="text"
            name="neighbourhood"
            placeholder="Carrer del Tro"
            value={dataForm.neighbourhood}
            required
          />
        </div>
        <div className="form-column">
          <label htmlFor="price">Price per Night</label>
          <input
            onChange={handleInput}
            type="number"
            min="0"
            name="price"
            placeholder="200"
            value={dataForm.price}
            required
          />
          <label htmlFor="accommodates">Accomodates</label>
          <input
            onChange={handleInput}
            type="number"
            min="0"
            name="accommodates"
            placeholder="8"
            value={dataForm.accommodates}
            required
          />
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            onChange={handleInput}
            type="number"
            min="0"
            name="bedrooms"
            placeholder="4"
            value={dataForm.bedrooms}
            required
          />
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            onChange={handleInput}
            type="number"
            name="bathrooms"
            placeholder="2"
            value={dataForm.bathrooms}
            required
          />
          <label htmlFor="review_scores_rating">Score</label>
          <input
            onChange={handleInput}
            type="number"
            min="0"
            max="100"
            name="review_scores_rating"
            placeholder="between 0 and 100"
            value={dataForm.review_scores_rating}
            required
          />
          <label htmlFor="host_name">Host Name</label>
          <input
            onChange={handleInput}
            type="text"
            name="host_name"
            placeholder="Kiowa & Al"
            value={dataForm.host_name}
            required
          />
        </div>
        <div className="form-column1">
          <label htmlFor="space">Space</label>
          <textarea
            onChange={handleInput}
            type="text"
            name="space"
            value={dataForm.space}
            placeholder="Perfecta ubicación para conocer toda la oferta cultural que ofrece Madrid (Museo del Prado..."
            required
          />
          <button className="button-74" type="submit">
            Create Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddApartmentPage;

// name , picture_url.url, room_type , city, country , accommodates, bedrooms, bathrooms,review_scores_rating, host_name,space
