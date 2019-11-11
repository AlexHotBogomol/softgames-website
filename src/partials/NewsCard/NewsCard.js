import React from "react";
import "./NewsCard.scss";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/ArrowRight";
import Helper from "../../services/Helper";

const helper = new Helper();

const NewsCard = ({ slug, title, date, img}) => {
  const newDate = helper.formatDate(date);
  return (
    <div className="newsCard">
      <Link to={`/blog/${slug}`} className="newsCard-img">
        <img src={img} alt={title} />
      </Link>
      <div className="newsCard-content">
        <p className="accentText newsCard-date">{newDate}</p>
        <h5 className="newsCard-title">{title}</h5>
        <Link className="accentText newsCard-link" to={`/blog/${slug}`}>Read More<ArrowRight/></Link>
      </div>
    </div>
  );
};

export default NewsCard;
