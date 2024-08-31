import { Link } from "react-router-dom";
import "./Card.css";
export const Card = ({ title, price, address, date, img, id }) => {
  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card--img">
        <img src={img} alt="card" />
      </div>
      <h5 className="card--title">{title}</h5>
      <strong className="card--price">{price}</strong>
      <div className="card--desc-box">
        <span className="card--desc">{address}</span>
        <span className="card--desc">{date}</span>
      </div>
    </Link>
  );
};
