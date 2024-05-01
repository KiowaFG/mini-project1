import "./Section.css";
import apartment_data from "../data/project_data.json";
import starIcon from "../assets/images/star.png"

const apartment_data_test = apartment_data.results.slice(0,19)

const Section = () => {
    return (
        <div className="major-container">
            {
                apartment_data_test.map((apartment) => {
                    return (
                        <div key={apartment.id} className="main-container">
                            <img className="image-portfolio" src={apartment.picture_url.url} alt="test" />
                            {/* <img src="" alt="" />  We need to add bookmark icon/image here*/}
                            <div className="lower-container">
                                <div className="lower2-container">
                                    <h2>{apartment.city}, {apartment.country}</h2>
                                    <h3>{apartment.neighbourhood}</h3>
                                    <h3>Host: {apartment.host_name}</h3>
                                    <h4>Max capacity: {apartment.accommodates} people</h4>
                                    <h4>{apartment.price}€ night</h4>
                                </div>
                                <div className="lower3-container">
                                    <img className="rate-icon" src={starIcon} alt="" />
                                    <h4>{apartment.review_scores_rating}/100</h4>
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