import React from 'react';
import './ManagerCard.scss';
import Linkedin from "../../SocialBlock/Socials/Linkedin";

const ManagerCard = ({managerName, managerPosition, renderManagerHistory, managerPhoto, linkedinLink}) => {
  return (
    <div className="managerCard">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="managerCard-name">{managerName}</h3>
          <h5 className="managerCard-position">{managerPosition}</h5>
          {renderManagerHistory()}
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div className="managerCard-photoWrapper">
            <img src={managerPhoto} alt={managerName} />
            <Linkedin className="managerCard-linkedin" link={linkedinLink}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ManagerCard