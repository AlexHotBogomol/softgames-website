import React from 'react';
import './ManagerCard.scss';
import Linkedin from "../../SocialBlock/Socials/Linkedin";

const ManagerCard = ({managerName, managerPosition, renderManagerHistory, managerPhoto, photoPosition, linkedinLink}) => {
  const renderManagerPhoto = (linkedinPosition) =>{
    const iconClasses = [
      'managerCard-linkedin',
      `managerCard-linkedin--${linkedinPosition}`
    ];
    return (
      <div className="managerCard-photoWrapper">
        <img src={managerPhoto} alt={managerName} />
        <Linkedin className={iconClasses.join(" ")} link={linkedinLink}/>
      </div>
    );
  };

  return (
    <div className="managerCard">
      <div className="row">
        {photoPosition === "left" ? (
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            {renderManagerPhoto("right")}
          </div>
        ) : null}
        <div className="col-lg-6">
          <h3 className="managerCard-name">{managerName}</h3>
          <h5 className="managerCard-position">{managerPosition}</h5>
          {renderManagerHistory()}
        </div>
        {photoPosition !== "left" ? (
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            {renderManagerPhoto("left")}
          </div>
        ) : null}
      </div>
    </div>
  )
};

export default ManagerCard