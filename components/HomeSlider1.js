import JoyStick from "../assets/icons/JoyStick";
import Slider from "react-slick/lib";
import sliderImg1 from "../assets/images/homeSlider1/sliderImg1.jpg";
import sliderSmallImg1 from "../assets/images/homeSlider1/slider1-small.jpg";
import sliderMediumImg1 from "../assets/images/homeSlider1/slider1-medium.jpg";

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
    mediumImage: sliderMediumImg1,
    smallImage: sliderSmallImg1,
    title: "Solitaire Story",
    btnText: "click to play",
    btnLink: "#"
  },
  {
    image: sliderImg1,
    mediumImage: sliderMediumImg1,
    smallImage: sliderSmallImg1,
    title: "Solitaire Story2",
    btnText: "click to play",
    btnLink: "#"
  },
  {
    image: sliderImg1,
    mediumImage: sliderMediumImg1,
    smallImage: sliderSmallImg1,
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
          <picture>
            <source srcSet={slide.smallImage} media="(max-width: 360px)" />
            <source srcSet={slide.mediumImage} media="(max-width: 575px)" />
            <img src={slide.image} alt={slide.title} />
          </picture>
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
