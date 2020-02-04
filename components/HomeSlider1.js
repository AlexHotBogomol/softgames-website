import JoyStick from "../assets/icons/JoyStick";
import Slider from "react-slick/lib";

import sliderSmallImg1 from "../assets/images/homeSlider1/slider1-small.jpg";
import sliderMediumImg1 from "../assets/images/homeSlider1/slider1-medium.jpg";


//images for 2k
import GardenTales_2k from "../assets/images/homeSlider1/2k/Garden_Tales_Homepage_Banner.jpg";
import Moji_2k from "../assets/images/homeSlider1/2k/MOJI_Homepage_Banner.jpg";
import Soli_2k from "../assets/images/homeSlider1/2k/SOLI_Homepage_Banner.jpg";

//images for fullhd
import GardenTales_fullhd from "../assets/images/homeSlider1/fullhd/Garden_Tales_Homepage_Banner.jpg";
import Moji_fullhd from "../assets/images/homeSlider1/fullhd/MOJI_Homepage_Banner.jpg";
import Soli_fullhd from "../assets/images/homeSlider1/fullhd/SOLI_Homepage_Banner.jpg";

//images for tablet
import GardenTales_tablet from "../assets/images/homeSlider1/tablet/Garden_Tales_Homepage_Banner.png";
import Moji_tablet from "../assets/images/homeSlider1/tablet/MOJI_Homepage_Banner.png";
import Soli_tablet from "../assets/images/homeSlider1/tablet/SOLI_Homepage_Banner.png";


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
    image: GardenTales_2k,
    image_fullhd: GardenTales_fullhd,
    image_tablet: GardenTales_tablet,
    image_mobile: sliderMediumImg1,
    image_mobile_small: sliderSmallImg1,
    title: "Cookie Crush",
    btnText: "click to play",
    btnLink: "http://bit.ly/Play_CookieCrush"
  },
  {
    image: Soli_2k,
    image_fullhd: Soli_fullhd,
    image_tablet: Soli_tablet,
    image_mobile: sliderMediumImg1,
    image_mobile_small: sliderSmallImg1,
    title: "Solitaire Story",
    btnText: "click to play",
    btnLink: "http://bit.ly/Play_SolitaireStoryTripeaks"
  },
  {
    image: Moji_2k,
    image_fullhd: Moji_fullhd,
    image_tablet: Moji_tablet,
    image_mobile: sliderMediumImg1,
    image_mobile_small: sliderSmallImg1,
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
            <source srcSet={slide.image_mobile_small} media="(max-width: 360px)" />
            <source srcSet={slide.image_mobile} media="(max-width: 575px)" />
            <source srcSet={slide.image_tablet} media="(max-width: 992px)" />
            <source srcSet={slide.image_fullhd} media="(max-width: 1920px)" />
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
