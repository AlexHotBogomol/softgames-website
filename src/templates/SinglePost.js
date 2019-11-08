import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import axios from "axios";
import Loader from "react-loader-spinner";
import Header from "../partials/Header/Header";
import Footer from "../partials/Footer/Footer";
import Sidebar from "../partials/Sidebar/Sidebar";

class SinglePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      acfOptions: {},
      headerMenuItems: []
    };

    this.wpApiService = new WpApiService();

    this.slug = this.props.match.params.slug;
  }

  componentDidMount = () => {
    axios
      .all([
        this.wpApiService.getAcfOptions(),
        this.wpApiService.getMenuBySlug("header-menu"),
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
            <section className="singlePost">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="breadcrumb">Home/ News/ {this.slug}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    SinglePost
                  </div>
                  <div className="col-lg-4">
                    <Sidebar/>
                  </div>
                </div>
              </div>
            </section>
            <Footer joinUsOptions={acfOptions.join_us} />
          </Fragment>
        )}
      </div>
    )
  }
}

export default SinglePost;