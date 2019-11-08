import React from "react";
import "./NewsCard.scss";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/ArrowRight";

const NewsCard = ({ id, slug, title, date, img, onClick}) => {
  function getFormattedDate(unFormatedDate) {
    const date = new Date(Date.parse(unFormatedDate));
    return `${date.getDate()}/${date.getMonth() + 1}/${date
      .getFullYear()
      .toString()
      .slice(2, 4)}`;
  }
  return (
    <div className="newsCard">
      <Link to={`/blog/${slug}`} className="newsCard-img">
        <img src={img} alt={title} />
      </Link>
      <div className="newsCard-content">
        <p className="accentText newsCard-date">{getFormattedDate(date)}</p>
        <h5 className="newsCard-title">{title}</h5>
        <Link className="accentText newsCard-link" to={`/blog/${slug}`}>Read More<ArrowRight/></Link>
      </div>
    </div>
  );
};

export default NewsCard;
