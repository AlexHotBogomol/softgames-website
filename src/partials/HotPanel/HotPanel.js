import React, { Component } from "react";
import "./HotPanel.scss";
import WpApiService from "../../services/WpApiService";
import OpenPositionsIcon from "../../assets/icons/OpenPositionIcon";
import {Link} from 'react-router-dom';

class HotPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positions: []
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount() {
    this.wpApiService
      .getAllPositions()
      .then(({data: {offers: positions}}) => {
        this.setState({
          positions
        });
      });
  }

  render() {
    return (
      <div className="hotPanel">
        <button className="hotPanel-positions">
          {this.state.positions.length ? (
            <span className="hotPanel-positionsCounter">
              {this.state.positions.length}
            </span>
          ) : null}
          open positions
          <Link to={'/career/'} className="hotPanel-positionsBadge">
            <div className="hotPanel-positionsInfo">
              {this.state.positions.length ? (
                <h4 className="hotPanel-positionsCounter">
                  {this.state.positions.length}
                </h4>
              ) : null}
              <h4>open positions</h4>
            </div>
            <OpenPositionsIcon />
          </Link>
        </button>
        <button className="hotPanel-contactUs">contact us</button>
      </div>
    );
  }
}

export default HotPanel;
