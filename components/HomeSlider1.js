import JoyStick from "../assets/icons/JoyStick";
import Slider from "react-slick/lib";
import sliderImg1 from "../assets/images/homeSlider1/sliderImg1.jpg";
import sliderSmallImg1 from "../assets/images/homeSlider1/slider1-small.jpg";
import sliderMediumImg1 from "../assets/images/homeSlider1/slider1-medium.jpg";

const sliderSettings = {
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  infinite: true,
  speed: 1000,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

const slider1Slides = [
  {
    image: sliderImg1,
    mediumImage: sliderMediumImg1,
    smallImage: sliderSmallImg1,
    title: "Cookie Crush",
    btnText: "click to play",
    btnLink: "http://bit.ly/Play_CookieCrush"
  },
  {
    image: sliderImg1,
    mediumImage: sliderMediumImg1,
    smallImage: sliderSmallImg1,
    title: "Solitaire Story",
    btnText: "click to play",
    btnLink: "http://bit.ly/Play_SolitaireStoryTripeaks"
  },
  {
    image: sliderImg1,
    mediumImage: sliderMediumImg1,
    smallImage: sliderSmallImg1,
    title: "Mahjong Story",
    btnText: "click to play",
    btnLink: "http://bit.ly/Play_MahjongStory"
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
              target="_blank"
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
