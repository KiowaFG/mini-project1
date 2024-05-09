import "./Section.css";
import ApartmentCard from "./ApartmentCard";

const Section = ({ dataArray, favArray, setFavArray }) => {
  if (dataArray.length !== 0) {
    return (
      <div className="major-container11">
        {dataArray.map((apartment) => {
          return (
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              favArray={favArray}
              setFavArray={setFavArray}
              dataArray={dataArray}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="major-container11">
        <div className="nofavorites">{`No properties found`}</div>
      </div>
    );
  }
};

export default Section;
