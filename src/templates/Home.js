import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import WpApiService from "../services/WpApiService";
import axios from "axios";

import Loader from "react-loader-spinner";
import Slider from "react-slick";

import JoyStick from "../assets/icons/joyStick";
import ArrowDown from "../assets/icons/ArrowDown";
import character from "../assets/images/character.png";

import Header from "../partials/Header/Header";
import GameCard from "../partials/GameCard/GameCard";
import Footer from "../partials/Footer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      homepageData: {},
      posts: [],
      games: [],

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
        this.wpApiService.getLatestPosts({
          per_page: 2
        }),
        this.wpApiService.getCustomPostCollection("game", {
          per_page: 3
        }),
      ])
      .then(
        axios.spread(({ data: homepageData }, { data: posts }, {data: games}) => {
          this.setState({
            loading: false,
            homepageData,
            posts,
            games,
          });
        })
      );
  };

  render() {
    console.log(this.state);
    const { homepageData, posts, pages } = this.state;
    return (
      <div id="content">
        {this.state.loading ? (
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
            <Header />
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
                <Slider className="slider slider2" {...this.sliderSettings}>
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
            <div className="featuredGames">
              <div className="container">
                <img className="featuredGames-character" src={character} alt="Character"/>
                <div className="row">
                  <div className="col-12">
                    <h2 className="featuredGames-heading">Featured Games</h2>
                  </div>
                </div>
                <div className="row featuredGames-gameList">
                  <div className="col-lg-3"></div>
                  {this.state.games.map((game, index) => {
                    return (
                      <div className="col-lg-3" key={index}>
                        <GameCard url={game.acf.game_link} img={game.media.large} title={game.title} description={game.content} limit={50}/>
                      </div>
                  )})}
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
            </div>

            <Footer />
          </Fragment>
        )}
      </div>
    );
  }
}

export default Home;
