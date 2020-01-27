import React, { useContext } from "react";
import ModalContext from "../components/ModalContext";
import LinkSmoothScroll from "../components/LinkSmoothScroll";
import { NextSeo } from "next-seo";
import GameCard2 from "../components/GameCard/GameCard2";
import Breadcrumb from "../components/Breadcrumb";
import SeoBlock from "../components/SeoBlock";
import seoImg from "../assets/images/seoImg.jpg";
import gamesImg from "../assets/images/gamesImage.jpg";
import Layout from "../components/Layout";
import games from "../data/games";

import lookOutMoreGamesImg from "../assets/images/Lookout_More_Games.png";

const seoBlockData = {
  heading: "Seo Title",
  image: seoImg,
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>`,
  contactUsBtn: false
};

const Games = props => {
  const { openModal } = useContext(ModalContext);
  return (
    <Layout>
      <NextSeo title="Games" description="A short description goes here." />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb
              items={[
                { name: "Home", slug: "/" },
                { name: "Games", slug: "/free-online-games" }
              ]}
            />
          </div>
        </div>
      </div>
      <section className="games withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <h1 className="games-heading">Games</h1>
              <p className="games-description withGrid">
                Play Free Online Games. From Solitaire Tripeaks and Match 3
                Games to Mahjong and Trivia Quiz - enjoy our collection of
                premium, fun, free online games!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="games-grid">
                {games.map((game, index) => {
                  return (
                    <GameCard2
                      link={game.link}
                      key={index}
                      googlePlayLink={game.googlePlayLink}
                      appStoreLink={game.appStoreLink}
                      img={game.image}
                      title={game.title}
                      icon={game.icon}
                      secret={game.secret || false}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="simpleBlock moreGamesBlock withIllustration">
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
                href="https://publishers.softgames.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Browse all HTML5 Games
              </a>
            </div>
            <div className="col-lg-6">
              <img src={lookOutMoreGamesImg} alt="Softgames" />
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
              <LinkSmoothScroll href="/career/#job-openings">
                <a className="btn btn--primary">join us</a>
              </LinkSmoothScroll>
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
    </Layout>
  );
};

export default Games;
