import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import axios from "axios";
import Loader from "react-loader-spinner";
import Header from "../partials/Header/Header";
import Footer from "../partials/Footer/Footer";

class Developers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      acfOptions: {},
      headerMenuItems: []
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    axios
      .all([
        this.wpApiService.getAcfOptions(),
        this.wpApiService.getMenuBySlug("header-menu")
      ])
      .then(
        axios.spread(
          (
            {data: acfOptions},
            {data: headerMenuItems},
          ) => {
            this.setState({
              loading: false,
              acfOptions,
              headerMenuItems,
            });
          }
        )
      );
  };

  render() {
    const {loading, acfOptions, headerMenuItems} = this.state;
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
            <Header menuItems={headerMenuItems}/>
            Developers
            <Footer joinUsOptions={acfOptions.join_us} />
          </Fragment>
        )}
      </div>
    )
  }
}

export default Developers;