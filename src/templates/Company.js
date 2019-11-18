import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import Loader from "react-loader-spinner";
import AboutUsBlock from "../partials/AboutUsBlock";
import SeoBlock from "../partials/SeoBlock";

class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      pageData: {},
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    this.wpApiService.getPageBySlug("advertisers").then(({ data: pageData }) => {
      this.setState({
        pageData
      })
    })
  };

  render() {
    const {loading, pageData} = this.state;
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
            Company
            {pageData.acf &&
            pageData.acf.add_about_us_block &&
            pageData.acf.add_about_us_block.length ? (
              <AboutUsBlock
                heading={pageData.acf.about_us_block.heading}
                image={pageData.acf.about_us_block.image}
                content={pageData.acf.about_us_block.content}
                withButton={
                  !!pageData.acf.about_us_block.add_contact_us_button.length
                }
              />
            ) : null}

            {pageData.acf &&
            pageData.acf.add_seo_block &&
            pageData.acf.add_seo_block.length ? (
              <SeoBlock
                heading={pageData.acf.seo_block.heading}
                image={pageData.acf.seo_block.image}
                content={pageData.acf.seo_block.content}
                withButton={
                  !!pageData.acf.seo_block.add_contact_us_button.length
                }
              />
            ) : null}
          </Fragment>
        )}
      </div>
    )
  }
}

export default Company;