import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import axios from "axios";

import Slider from "react-slick";
import sliderImg from "../assets/images/sliderImg.jpg";
import Button from "../partials/Button/Button";
import JoyStick from "../assets/icons/joyStick";
import Loader from "react-loader-spinner";
import Header from "../partials/Header/Header";
import Footer from "../partials/Footer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      homepageData: {},
      posts: []
    };

    this.wpApiService = new WpApiService();

    this.sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  }

  componentDidMount = () => {
    axios
      .all([this.wpApiService.getPageBySlug("home"), this.wpApiService.getLatestPosts()])
      .then(
        axios.spread(({ data: homepageData }, { data: posts }) => {
          this.setState({
            loading: false,
            homepageData,
            posts
          });
        })
      );
  };

  render() {
    console.log(this.state);
    const {homepageData, posts, pages} = this.state;
    return (
      <div id="content">
        {this.state.loading ? (
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
            <Header />
            <div className="container--fluid">
              <Slider className="slider slider1" {...this.sliderSettings}>
                {homepageData.acf.slider1.slides.map((slide, index) => {
                  return (
                    <div className="slider1-slide" key={index}>
                      <img src={slide.image.url} />
                      <div className="slider1-content">
                        <Button to={slide.button_link} color="primaryInverse" withIcon>
                          <JoyStick />
                          {slide.button_text}
                        </Button>
                        <h2 className="slider1-title">{slide.title}</h2>
                      </div>
                    </div>
                  );
                })}
              </Slider>
              <Slider className="slider slider1" {...this.sliderSettings}>
                {homepageData.acf.slider1.slides.map((slide, index) => {
                  return (
                    <div className="slider1-slide" key={index}>
                      <img src={slide.image.url} />
                      <div className="slider1-content">
                        <Button to="/news/" color="primaryInverse" withIcon>
                          <JoyStick />
                          Click to play
                        </Button>
                        <h2 className="slider1-title">{slide.title}</h2>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <Footer />
          </Fragment>
        )}
      </div>
    );
  }
}

export default Home;
