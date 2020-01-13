import React from 'react';
import games from '../data/games';
import Slider from "react-slick/lib";
import GameCard from "./GameCard/GameCard";

const nonSecretGames = games.filter( game => !game.secret);

const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false
      }
    },
  ]
};

const HomeSlider3 = props => (
  <Slider className="slider slider1" {...sliderSettings}>
    {nonSecretGames.map((game, index) => {
      return (
        <GameCard
          link={game.link}
          img={game.image}
          title={game.title}
          description={game.description}
          key={index}
        />
      );
    })}
  </Slider>
);

export default HomeSlider3;
