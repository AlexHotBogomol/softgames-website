import Download from "../../../assets/icons/Download";
import hr from "../../../assets/images/hr.jpg";
import './PressKit.scss';

const PressKit = props => {
  return (
    <div className="sidebar-block pressKit">
        <h2 className="sidebar-heading">
          Press Kit
        </h2>
        <p className="pressKit-description">
          You need material for your coverage such as company information, photos, logos, or screenshots?
        </p>
        <a
          href="https://www.google.com"
          download
          className="btn btn--primary btn--withIcon pressKit-btn"
        >
          <Download />
          <span>Download link</span>
        </a>
        <p className="pressKit-extra">(full Press kit as ZIP-file)</p>
        <p className="pressKit-question">
          You need additional material or have further media inquiries?
        </p>
        <p className="pressKit-question">
          Please contact us:
        </p>
        <div className="hrCard">
          <div className="hrCard-imgWrapper">
            <img src={hr} alt="hr" />
          </div>
          <div className="hrCard-content">
            <h5>Name</h5>
            <p>PR & Communications Manager</p>
            <p>+ 12 345 67 890</p>
          </div>
        </div>
        <a href={`mailto:press@softgames.com`} className="btn btn--secondary w-100">
          PRESS@SOFTGAMES.COM
        </a>
    </div>
  )
};

export default PressKit