import PropTypes from "prop-types";
import LocLogo from "/images/loc.svg";
const Card = (props) => {
  console.log(props.location);
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.img} alt="Card Image" />
      </div>
      <div className="card-contents">
        <span className="card-location-header">
          <img src={LocLogo}></img>
          <p>{props.country}</p>
          <a href={props.mapsLink} target="_blank" rel="noreferrer">
            View on Google maps
          </a>
        </span>
        <div className="card-text">
          <h3>{props.location}</h3>
          <p>{props.dateRange}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mapsLink: PropTypes.string.isRequired,
};

export default Card;
