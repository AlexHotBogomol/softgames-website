import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import Loader from "react-loader-spinner";
import AboutUsBlock from "../partials/AboutUsBlock";
import SeoBlock from "../partials/SeoBlock";
import Breadcrumb from "../partials/Breadcrumb";
import ArrowDown from "../assets/icons/ArrowDown";
import Select from "react-select";
import DropdownIndicator from "../partials/DropdownIndicator";
import Helper from "../services/Helper";
import PositionCard from "../partials/PositionCard/PositionCard";

class Career extends Component {
  constructor(props) {
    super(props);

    this.wpApiService = new WpApiService();
    this.helper = new Helper();

    this.selectOptions = {
      components: { DropdownIndicator },
      styles: {
        option: (provided, state) => ({
          ...provided,
          color: "#333333",
          backgroundColor: state.isSelected
            ? "#EEEEEE"
            : state.isFocused
            ? "#EEEEEE"
            : "#fffff",
          border: "none",
          transition: "0.2s",
          cursor: "pointer",
          "&:active": {
            backgroundColor: "#EEEEEE"
          }
        }),
        control: provided => ({
          ...provided,
          border: "none",
          boxShadow: "none",
          cursor: "pointer"
        })
      }
    };

    this.defaultLocation = { value: "All locations", label: "All locations" };
    this.defaultDepartment = {
      value: "All departments",
      label: "All departments"
    };
    this.state = {
      loading: true,
      pageData: {},
      locations: [],
      departments: [],
      selectedLocation: this.defaultLocation,
      selectedDepartment: this.defaultDepartment,
      positions: [],
      filteredPositions: [],
    };
  }

  componentDidMount = () => {
    this.wpApiService.getPageBySlug("career").then(({ data: pageData }) => {
      this.wpApiService.getAllPositions().then(({data: {offers: positions}}) => {
        const locations = [],
              departments = [];
        positions.forEach((position) => {
          if(!locations.some((loc) => {
            return loc.value === position.location
          })){
            locations.push({
              value: position.location || 'Other Location',
              label: position.location || 'Other Location'
            });
          }
          if(!departments.some((depart) => {
            return depart.value === position.department
          })){
            departments.push({
              value: position.department || 'Other Department',
              label: position.department || 'Other Department'
            });
          }
        });
        this.setState({
          loading: false,
          positions,
          pageData,
          locations,
          filteredPositions: positions,
          departments
        });
      })
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.selectedLocation !== this.state.selectedLocation ||
      prevState.selectedDepartment !== this.state.selectedDepartment
    ) {
      const filteredPositionsByLocation =
        this.state.selectedLocation.value === this.defaultLocation.value
          ? this.state.positions
          : this.helper.getFilteredPostsByTerm(
              this.state.positions,
              'location',
              this.state.selectedLocation.value,
            );
      const filteredPositions =
        this.state.selectedDepartment.value === this.defaultDepartment.value
          ? filteredPositionsByLocation
          : this.helper.getFilteredPostsByTerm(
              filteredPositionsByLocation,
              'department',
              this.state.selectedDepartment.value,
              'Other Department'
            );
      this.setState({
        filteredPositions,
      })
    }
  }

  render() {
    const {
      loading,
      pageData,
      locations,
      departments,
      filteredPositions,
    } = this.state;
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
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Breadcrumb
                    items={[
                      { name: "Home", slug: "/" },
                      { name: "Career", slug: "/career/" }
                    ]}
                  />
                </div>
              </div>
            </div>
            {pageData.acf.join_us ? (
              <section className="simpleBlock aboutUsBlock joinUsBlock">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      {pageData.acf.join_us.image.url ? (
                        <div className="aboutUsBlock-img withGrid">
                          <img
                            src={pageData.acf.join_us.image.url}
                            alt={pageData.acf.join_us.image.alt}
                          />
                        </div>
                      ) : null}
                    </div>
                    <div className="col-lg-6">
                      {pageData.acf.join_us.title ? (
                        <h2
                          className="simpleBlock-title joinUsBlock-title h2--big"
                          dangerouslySetInnerHTML={{
                            __html: pageData.acf.join_us.title
                          }}
                        />
                      ) : null}
                      {pageData.acf.join_us.description ? (
                        <p
                          className="simpleBlock-description joinUsBlock-description"
                          dangerouslySetInnerHTML={{
                            __html: pageData.acf.join_us.description
                          }}
                        />
                      ) : null}
                      <button className="btn btn--primary">
                        Open Positions
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
            <ArrowDown className="arrowDown" />
            <div className="openPositions">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="openPositions-heading">Open Positions</h2>
                    <div className="filterbar openPositions-filterbar">
                      <span>Jobs available in</span>
                      <Select
                        options={[this.defaultLocation, ...locations]}
                        className="filterbar-select-location-container"
                        classNamePrefix="filterbar-select"
                        value={this.state.selectedLocation}
                        onChange={newLocation => {
                          this.setState({
                            selectedLocation: newLocation
                          });
                        }}
                        {...this.selectOptions}
                      />
                      <span>and in</span>
                      <Select
                        options={[this.defaultDepartment, ...departments]}
                        className="filterbar-select-department-container"
                        classNamePrefix="filterbar-select"
                        value={this.state.selectedDepartment}
                        onChange={newDepartment => {
                          this.setState({
                            selectedDepartment: newDepartment
                          });
                        }}
                        {...this.selectOptions}
                      />
                    </div>
                  </div>
                </div>
                <div id='openPositions' className="row latestPositions-list">
                  {filteredPositions.length ? filteredPositions.map(position => {
                    return (
                      <div className="col-lg-4" key={position.id}>
                        <PositionCard
                          title={position.title}
                          department={position.department}
                          location={position.location}
                          url={position.careers_url}
                        />
                      </div>
                    );
                  }) : (
                    <div className="col-12">
                      <h2 className="mx-auto text-center">no positions</h2>
                    </div>
                  )}
                </div>
                {/*<div className="row">*/}
                {/*  <button className="btn btn--primary loadMorePositions mx-auto">*/}
                {/*    Load more*/}
                {/*  </button>*/}
                {/*</div>*/}
              </div>
            </div>
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
    );
  }
}

export default Career;
