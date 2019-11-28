import React from 'react';
import managerPhoto from "../../assets/images/managerPhoto.png";
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
        managerPhoto={managerPhoto}
        photoPosition="left"
        linkedinLink="https://www.google.com"
      />
      <ManagerCard
        managerName="Alexander Krug"
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
        managerPhoto={managerPhoto}
        photoPosition="right"
        linkedinLink="https://www.google.com"
      />
      <ManagerCard
        managerName="Christian Rudnick"
        managerPosition="CTO"
        renderManagerHistory={() => (
          <div className="managerCard-history">
            <p>
              Before joining SOFTGAMES, Christian gathered over 12 years of experience in
              high scalability cross platform development, cluster computing and analytic
              software set up´s.
            </p>
            <p>Previously, Christian worked at social network PinStyle as their CTO introducing
              high level analytics and cross platform communications. Prior to this he was the
              technical product management director of iconmobile technologies and in
              charge of mobile platform development.
            </p>
            <p>
              At SOFTGAMES Christian as the CTO is responsible for SOFTGAMES overall
              technology decisions, as well as engineering, operations and information
              technology. His passion and enthusiasm for clean, agile engineering drives the
              technology culture throughout our Platform.
            </p>
          </div>
        )}
        managerPhoto={managerPhoto}
        photoPosition="left"
        linkedinLink="https://www.google.com"
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
        managerPhoto={managerPhoto}
        photoPosition="right"
        linkedinLink="https://www.google.com"
      />
    </div>
  )
};

export default ManagerList