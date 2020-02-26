import React, { useContext } from "react";
import ModalContext from "./ModalContext";
import Link from "next/link";
import Slider from "react-slick/lib";
import AdvertisersSlide from "../assets/images/homeSlider2/Advertisers_Slide.png";
import PublishersSlide from "../assets/images/homeSlider2/Publishers_Slide.png";
import DevelopersSlide from "../assets/images/homeSlider2/Developers_Slide.png";
import ReactHtmlParser from "react-html-parser";
import Developers from "../pages/developers";

const sliderSettings = {
  dots: true,
  arrows: true,
  fade: false,
  infinite: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const slider2Slides = [
  {
    categoryName: "Advertisers",
    href: "/merchant",
    linkAs: "/advertisers",
    heading: "Global Reach<br><span>for your brand.</span>",
    description:
      "Enjoy our brand-safe traffic, high viewability, engaged users and diverse demographic audience! Select your target audience from 30+ million active users and advertise your brand on our HTML5 games platform.",
    btnText: "get started",
    btnModal: true,
    image: AdvertisersSlide,
    alt: ""
  },
  {
    categoryName: "Publishers",
    href: "/publishers",
    linkAs: "/license-html5-games",
    heading: "games Affiliate <br><span>Program</span>",
    description:
      "Join the best games Affiliate Program as a publisher and maximize your earnings! Earn the highest commissions and monetize your online and app traffic by embedding high quality, cross-platform games.",
    btnText: "browse games",
    btnModal: false,
    image: PublishersSlide,
    alt: ""
  },
  {
    categoryName: "Developers",
    href: "/developers",
    linkAs: "/distribute-html5-games",
    heading: "Global Reach<br><span>for your brand.</span>",
    description:
      "Publish your HTML5 Game or Messenger Game with SOFTGAMES and do what you love! We help you to distribute and monetize your HTML5 games better with our global reach and better ads.",
    btnText: "Submit Game",
    btnModal: true,
    image: DevelopersSlide,
    alt: ""
  }
];

const HomeSlider2 = (props) => {
  const {openModal} = useContext(ModalContext);
  return (
    <Slider className="slider slider2 withGrid" {...sliderSettings}>
      {slider2Slides.map((slide, index) => {
        return (
          <div className="slider2-slide" key={index}>
            <div className="slider2-content">
              <div className="slider2-left">
                <Link
                  href={slide.href}
                  as={slide.linkAs}
                >
                  <a className="link slider2-category">
                    {slide.categoryName}
                  </a>
                </Link>
                <h2 className="h2--big">{ReactHtmlParser(slide.heading)}</h2>
                <p>{ReactHtmlParser(slide.description)}</p>
                {slide.btnModal ? (
                  <button className="btn btn--primary" onClick={openModal}>
                    {slide.btnText}
                  </button>
                ) : (
                  <Link as="/free-online-games"
                        href="/games">
                    <a className="btn btn--primary" >
                      {slide.btnText}
                    </a>
                  </Link>
                )}
              </div>
              <div className="slider2-right">
                <img src={slide.image} alt={slide.alt} />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default HomeSlider2;
