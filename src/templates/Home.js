import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WpApiService from "../services/WpApiService";

import ArrowDown from "../partials/ArrowDown";
import character from "../assets/images/character.png";

import GameCard from "../partials/GameCard/GameCard";
import PositionCard from "../partials/PositionCard/PositionCard";
import NewsCard from "../partials/NewsCard/NewsCard";
import SocialBlock from "../partials/SocialBlock/SocialBlock";

//Images
import HomeSlider1 from "../partials/HomeSlider1";
import HomeSlider2 from "../partials/HomeSlider2";
import cookieCrash from "../assets/images/games/CookieCrash.jpg";
import ScrollToTopOnMount from "../partials/ScrollToTopOnMount";

const games = [
  {
    url: "https://www.google.com",
    image: cookieCrash,
    title: "Cookie Crush",
    description:
      "Greyhound divisively hello coldly wonderfully marginally far..."
  },
  {
    url: "https://www.google.com",
    image: cookieCrash,
    title: "Solitaire Story",
    description:
      "Greyhound divisively hello coldly wonderfully marginally far..."
  },
  {
    url: "https://www.google.com",
    image: cookieCrash,
    title: "Cookie Crush",
    description:
      "Greyhound divisively hello coldly wonderfully marginally far..."
  }
];

const Home = (props) => {

  const wpApiService = new WpApiService();
  const [positions , setPositions] = useState([]);
  const [news , setNews] = useState([]);

  useEffect(() => {
    wpApiService.getAllPositions()
      .then(( { data: { offers: positions } }) => {
        setPositions(positions);
        wpApiService.getCustomPostCollection("blog", {
          per_page: 2
        }).then(({data: news}) => {
          setNews(news);
        })
      });
  }, []);

  return (
    <div id="content">
      <div className="container--fullWidth">
        <HomeSlider1 />
      </div>
      <ArrowDown
        className="arrowDown"
        hashlink="#global-reach"
        scrollPosition="center"
      />
      <div id="global-reach" className="slider2-wrapper withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <HomeSlider2 />
            </div>
          </div>
        </div>
      </div>
      <section className="featuredGames">
        <div className="container">
          <img
            className="featuredGames-character"
            src={character}
            alt="Character"
          />
          <div className="row">
            <div className="col-12">
              <h2 className="featuredGames-heading">Featured Games</h2>
            </div>
          </div>
          <div className="row featuredGames-gameList">
            <div className="col-lg-3"></div>
            {games.map((game, index) => {
              return (
                <div className="col-lg-3" key={index}>
                  <GameCard
                    url={game.url}
                    img={game.image}
                    title={game.title}
                    description={game.description}
                  />
                </div>
              );
            })}
          </div>
          <div className="row">
            <Link to="/games/" className="btn btn--primaryInverse mx-auto">
              All Games
            </Link>
          </div>
        </div>
      </section>
      <section className="latestPositions withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="latestPositions-heading withGrid">
                Open Positions
              </h2>
            </div>
          </div>
          <div className="row latestPositions-list">
            {positions ? (positions.slice(0, 6).map(position => {
              return (
                <div className="col-lg-6 col-xl-4" key={position.id}>
                  <PositionCard
                    title={position.title}
                    department={position.department}
                    location={position.location}
                    url={position.careers_url}
                  />
                </div>
              );
            })) : null}
          </div>
          <div className="row">
            <Link to="/career/" className="btn btn--primary mx-auto">
              All open positions
            </Link>
          </div>
        </div>
      </section>
      <section className="latestNews withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="latestNews-heading">Press</h2>
            </div>
          </div>
          <div className="row latestNews-list">
            <div className="col-lg-8">
              <div className="row">
                {news ? (news.map(newsItem => {
                  return (
                    <div className="col-md-6" key={newsItem.id}>
                      <NewsCard
                        title={newsItem.title}
                        img={newsItem.media.large}
                        slug={newsItem.slug}
                        date={newsItem.date}
                      />
                    </div>
                  );
                })) : null}
              </div>
            </div>
            <div className="col-lg-4">
              <SocialBlock/>
            </div>
          </div>
          <div className="row">
            <Link to="/news/" className="btn btn--primary mx-auto">
              All news & events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
