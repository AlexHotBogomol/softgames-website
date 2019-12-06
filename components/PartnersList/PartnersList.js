import './PartnersList.scss';
import PartnersItem from "./PartnersItem/PartnersItem";

const PartnersList = ({firstColumn, secondColumn, thirdColumn, fourthColumn}) => {
  return (
    <div className="row partnersList">
      <div className="col-sm-6 col-lg-3 partnersList-item">
        {firstColumn.map((partnerIcon, index) => (
          <PartnersItem key={index} icon={partnerIcon}/>
        ))}
      </div>
      <div className="col-sm-6 col-lg-3 partnersList-item">
        {secondColumn.map((partnerIcon, index) => (
          <PartnersItem key={index} icon={partnerIcon}/>
        ))}
      </div>
      <div className="col-sm-6 col-lg-3 partnersList-item">
        {thirdColumn.map((partnerIcon, index) => (
          <PartnersItem key={index} icon={partnerIcon}/>
        ))}
      </div>
      <div className="col-sm-6 col-lg-3 partnersList-item">
        {fourthColumn.map((partnerIcon, index) => (
          <PartnersItem key={index} icon={partnerIcon}/>
        ))}
      </div>
    </div>
  )
};

export default PartnersList