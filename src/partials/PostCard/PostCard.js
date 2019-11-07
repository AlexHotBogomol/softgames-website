import React from "react";
import "./PostCard.scss";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/ArrowRight";

const PostCard = ({ slug, title, date, img }) => {
  function getFormattedDate(unFormatedDate) {
    const date = new Date(Date.parse(unFormatedDate));
    return `${date.getDate()}/${date.getMonth() + 1}/${date
      .getFullYear()
      .toString()
      .slice(2, 4)}`;
  }
  return (
    <div className="postCard">
      <Link to={`/post/${slug}`} className="postCard-img">
        <img src={img} alt={title} />
      </Link>
      <div className="postCard-content">
        <p className="accentText postCard-date">{getFormattedDate(date)}</p>
        <h5 className="postCard-title">{title}</h5>
        <Link className="accentText postCard-link" to={`/post/${slug}`}>Read More<ArrowRight/></Link>
      </div>
    </div>
  );
};

export default PostCard;
