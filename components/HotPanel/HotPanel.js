import React, { useState, useEffect, useContext } from "react";
import ModalContext from "../ModalContext";
import "./HotPanel.scss";
import axios from 'axios';
import apiEndpoints from '../../utils/apiEndpoints';
import OpenPositionsIcon from "../../assets/icons/OpenPositionIcon";
import LinkSmoothScroll from "../LinkSmoothScroll";

const HotPanel = props => {
  const [positions, setPositions] = useState([]);

  const {openModal} = useContext(ModalContext);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const loadData = () => {
      try{
        axios.get(apiEndpoints.positions, { cancelToken: source.token }).then(({ data: { offers: positions } }) => {
          setPositions(positions);
        })
      } catch(error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      source.cancel();
    }
  }, []);

  return (
    <div className="hotPanel">
      <button className="hotPanel-positions">
        {positions.length ? (
          <span className="hotPanel-positionsCounter">{positions.length}</span>
        ) : null}
        open positions
        <LinkSmoothScroll href="/career/#job-openings">
          <a className="hotPanel-positionsBadge">
            <div className="hotPanel-positionsInfo">
              {positions.length ? (
                <h4 className="hotPanel-positionsCounter">{positions.length}</h4>
              ) : null}
              <h4>open positions</h4>
            </div>
            <OpenPositionsIcon />
          </a>
        </LinkSmoothScroll>
      </button>
      <button className="hotPanel-contactUs" onClick={openModal}>contact us</button>
    </div>
  );
};

export default HotPanel;
