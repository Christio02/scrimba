import PropTypes from "prop-types";
import Star from "/images/Star1.png";

Card.propTypes = {
  img: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <span>
          <p>SOLD OUT</p>
        </span>

        <img src={props.img}></img>
      </div>

      <div className="rating-container">
        <img src={Star} className="star"></img>
        <span>{props.rating}</span>
        <span className="gray"> ({props.reviewCount}) * </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
