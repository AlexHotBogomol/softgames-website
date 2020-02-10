import "./NewsCard.scss";
import ArrowRight from "../../assets/icons/ArrowRight";
import Helper from "../../utils/Helper";

const helper = new Helper();

const NewsCard = ({ slug, title, date, img}) => {
  const newDate = helper.formatDate(date);
  return (
    <div className="newsCard">
      <a href={`/news/${slug}`} className="newsCard-img">
        <img src={img} alt={title} />
      </a>
      <div className="newsCard-content">
        <p className="accentText newsCard-date">{newDate}</p>
        <h5 className="newsCard-title">{title}</h5>
        <a href={`/news/${slug}`} className="accentText newsCard-link">
          Read More<ArrowRight/>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
