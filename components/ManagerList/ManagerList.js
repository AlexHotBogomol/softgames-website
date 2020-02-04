import React from 'react';
import managerPhoto from "../../assets/images/managerPhoto.png";
import AlexPhoto from "../../assets/images/company/Alex.png";
import AndrePhoto from "../../assets/images/company/Andre.png";
import BerndPhoto from "../../assets/images/company/Bernd.png";
import ManagerCard from "./ManagerCard/ManagerCard";
import './ManagerList.scss';

const ManagerList = props => {
  return (
    <div className="managerList">
      <ManagerCard
        managerName="Alexander Krug"
        managerPosition="CEO & Co-Founder"
        renderManagerHistory={() => (
          <div className="managerCard-history">
            <p>
              Previously working at Yahoo!, Alexander is a serial games industry entrepreneur
              with more than 10 years of experience in making big things happen.
            </p>
            <p>Alexander possesses excellent corporate strategy skills and is a person of
              proven ability to act as results-oriented leader who collaboratively develops
              innovative solutions, spearheads change, and engages the team in creating
              successful outcomes. Furthermore Alexander is a well known ambassador and
              pioneer of HTML5 gaming through worldwide articles and speaking events such
              as Casual Connect, Pocket Gamer Connects, White Nights, Devgamm,
              Gamescom and many more.</p>
          </div>
        )}
        managerPhoto={AlexPhoto}
        photoPosition="left"
        linkedinLink="https://www.linkedin.com/in/alexanderkrug/"
      />
      <ManagerCard
        managerName="Andre Krug"
        managerPosition="COO & Co-Founder"
        renderManagerHistory={() => (
          <div className="managerCard-history">
            <p>
              During his carreer at SOFTGAMES Andre has managed the release of more than
              250+ mobile and branded web commercial games winning several industry
              awards and claiming various top charts. Being in charge of all user engagement
              activities, Andre oversees with his teams all tasks around user KPI´s, developer
              relations, brand marketing and content licensing.
            </p>
            <p>As an executive business veteran with a strong B2B focus Andre has grown
              SOFTGAMES worldwide extensive developer network, a role perfect for him
              given his previous business development experience at Mindmatics in Austria.
              Besides his media management bachelor title Andre holds a master degree in
              Marketing & Sales.
            </p>
          </div>
        )}
        managerPhoto={AndrePhoto}
        photoPosition="right"
        linkedinLink="https://www.linkedin.com/in/krugandre/"
      />
      <ManagerCard
        managerName="Bernd Beyreuther"
        managerPosition="Head of Studio"
        renderManagerHistory={() => (
          <div className="managerCard-history">
            <p>
              During his carreer at SOFTGAMES Andre has managed the release of more than
              250+ mobile and branded web commercial games winning several industry
              awards and claiming various top charts. Being in charge of all user engagement
              activities, Andre oversees with his teams all tasks around user KPI´s, developer
              relations, brand marketing and content licensing.
            </p>
            <p>
              As an executive business veteran with a strong B2B focus Andre has grown
              SOFTGAMES worldwide extensive developer network, a role perfect for him
              given his previous business development experience at Mindmatics in Austria.
              Besides his media management bachelor title Andre holds a master degree in
              Marketing & Sales.
            </p>
          </div>
        )}
        managerPhoto={BerndPhoto}
        photoPosition="right"
        linkedinLink="https://www.linkedin.com/in/berndbeyreuther/"
      />
    </div>
  )
};

export default ManagerList