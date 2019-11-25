import React, { useState, useEffect, useRef } from "react";
import WpApiService from "../services/WpApiService";
import Select from "react-select";
import Slider from "react-slick";
import Helper from "../services/Helper";

import Breadcrumb from "../partials/Breadcrumb";
import DropdownIndicator from "../partials/DropdownIndicator";
import PositionCard from "../partials/PositionCard/PositionCard";
import BenefitsList from "../partials/BenefitsList";

import ArrowDown from "../assets/icons/ArrowDown";
import Stars from "../assets/icons/Stars";
import GlassDoor from "../assets/icons/GlassDoor";

import seoImg from "../assets/images/seoImg.jpg";
import cultureImg from "../assets/images/cultureImage.jpg";
import employeePhoto from "../assets/images/emplPhoto.png";
import FAQ from "../partials/FAQ/FAQ";
import ScrollToTopOnMount from "../partials/ScrollToTopOnMount";

const cultureSlides = [
  {
    image: cultureImg,
    caption: "Fresh fruits, snacks and drinks"
  },
  {
    image: cultureImg,
    caption: "Fresh fruits, snacks and drinks"
  },
  {
    image: cultureImg,
    caption: "Fresh fruits, snacks and drinks"
  }
];

const employeeStories = [
  {
    quote:
      "I was one of the first to join Softgames. Amazing to see this company grow and to develop together with it.",
    employeeName: "Claudia Winkel",
    employeeDepartment: "Finance",
    employeePhoto: employeePhoto
  },
  {
    quote:
      "I was one of the first to join Softgames. Amazing to see this company grow and to develop together with it.",
    employeeName: "Claudia Winkel",
    employeeDepartment: "Finance",
    employeePhoto: employeePhoto
  },
  {
    quote:
      "I was one of the first to join Softgames. Amazing to see this company grow and to develop together with it.",
    employeeName: "Claudia Winkel",
    employeeDepartment: "Finance",
    employeePhoto: employeePhoto
  }
];

const offices = [
  {
    location: "Berlin, Germany",
    department: "HQ, Game Development",
    slides: [
      {
        image: cultureImg,
        caption: "Softgames"
      },
      {
        image: cultureImg,
        caption: "Softgames"
      },
      {
        image: cultureImg,
        caption: "Softgames"
      }
    ]
  },
  {
    location: "Toronto, Canada",
    department: "Game Development",
    slides: [
      {
        image: cultureImg,
        caption: "Softgames"
      },
      {
        image: cultureImg,
        caption: "Softgames"
      },
      {
        image: cultureImg,
        caption: "Softgames"
      }
    ]
  }
];

