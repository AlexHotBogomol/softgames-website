import React from "react";
import Header from "../partials/Header/Header";
import { Provider } from "../context/Context";
import Footer from "../partials/Footer";
import Slider from "react-slick";
import sliderImg from "../assets/images/sliderImg.jpg";
import Button from "../partials/Button/Button";
import JoyStick from "../assets/icons/joyStick";

function Home(props) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slides1 = [
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

  return (
    <Provider router={props}>
      <Header currentUrl={props.match.url} />
      <div className="container--fluid">
        <Slider className="slider slider1" {...sliderSettings}>
          {slides1.map((slide, index) => {
            return (
              <div className="slider1-slide" key={index}>
                <img src={slide.img} />
                <div className="slider1-content">
                  <Button color="primaryInverse" withIcon>
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
    </Provider>
  );
}

export default Home;
