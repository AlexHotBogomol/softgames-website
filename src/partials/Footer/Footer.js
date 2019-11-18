import React, { Component } from "react";
import { Link } from "react-router-dom";
import WpApiService from "../../services/WpApiService";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      acfOptions: {}
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    this.wpApiService.getAcfOptions().then(({ data: acfOptions }) => {
      this.setState({
        acfOptions
      });
    });
  };

  render() {
    const { join_us: joinUsOptions } = this.state.acfOptions;

    return (
      <footer className="footer">
        {joinUsOptions ? (
          <section
            className="joinUs"
            style={{ backgroundImage: `url(${joinUsOptions.image.url})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-auto mx-auto">
                  <h2 className="joinUs-title">{joinUsOptions.title}</h2>
                  <div className="joinUs-separator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <Link
                    to={joinUsOptions.button_internal_link}
                    className="btn btn--secondaryInverse"
                  >
                    {joinUsOptions.button_text}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </footer>
    );
  }
}

export default Footer;
