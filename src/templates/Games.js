import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import axios from "axios";
import Loader from "react-loader-spinner";
import GameCard2 from "../partials/GameCard/GameCard2";
import Breadcrumb from '../partials/Breadcrumb';
import AboutUsBlock from "../partials/AboutUsBlock";
import SeoBlock from "../partials/SeoBlock";

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      gamesPageData: {},
      games: [],
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    axios
      .all([
        this.wpApiService.getPageBySlug("games"),
        this.wpApiService.getCustomPostCollection("game", {
          per_page: 14
        }),
      ])
      .then(
        axios.spread(
          (
            { data: gamesPageData },
            { data: games },
          ) => {
            this.setState({
              loading: false,
              gamesPageData,
              games,
            });
          }
        )
      );
  };

  render() {
    const { loading, gamesPageData, games} = this.state;

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
            <section className="games">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <Breadcrumb
                      items={[
                        { name: "Home", slug: "/" },
                        { name: "Games", slug: "/games/" },
                      ]}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-9 mx-auto">
                    <h1 className="games-heading">{gamesPageData.acf.gamesMain.heading}</h1>
                    <p className="games-description">
                      {gamesPageData.acf.gamesMain.description}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="games-grid">
                      {games.map(game => {
                        return (
                          <GameCard2
                            key={game.id}
                            link={game.acf.game_link}
                            googlePlayLink={game.acf.link_to_google_play}
                            appStoreLink={game.acf.link_to_app_store}
                            img={game.media.large}
                            title={game.title}
                            icon={game.acf.icon.url}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="simpleBlock moreGamesBlock">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h2 className="simpleBlock-title moreGamesBlock-title withGrid"
                      dangerouslySetInnerHTML={{__html: gamesPageData.acf.more_games_block.title}}
                    />
                    <p className="simpleBlock-description moreGamesBlock-description">
                      {gamesPageData.acf.more_games_block.description}
                    </p>
                    <a href={gamesPageData.acf.more_games_block.button_link} className="btn btn--primary">
                      {gamesPageData.acf.more_games_block.button_text}
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <img src={gamesPageData.acf.more_games_block.image.url} alt={gamesPageData.acf.more_games_block.image.alt} />
                  </div>
                </div>
              </div>
            </section>
            <section className="simpleBlock participateBlock">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <img src={gamesPageData.acf.participate_block.image.url} alt={gamesPageData.acf.participate_block.image.alt} />
                  </div>
                  <div className="col-lg-5">
                    <h2 className="simpleBlock-title participateBlock-title withGrid"
                        dangerouslySetInnerHTML={{__html: gamesPageData.acf.participate_block.title}}
                    />
                    <p className="simpleBlock-description participateBlock-description">
                      {gamesPageData.acf.participate_block.description}
                    </p>
                    <button className="btn btn--primary">{gamesPageData.acf.participate_block.button_text}</button>
                  </div>
                </div>
              </div>
            </section>
            {gamesPageData.acf && gamesPageData.acf.add_about_us_block && gamesPageData.acf.add_about_us_block.length ? (
              <AboutUsBlock
                heading={gamesPageData.acf.about_us_block.heading}
                image={gamesPageData.acf.about_us_block.image}
                content={gamesPageData.acf.about_us_block.content}
                withButton={!!gamesPageData.acf.about_us_block.add_contact_us_button.length}
              />
            ) : null}
            {gamesPageData.acf && gamesPageData.acf.add_seo_block && gamesPageData.acf.add_seo_block.length ? (
              <SeoBlock
                heading={gamesPageData.acf.seo_block.heading}
                image={gamesPageData.acf.seo_block.image}
                content={gamesPageData.acf.seo_block.content}
                withButton={!!gamesPageData.acf.seo_block.add_contact_us_button.length}
              />
            ) : null}
          </Fragment>
        )}
      </div>
    );
  }
}

export default Games;
