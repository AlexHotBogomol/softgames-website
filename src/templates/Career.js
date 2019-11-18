import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import Loader from "react-loader-spinner";
import Select from "react-select";

import Helper from "../services/Helper";
import AboutUsBlock from "../partials/AboutUsBlock";
import SeoBlock from "../partials/SeoBlock";
import Breadcrumb from "../partials/Breadcrumb";
import DropdownIndicator from "../partials/DropdownIndicator";
import PositionCard from "../partials/PositionCard/PositionCard";

import ArrowDown from "../assets/icons/ArrowDown";
import Stars from "../assets/icons/Stars";
import GlassDoor from "../assets/icons/GlassDoor";
import Slider from "react-slick";
import Visa from "../assets/icons/benefits/Visa";
import Relocation from "../assets/icons/benefits/Relocation";
import Languages from "../assets/icons/benefits/Languages";
import FurtherTraining from "../assets/icons/benefits/FurtherTraining";
import FlexibleWorkingHours from "../assets/icons/benefits/FlexibleWorkingHours";
import HomeOffice from "../assets/icons/benefits/HomeOffice";
import TeamSpirit from "../assets/icons/benefits/TeamSpirit";
import Equipment from "../assets/icons/benefits/Equipment";
import Food from "../assets/icons/benefits/Food";
import Parties from "../assets/icons/benefits/Parties";
import TeamEvents from "../assets/icons/benefits/TeamEvents";
import Studio from "../assets/icons/benefits/Studio";

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
      filteredPositions: []
    };
  }

  componentDidMount = () => {
    this.wpApiService.getPageBySlug("career").then(({ data: pageData }) => {
      this.wpApiService
        .getAllPositions()
        .then(({ data: { offers: positions } }) => {
          const locations = [],
            departments = [];
          positions.forEach(position => {
            if (
              !locations.some(loc => {
                return loc.value === position.location;
              })
            ) {
              locations.push({
                value: position.location || "Other Location",
                label: position.location || "Other Location"
              });
            }
            if (
              !departments.some(depart => {
                return depart.value === position.department;
              })
            ) {
              departments.push({
                value: position.department || "Other Department",
                label: position.department || "Other Department"
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
        });
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
              "location",
              this.state.selectedLocation.value
            );
      const filteredPositions =
        this.state.selectedDepartment.value === this.defaultDepartment.value
          ? filteredPositionsByLocation
          : this.helper.getFilteredPostsByTerm(
              filteredPositionsByLocation,
              "department",
              this.state.selectedDepartment.value,
              "Other Department"
            );
      this.setState({
        filteredPositions
      });
    }
  }

  render() {
    const {
      loading,
      pageData,
      locations,
      departments,
      filteredPositions
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
            <div className="container">
              <div className="row">
                <div className="col-lg-7 offset-lg-3">
                  <div className="employerCard">
                    <div className="employerCard-imgWrapper">
                      <GlassDoor />
                    </div>
                    <div className="employerCard-content">
                      <Stars />
                      <h5 className="employerCard-text">
                        SOFTGAMES is a superstar employer according to Glassdoor
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <div id="openPositions" className="row latestPositions-list">
                  {filteredPositions.length ? (
                    filteredPositions.map(position => {
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
                    })
                  ) : (
                    <div className="col-12">
                      <h2 className="mx-auto text-center">no positions</h2>
                    </div>
                  )}
                </div>
                <div className="row">
                  <button className="btn btn--primary loadMorePositions mx-auto">
                    Load more
                  </button>
                </div>
              </div>
            </div>
            <section className="culture">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="culture-heading">Culture & Values</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    {pageData.acf && pageData.acf.culture_gallery ? (
                      <Slider
                        className="slider slider3 culture-slider"
                        customPaging={function(i) {
                          return (
                            <a>
                              <img
                                src={pageData.acf.culture_gallery[i].url}
                                alt={pageData.acf.culture_gallery[i].alt}
                              />
                            </a>
                          );
                        }}
                        dots={true}
                        dotsClass="slick-dots slick-thumb"
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                      >
                        {pageData.acf.culture_gallery.map((slide, index) => {
                          return (
                            <div className="slider3-slide" key={index}>
                              <img src={slide.url} alt={slide.alt} />
                              <h3>{slide.caption}</h3>
                            </div>
                          );
                        })}
                      </Slider>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
            <section className="employeeStories">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="employeeStories-heading">
                      Employee Stories
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    {pageData.acf && pageData.acf.employee_stories ? (
                      <Slider
                        className="slider slider2 employeeStories-slider"
                        dots={true}
                        dotsClass="slick-dots slick-thumb"
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                      >
                        {pageData.acf.employee_stories.map((slide, index) => {
                          return (
                            <div className="slider2-slide" key={index}>
                              <div className="employeeStories-content">
                                <div className="employeeStories-quote">
                                  {slide.text}
                                </div>
                                <div className="employeeStories-employee">
                                  <div className="employeeStories-photoWrapper">
                                    <img
                                      src={slide.employee_photo.url}
                                      alt={slide.employee_photo.alt}
                                    />
                                  </div>
                                  <div className="employeeStories-meta">
                                    <h4>
                                      {slide.employee_name},
                                    </h4>
                                    <h5>
                                      {slide.employee_department}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
            <section className="benefits">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="benefits-heading">Benefits</h2>
                    <p className="benefits-subheading">
                      Working and living in Germany has many advantages as e.g.
                      a high job security, great work-life balance and one of
                      the best universal health care systems in the world!
                    </p>
                    <p>Further our Berlin team benefits from:</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <ul className="benefits-list">
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <Visa />
                        </div>
                        <h5 className="benefits-title">Visa</h5>
                        <p className="benefits-description">
                          Our visa assistance service guides you through the
                          whole process and helps with tips and tricks to get
                          the approvals and your visa as fast as possible.
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <Relocation />
                        </div>
                        <h5 className="benefits-title">Relocation</h5>
                        <p className="benefits-description">
                          We support your move to Berlin with e.g. flat hunting,
                          paper work like local registration, setting up bank
                          accounts etc.
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <Languages />
                        </div>
                        <h5 className="benefits-title">Language classes</h5>
                        <p className="benefits-description">
                          We pay your German lessons so you can order food auf
                          Deutsch very fast and go right up to perfecting your
                          business vocabulary.
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <FurtherTraining />
                        </div>
                        <h5 className="benefits-title">Further training</h5>
                        <p className="benefits-description">
                          A personal learning budget to spend on learning and
                          development, including books, workshops, etc.
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <FlexibleWorkingHours />
                        </div>
                        <h5 className="benefits-title">
                          Flexible working hours
                        </h5>
                        <p className="benefits-description">
                          Productive hours differ individually. That’s why
                          you're welcome to show up in the office whenever
                          you're ready for it.
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <HomeOffice />
                        </div>
                        <h5 className="benefits-title">Home office</h5>
                        <p className="benefits-description">
                          Need to watch the kids or wait for a handicraftsman?
                          No problem - we also offer the opportunity for home
                          office.
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <TeamSpirit />
                        </div>
                        <h5 className="benefits-title">Team spirit</h5>
                        <p className="benefits-description">
                          Beyond our amazing parties and company events, the
                          team further organizes activities themselves such as
                          playing soccer together, a cooking group, a Japanese
                          learning group, and much more.{" "}
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <Equipment />
                        </div>
                        <h5 className="benefits-title">Equipment</h5>
                        <p className="benefits-description">
                          Choose between the latest MacBooks or Windows Laptops
                          at your choice. Furthermore our office features the
                          latest projectors, cameras, testing devices, monitors
                          - you name it.{" "}
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <Food />
                        </div>
                        <h5 className="benefits-title">
                          Fresh fruits, snacks and drinks
                        </h5>
                        <p className="benefits-description">
                          Enjoy fresh fruits, free coffee and a fully stocked
                          fridge with cold Water, Juices, Coke, Club Mate, Beer
                          etc. For the sweet-toothed we have snacks, chocolate
                          and chips of course{" "}
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <Parties />
                        </div>
                        <h5 className="benefits-title">Epic company parties</h5>
                        <p className="benefits-description">
                          Regular company parties to celebrate, including
                          Carnival, Summer Party, Oktoberfest, Christmas Party
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <TeamEvents />
                        </div>
                        <h5 className="benefits-title">Team events</h5>
                        <p className="benefits-description">
                          We have regular Casual Fridays, Board Game Nights, Pub
                          Quizzes, Team lunches, Company breakfasts and much
                          more …
                        </p>
                      </li>
                      <li className="benefits-item">
                        <div className="benefits-icon">
                          <Studio />
                        </div>
                        <h5 className="benefits-title">Studio</h5>
                        <p className="benefits-description">
                          A super modern office with state of the art tech,
                          based in the center of Berlin, quickly to reach from
                          all destinations thanks to the excellent public
                          transport connections.{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="offices">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="offices-heading">Global Offices</h2>
                    <p className="offices-subheading">
                      SOFTGAMES is made up of individuals from 25+ different
                      countries. We believe in proactive, independent teams with
                      the freedom to take initiative, challenge the status quo,
                      and bring solutions to improve what they think is best for
                      their players, our games and the company at large. s{" "}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    {pageData.acf && pageData.acf.culture_gallery ? (
                      <Slider
                        className="slider slider3 culture-slider"
                        customPaging={function(i) {
                          return (
                            <a>
                              <img
                                src={pageData.acf.culture_gallery[i].url}
                                alt={pageData.acf.culture_gallery[i].alt}
                              />
                            </a>
                          );
                        }}
                        dots={true}
                        dotsClass="slick-dots slick-thumb"
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                      >
                        {pageData.acf.culture_gallery.map((slide, index) => {
                          return (
                            <div className="slider3-slide" key={index}>
                              <img src={slide.url} alt={slide.alt} />
                              <p></p>
                            </div>
                          );
                        })}
                      </Slider>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    {pageData.acf && pageData.acf.culture_gallery ? (
                      <Slider
                        className="slider slider3 culture-slider"
                        customPaging={function(i) {
                          return (
                            <a>
                              <img
                                src={pageData.acf.culture_gallery[i].url}
                                alt={pageData.acf.culture_gallery[i].alt}
                              />
                            </a>
                          );
                        }}
                        dots={true}
                        dotsClass="slick-dots slick-thumb"
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                      >
                        {pageData.acf.culture_gallery.map((slide, index) => {
                          return (
                            <div className="slider3-slide" key={index}>
                              <img src={slide.url} alt={slide.alt} />
                              <p></p>
                            </div>
                          );
                        })}
                      </Slider>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
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
