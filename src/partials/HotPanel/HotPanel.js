import React, { useState, useEffect } from "react";
import "./HotPanel.scss";
import WpApiService from "../../services/WpApiService";
import { Link } from "react-router-dom";
import OpenPositionsIcon from "../../assets/icons/OpenPositionIcon";

const HotPanel = props => {
  const wpApiService = new WpApiService();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    wpApiService.getAllPositions().then(({ data: { offers: positions } }) => {
      setPositions(positions);
    });
  }, []);

  return (
    <div className="hotPanel">
      <button className="hotPanel-positions">
        {positions.length ? (
          <span className="hotPanel-positionsCounter">{positions.length}</span>
        ) : null}
        open positions
        <Link to={"/career/"} className="hotPanel-positionsBadge">
          <div className="hotPanel-positionsInfo">
            {positions.length ? (
              <h4 className="hotPanel-positionsCounter">{positions.length}</h4>
            ) : null}
            <h4>open positions</h4>
          </div>
          <OpenPositionsIcon />
        </Link>
      </button>
      <button className="hotPanel-contactUs">contact us</button>
    </div>
  );
};

export default HotPanel;
