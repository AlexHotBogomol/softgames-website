import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import WpApiService from "../services/WpApiService";
import axios from "axios";

import Loader from "react-loader-spinner";
import Slider from "react-slick";

import JoyStick from "../assets/icons/JoyStick";
import ArrowDown from "../assets/icons/ArrowDown";
import character from "../assets/images/character.png";

import GameCard from "../partials/GameCard/GameCard";
import PositionCard from "../partials/PositionCard/PositionCard";
import NewsCard from "../partials/NewsCard/NewsCard";
import Footer from "../partials/Footer/Footer";
import SocialBlock from "../partials/SocialBlock/SocialBlock";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      homepageData: {},
      latestNews: [],
      games: [],
      positions: [],
      acfOptions: {},
    };

    this.wpApiService = new WpApiService();

    this.sliderSettings = {
      dots: true,
      arrows: true,
      fade: true,
      infinite: true,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  }

  componentDidMount = () => {
    axios
      .all([
        this.wpApiService.getPageBySlug("home"),
        this.wpApiService.getCustomPostCollection("blog", {
          per_page: 2
        }),
        this.wpApiService.getCustomPostCollection("game", {
          per_page: 3
        }),
        this.wpApiService.getCustomPostCollection("position", {
          per_page: 0
        }),
        this.wpApiService.getAcfOptions(),
      ])
      .then(
        axios.spread(
          (
            { data: homepageData },
            { data: latestNews },
            { data: games },
            { data: positions },
            { data: acfOptions },
          ) => {
            this.setState({
              loading: false,
              homepageData,
              latestNews,
              games,
              positions,
              acfOptions,
            });
          }
        )
      );
  };

  render() {
    console.log(this.state);
    const {loading, homepageData, games, positions, latestNews, acfOptions} = this.state;
    return (
      <div id="content">
        {loading ? (
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
            <div className="container--fullWidth">
              <Slider className="slider slider1" {...this.sliderSettings}>
                {homepageData.acf.slider1.slides.map((slide, index) => {
                  return (
                    <div className="slider1-slide" key={index}>
                      <img src={slide.image.url} alt={slide.image.alt} />
                      <div className="slider1-content">
                        <a
                          href={slide.button_link}
                          className="btn btn--primaryInverse btn--withIcon"
                        >
                          <JoyStick />
                          {slide.button_text}
                        </a>
                        <h2 className="slider1-title">{slide.title}</h2>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <ArrowDown className="arrowDown" />
            <div className="slider2-wrapper">
              <div className="container">
                <Slider
                  className="slider slider2 withGrid"
                  {...this.sliderSettings}
                >
                  {homepageData.acf.slider2.slides.map((slide, index) => {
                    return (
                      <div className="slider2-slide" key={index}>
                        <div className="slider2-content">
                          <div className="slider2-left">
                            <Link
                              to={slide.category_link}
                              className="link slider2-category"
                            >
                              {slide.category_name}
                            </Link>
                            <h2
                              dangerouslySetInnerHTML={{
                                __html: slide.heading
                              }}
                              className="h2--big"
                            />
                            <p>{slide.description}</p>
                            <button className="btn btn--primary">
                              {slide.button_text}
                            </button>
                          </div>
                          <div className="slider2-right">
                            <img src={slide.image.url} alt={slide.image.alt} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
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
                  {games.map(game => {
                    return (
                      <div className="col-lg-3" key={game.id}>
                        <GameCard
                          url={game.acf.game_link}
                          img={game.media.large}
                          title={game.title}
                          description={game.content}
                          limit={50}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  <Link
                    to="/games/"
                    className="btn btn--primaryInverse mx-auto"
                  >
                    All Games
                  </Link>
                </div>
              </div>
            </section>
            <section className="latestPositions">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="latestPositions-heading withGrid">
                      Open Positions
                    </h2>
                  </div>
                </div>
                <div className="row latestPositions-list">
                  {positions.slice(0, 6).map(position => {
                    return (
                      <div className="col-lg-4" key={position.id}>
                        <PositionCard
                          title={position.title}
                          terms={position.terms}
                          slug={position.slug}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  <Link to="/positions/" className="btn btn--primary mx-auto">
                    All open positions
                  </Link>
                </div>
              </div>
            </section>
            <section className="latestNews">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="latestNews-heading">Press</h2>
                  </div>
                </div>
                <div className="row latestNews-list">
                  <div className="col-lg-8">
                    <div className="row">
                      {latestNews.map((news) => {
                        return (
                          <div className="col-md-6" key={news.id}>
                            <NewsCard
                              title={news.title}
                              img={news.media.large}
                              slug={news.slug}
                              date={news.date}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <SocialBlock socialLinks={acfOptions.socials}/>
                  </div>
                </div>
                <div className="row">
                  <Link to="/news/" className="btn btn--primary mx-auto">
                    All news & events
                  </Link>
                </div>
              </div>
            </section>
            <Footer joinUsOptions={acfOptions.join_us}/>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Home;
