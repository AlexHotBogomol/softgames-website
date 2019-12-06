import "./NewsCard.scss";
import Link from "next/link";
import ArrowRight from "../../assets/icons/ArrowRight";
import Helper from "../../utils/Helper";

const helper = new Helper();

const NewsCard = ({ slug, title, date, img}) => {
  const newDate = helper.formatDate(date);
  return (
    <div className="newsCard">
      <Link href={`/blog/${slug}`}>
        <a className="newsCard-img">
          <img src={img} alt={title} />
        </a>
      </Link>
      <div className="newsCard-content">
        <p className="accentText newsCard-date">{newDate}</p>
        <h5 className="newsCard-title">{title}</h5>
        <Link href={`/blog/${slug}`}>
          <a className="accentText newsCard-link">
            Read More<ArrowRight/>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
