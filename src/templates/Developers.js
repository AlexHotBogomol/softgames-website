import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import axios from "axios";
import Loader from "react-loader-spinner";
import Footer from "../partials/Footer/Footer";

class Developers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      acfOptions: {},
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    axios
      .all([
        this.wpApiService.getAcfOptions(),
      ])
      .then(
        axios.spread(
          (
            {data: acfOptions},
          ) => {
            this.setState({
              loading: false,
              acfOptions,
            });
          }
        )
      );
  };

  render() {
    const {loading, acfOptions} = this.state;
    console.log(this.state);
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
            Developers
            <Footer joinUsOptions={acfOptions.join_us} />
          </Fragment>
        )}
      </div>
    )
  }
}

export default Developers;