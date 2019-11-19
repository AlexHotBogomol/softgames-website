import React from "react";
import GameCard2 from "../partials/GameCard/GameCard2";
import Breadcrumb from "../partials/Breadcrumb";
import SeoBlock from "../partials/SeoBlock";

import cookieCrushImg from "../assets/images/games/CookieCrash.jpg";
import gameIcon from "../assets/images/games/gameIcon.png";
import placeholderImg from "../assets/images/placeholder.jpg";
import seoImg from "../assets/images/seoImg.jpg";
import gamesImg from "../assets/images/gamesImage.jpg";

const games = [
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 1",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 2",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 3",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 4",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 5",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 6",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 7",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 8",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 9",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 10",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 11",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 12",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 13",
    icon: gameIcon
  },
  {
    link: "https://www.google.com",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush 14",
    icon: gameIcon
  }
];

const seoBlockData = {
  heading: "Seo Title",
  image: seoImg,
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>`,
  contactUsBtn: true
};

const Games = props => (
  <div id="content">
    <section className="games">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb
              items={[
                { name: "Home", slug: "/" },
                { name: "Games", slug: "/games/" }
              ]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <h1 className="games-heading">Games</h1>
            <p className="games-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="games-grid">
              {games.map((game, index) => {
                return (
                  <GameCard2
                    key={index}
                    link={game.link}
                    googlePlayLink={game.googlePlayLink}
                    appStoreLink={game.appStoreLink}
                    img={game.image}
                    title={game.title}
                    icon={game.icon}
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
            <h2 className="simpleBlock-title moreGamesBlock-title withGrid">
              On the lookout for more <span>amazing HTML5 Games?</span>
            </h2>
            <p className="simpleBlock-description moreGamesBlock-description">
              Our games affiliate program provides you with easy and instant
              access to the best HTML5 games.
            </p>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Browse all HTML5 Games
            </a>
          </div>
          <div className="col-lg-6">
            <img src={placeholderImg} alt="Softgames" />
          </div>
        </div>
      </div>
    </section>
    <section className="simpleBlock participateBlock">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img src={gamesImg} alt="Softgames" />
          </div>
          <div className="col-lg-5">
            <h2 className="simpleBlock-title participateBlock-title withGrid">
              <span>Participate</span>
            </h2>
            <p className="simpleBlock-description participateBlock-description">
              We are always on the lookout for talents who share the same
              passion as us. Ready for your next challenge?
            </p>
            <button className="btn btn--primary">contact us</button>
          </div>
        </div>
      </div>
    </section>
    <SeoBlock
      heading={seoBlockData.heading}
      image={seoBlockData.image}
      content={seoBlockData.content}
      withButton={seoBlockData.contactUsBtn}
    />
  </div>
);

export default Games;
