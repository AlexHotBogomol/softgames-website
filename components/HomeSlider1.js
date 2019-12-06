import JoyStick from "../assets/icons/JoyStick";
import Slider from "react-slick/lib";
import sliderImg1 from "../assets/images/homeSlider1/sliderImg1.jpg";

const sliderSettings = {
  dots: true,
  arrows: true,
  // fade: true,
  infinite: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

const slider1Slides = [
  {
    image: sliderImg1,
    title: "Solitaire Story",
    btnText: "click to play",
    btnLink: "#"
  },
  {
    image: sliderImg1,
    title: "Solitaire Story2",
    btnText: "click to play",
    btnLink: "#"
  },
  {
    image: sliderImg1,
    title: "Solitaire Story3",
    btnText: "click to play",
    btnLink: "#"
  }
];

const HomeSlider1 = (props) => (
  <Slider className="slider slider1" {...sliderSettings}>
    {slider1Slides.map((slide, index) => {
      return (
        <div className="slider1-slide" key={index}>
          <img src={slide.image} alt={slide.title} />
          <div className="slider1-content">
            <a
              href={slide.btnLink}
              className="btn btn--primaryInverse btn--withIcon"
            >
              <JoyStick />
              {slide.btnText}
            </a>
            <h2 className="slider1-title">{slide.title}</h2>
          </div>
        </div>
      );
    })}
  </Slider>
);

export default HomeSlider1;
