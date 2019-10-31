import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "../partials/Header/Header";
import { Provider } from "../context/Context";
import Footer from "../partials/Footer";
import Slider from "react-slick";
import sliderImg from "../assets/images/sliderImg.jpg";
import Button from "../partials/Button/Button";
import JoyStick from "../assets/icons/joyStick";
import Loader from "react-loader-spinner";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      pages: []
    };

    this.sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    this.slides1 = [
      {
        img: sliderImg,
        title: "Solitaire Story"
      },
      {
        img: sliderImg,
        title: "Solitaire Story2"
      },
      {
        img: sliderImg,
        title: "Solitaire Story3"
      }
    ];
  }

  componentDidMount = () => {
    axios
      .get("/wp-json/wp/v2/pages")
      .then(result => {
        this.setState({
          loading: false,
          pages: result.data
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Fragment>
      {
        this.state.loading ?
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          /> :
          <Fragment>
            <Provider router={this.props}>
              <Header currentUrl={this.props.match.url}/>
              <div className="container--fluid">
                <Slider className="slider slider1" {...this.sliderSettings}>
                  {this.slides1.map((slide, index) => {
                    return (
                      <div className="slider1-slide" key={index}>
                        <img src={slide.img}/>
                        <div className="slider1-content">
                          <Button color="primaryInverse" withIcon>
                            <JoyStick/>
                            Click to play
                          </Button>
                          <h2 className="slider1-title">{slide.title}</h2>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <p>{this.state.pages[0].id}</p>
              <Footer/>
            </Provider>
          </Fragment>
      }
      </Fragment>
    );
  }
}

export default Home;
