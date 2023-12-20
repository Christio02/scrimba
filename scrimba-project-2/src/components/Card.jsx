import PropTypes from "prop-types";
import Star from "/images/Star1.png";

Card.propTypes = {
  coverImg: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  openSpots: PropTypes.number.isRequired,
  stats: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card-container">
      {badgeText ? <div className="card-badge">{badgeText}</div> : null}
      <div className="card-image-container">
        <img src={props.coverImg}></img>
      </div>

      <div className="rating-container">
        <img src={Star} className="star"></img>
        <span>{props.stats.rating}</span>
        <span className="gray"> ({props.stats.reviewCount}) * </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
