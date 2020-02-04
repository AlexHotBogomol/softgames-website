import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import apiEndpoints from '../utils/apiEndpoints';
import Slider from "react-slick";
import Helper from "../utils/Helper";
import Select from "react-select";
import LinkSmoothScroll from "../components/LinkSmoothScroll";

import Breadcrumb from "../components/Breadcrumb";
import DropdownIndicator from "../components/DropdownIndicator";
import PositionCard from "../components/PositionCard/PositionCard";
import BenefitsList from "../components/BenefitsList";

import ArrowDown from "../components/ArrowDown";
import Stars from "../assets/icons/Stars";
import GlassDoor from "../assets/icons/GlassDoor";

import seoImg from "../assets/images/seoImg.jpg";
import cultureImg from "../assets/images/cultureImage.jpg";
import employeePhoto from "../assets/images/emplPhoto.png";
import FAQ from "../components/FAQ/FAQ";
import Layout from "../components/Layout";

import careerImg from "../assets/images/career/careerImg.png";

import berlinOffice1 from "../assets/images/career/berlin/berlin1.jpg";
import berlinOffice2 from "../assets/images/career/berlin/berlin2.jpg";
import berlinOffice3 from "../assets/images/career/berlin/berlin3.jpg";
import berlinOffice4 from "../assets/images/career/berlin/berlin4.jpg";
import berlinOffice5 from "../assets/images/career/berlin/berlin5.jpg";
import berlinOffice6 from "../assets/images/career/berlin/berlin6.jpg";
import berlinOffice7 from "../assets/images/career/berlin/berlin7.jpg";
import berlinOffice8 from "../assets/images/career/berlin/berlin8.jpg";
import berlinOffice9 from "../assets/images/career/berlin/berlin9.jpg";
import berlinOffice10 from "../assets/images/career/berlin/berlin10.jpg";
import berlinOffice11 from "../assets/images/career/berlin/berlin11.jpg";
import berlinOffice12 from "../assets/images/career/berlin/berlin12.jpg";
import berlinOffice13 from "../assets/images/career/berlin/berlin13.jpg";

import torontoOffice1 from "../assets/images/career/toronto/toronto1.jpg";
import torontoOffice2 from "../assets/images/career/toronto/toronto2.jpg";
import torontoOffice3 from "../assets/images/career/toronto/toronto3.jpg";
import torontoOffice4 from "../assets/images/career/toronto/toronto4.jpg";
import torontoOffice5 from "../assets/images/career/toronto/toronto5.jpg";
import torontoOffice6 from "../assets/images/career/toronto/toronto6.jpg";
import torontoOffice7 from "../assets/images/career/toronto/toronto7.jpg";
import torontoOffice8 from "../assets/images/career/toronto/toronto8.jpg";
import torontoOffice9 from "../assets/images/career/toronto/toronto9.jpg";
import torontoOffice10 from "../assets/images/career/toronto/toronto10.jpg";

import BartoszPhoto from "../assets/images/career/stories/Bartosz.png";
import DavidPhoto from "../assets/images/career/stories/Dave.png";
import ElnaraPhoto from "../assets/images/career/stories/Elnara.png";
import KerstinPhoto from "../assets/images/career/stories/Kerstin.png";

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
      "Working in a thriving company with a flat hierarchy, talented colleagues from all over the world and the opportunity to closely collaborate with all departments is one of the greatest benefits.",
    employeeName: "Elnara Nuriieva",
    employeeDepartment: "Key Account Manager",
    employeePhoto: ElnaraPhoto
  },
  {
    quote:
      "Each developer loves challenges. After 8 years in one company it is usually not that easy to feel challenges – but not at SOFTGAMES. This is a reason why they keep me so long",
    employeeName: "Bartósz Wrobel",
    employeeDepartment: "Senior Engineer",
    employeePhoto: BartoszPhoto
  },
  {
    quote:
      "When I started working at SOFTGAMES I was immediately delighted by the team spirit and the opportunity to find creative solutions for challenges. Feeling appreciated and trusted is fantastic.",
    employeeName: "David Fassbender",
    employeeDepartment: "Senior Business Development Manager",
    employeePhoto: DavidPhoto
  },
  {
    quote:
      "At SOFTGAMES flat hierarchies are truly lived. Having a voice in my team, being able to have a real impact and make a difference for our players is one of the greatest benefits.",
    employeeName: "Kerstin Winder",
    employeeDepartment: "Junior QA Manager",
    employeePhoto: KerstinPhoto
  }
];

const offices = [
  {
    location: "Berlin, Germany",
    department: "HQ, Game Development",
    slides: [
      {
        image: berlinOffice1,
        caption: "Softgames"
      },
      {
        image: berlinOffice2,
        caption: "Softgames"
      },
      {
        image: berlinOffice3,
        caption: "Softgames"
      },
      {
        image: berlinOffice4,
        caption: "Softgames"
      },
      {
        image: berlinOffice5,
        caption: "Softgames"
      },
      {
        image: berlinOffice6,
        caption: "Softgames"
      },
      {
        image: berlinOffice7,
        caption: "Softgames"
      },
      {
        image: berlinOffice8,
        caption: "Softgames"
      },
      {
        image: berlinOffice9,
        caption: "Softgames"
      },
      {
        image: berlinOffice10,
        caption: "Softgames"
      },
      {
        image: berlinOffice11,
        caption: "Softgames"
      },
      {
        image: berlinOffice12,
        caption: "Softgames"
      },
      {
        image: berlinOffice13,
        caption: "Softgames"
      },
    ]
  },
  {
    location: "Toronto, Canada",
    department: "Game Development",
    slides: [
      {
        image: torontoOffice1,
        caption: "Softgames"
      },
      {
        image: torontoOffice2,
        caption: "Softgames"
      },
      {
        image: torontoOffice3,
        caption: "Softgames"
      },
      {
        image: torontoOffice4,
        caption: "Softgames"
      },
      {
        image: torontoOffice5,
        caption: "Softgames"
      },
      {
        image: torontoOffice6,
        caption: "Softgames"
      },
      {
        image: torontoOffice7,
        caption: "Softgames"
      },
      {
        image: torontoOffice8,
        caption: "Softgames"
      },
      {
        image: torontoOffice9,
        caption: "Softgames"
      },
      {
        image: torontoOffice10,
        caption: "Softgames"
      },
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
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    didMountRef.current = true;

    const loadData = () => {
      try{
        axios.get(apiEndpoints.positions, { cancelToken: source.token }).then(({ data: { offers: positions } }) => {
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
      } catch(error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      source.cancel();
    }
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
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb
              items={[
                { name: "Home", slug: "/" },
                { name: "Career", slug: "/career" }
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
                <img src={careerImg} alt="Softgames" />
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
              <LinkSmoothScroll href="/career/#job-openings">
                <a className="btn btn--primary">Open Positions</a>
              </LinkSmoothScroll>
            </div>
          </div>
        </div>
      </section>
      <LinkSmoothScroll href="/career/#job-openings">
        <a>
          <ArrowDown />
        </a>
      </LinkSmoothScroll>
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
      <div id="job-openings" className="openPositions">
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
                  <div className="col-md-6 col-xl-4" key={position.id}>
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
      <section id="culture-values" className="culture">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="culture-heading">Culture & Values</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 mx-auto">
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
      <section id="application-process" className="employeeStories">
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
      <section id="benefits" className="benefits withIllustration">
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
      <section id="global-offices" className="offices withIllustration">
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
              <div className="col-md-10 mx-auto">
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
      <FAQ id="FAQ"/>
    </Layout>
  );
};

export default Career;
