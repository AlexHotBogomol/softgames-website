import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import axios from "axios";
import Loader from "react-loader-spinner";

class Publishers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
  };

  render() {
    const {loading} = this.state;
    return (
      <div id="content">
        {loading ? (
          <Loader
            type="Puff"
            color="#F5842D"
            height={100}
            width={100}
            timeout={0}
            className="Loader"
          />
        ) : (
          <Fragment>
            Publishers
          </Fragment>
        )}
      </div>
    )
  }
}

export default Publishers;