const selectOptions = {
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

const Career = props => {
  const wpApiService = new WpApiService();
  const helper = new Helper();

  const defaultDepartment = {
    value: "All departments",
    label: "All departments"
  };
  const defaultLocation = { value: "All locations", label: "All locations" };
  const [positions, setPositions] = useState([]);
  const [filteredPositions, setFilteredPositions] = useState([]);
  const [locations, setLocations] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  const [selectedDepartment, setSelectedDepartment] = useState(
    defaultDepartment
  );

  const didMountRef = useRef(false);

  useEffect(() => {
    didMountRef.current = true;
    wpApiService.getAllPositions().then(({ data: { offers: positions } }) => {
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
      setPositions(positions);
      setFilteredPositions(positions);
      setLocations(locations);
      setDepartments(departments);
    });
  }, []);

  useEffect(() => {
    const filteredPositionsByLocation =
      selectedLocation.value === defaultLocation.value
        ? positions
        : helper.getFilteredPostsByTerm(
            positions,
            "location",
            selectedLocation.value
          );
    const filteredPositions =
      selectedDepartment.value === defaultDepartment.value
        ? filteredPositionsByLocation
        : helper.getFilteredPostsByTerm(
            filteredPositionsByLocation,
            "department",
            selectedDepartment.value,
            "Other Department"
          );
    setFilteredPositions(filteredPositions);
  }, [selectedLocation.value, selectedDepartment.value]);

  return (
    <div id="content">
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
      <section className="simpleBlock aboutUsBlock joinUsBlock withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="aboutUsBlock-img withGrid">
                <img src={seoImg} alt="Softgames" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="simpleBlock-title joinUsBlock-title h2--big">
                Join
                <br />
                Our Team!
              </h2>
              <p className="simpleBlock-description joinUsBlock-description">
                Become a part of our success story and change the way people
                discover, play and share mobile games today.
              </p>
              <button className="btn btn--primary">Open Positions</button>
            </div>
          </div>
        </div>
      </section>
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
                  options={[defaultLocation, ...locations]}
                  className="filterbar-select-location-container"
                  classNamePrefix="filterbar-select"
                  value={selectedLocation}
                  onChange={newLocation => {
                    setSelectedLocation(newLocation);
                  }}
                  {...selectOptions}
                />
                <span>and in</span>
                <Select
                  options={[defaultDepartment, ...departments]}
                  className="filterbar-select-department-container"
                  classNamePrefix="filterbar-select"
                  value={selectedDepartment}
                  onChange={newDepartment => {
                    setSelectedDepartment(newDepartment);
                  }}
                  {...selectOptions}
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
          {/*<div className="row">*/}
          {/*  <button className="btn btn--primary loadMorePositions mx-auto">*/}
          {/*    Load more*/}
          {/*  </button>*/}
          {/*</div>*/}
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
              <Slider
                className="slider slider3 culture-slider"
                customPaging={function(i) {
                  return (
                    <a>
                      <img
                        src={cultureSlides[i].image}
                        alt={cultureSlides[i].caption}
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
                {cultureSlides.map((slide, index) => {
                  return (
                    <div className="slider3-slide" key={index}>
                      <img src={slide.image} alt={slide.caption} />
                      <h3>{slide.caption}</h3>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="employeeStories">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="employeeStories-heading">Employee Stories</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <Slider
                className="slider slider2 employeeStories-slider"
                dots={true}
                dotsClass="slick-dots slick-thumb"
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
              >
                {employeeStories.map((slide, index) => {
                  return (
                    <div className="slider2-slide" key={index}>
                      <div className="employeeStories-content">
                        <div className="employeeStories-quote">
                          {slide.quote}
                        </div>
                        <div className="employeeStories-employee">
                          <div className="employeeStories-photoWrapper">
                            <img
                              src={slide.employeePhoto}
                              alt={slide.employeeName}
                            />
                          </div>
                          <div className="employeeStories-meta">
                            <h4>{slide.employeeName},</h4>
                            <h5>{slide.employeeDepartment}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="benefits-heading">Benefits</h2>
              <p className="benefits-subheading">
                Working and living in Germany has many advantages as e.g. a high
                job security, great work-life balance and one of the best
                universal health care systems in the world!
              </p>
              <p>Further our Berlin team benefits from:</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <BenefitsList />
            </div>
          </div>
        </div>
      </section>
      <section className="offices withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="offices-heading withGrid">Global Offices</h2>
              <p className="offices-subheading">
                SOFTGAMES is made up of individuals from 25+ different
                countries. We believe in proactive, independent teams with the
                freedom to take initiative, challenge the status quo, and bring
                solutions to improve what they think is best for their players,
                our games and the company at large.
              </p>
            </div>
          </div>
          {offices.map((office, index) => (
            <div className="row office" key={index}>
              <div className="col-12">
                <h4 className="office-location">
                  {office.location}
                </h4>
                <p className="office-department">
                  {office.department}
                </p>
              </div>
              <div className="col-lg-10 mx-auto">
                <Slider
                  className="slider slider3 culture-slider"
                  customPaging={function(i) {
                    return (
                      <a>
                        <img
                          src={office.slides[i].image}
                          alt={office.slides[i].caption}
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
                  {office.slides.map((slide, index) => {
                    return (
                      <div className="office-slide" key={index}>
                        <img src={slide.image} alt={slide.caption} />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FAQ/>
    </div>
  );
};

export default Career;
