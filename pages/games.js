import React, { useContext } from "react";
import ModalContext from "../components/ModalContext";
import {NextSeo} from 'next-seo';
import GameCard2 from "../components/GameCard/GameCard2";
import Breadcrumb from "../components/Breadcrumb";
import SeoBlock from "../components/SeoBlock";
import seoImg from "../assets/images/seoImg.jpg";
import gamesImg from "../assets/images/gamesImage.jpg";
import Layout from "../components/Layout";

import cookieCrushImg from "../assets/images/games/COOKIE_CRUSH.png";
import solitaireStory from "../assets/images/games/SolitaireStory.png";
import bubbleShooter from "../assets/images/games/bubbleShooter.png";
import gardenTales from "../assets/images/games/gardenTales.png";
import jewelsBlitz from "../assets/images/games/jewelsBlitz.png";
import mahjong from "../assets/images/games/mahjong.png";
import spaceInvaders from "../assets/images/games/spaceInvaders.png";
import yummuyTales from "../assets/images/games/yummuyTales.png";
import connect2020 from "../assets/images/games/connect2020.png";

import cookieCrushIcon from "../assets/images/games/icons/cookieCrushIcon.png";
import solitaireStoryIcon from "../assets/images/games/icons/solitaireStoryIcon.png";
import bubbleShooterIcon from "../assets/images/games/icons/bubbleShooterIcon.png";
import gardenTalesIcon from "../assets/images/games/icons/garderTalesIcon.png";
import jewelsBlitzIcon from "../assets/images/games/icons/jewelsBlitzIcon.png";
import mahjongIcon from "../assets/images/games/icons/mahjongIcon.png";
import spaceInvadersIcon from "../assets/images/games/icons/spaceInvadersIcon.png";
import yummuyTalesIcon from "../assets/images/games/icons/yummuyTalesIcon.png";
import connect2020Icon from "../assets/images/games/icons/connect2020Icon.png";

import lookOutMoreGamesImg from "../assets/images/Lookout_More_Games.png";

const games = [
  {
    link: "http://bit.ly/Play_CookieCrush",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: cookieCrushImg,
    title: "Cookie Crush",
    icon: cookieCrushIcon
  },
  {
    link: "http://bit.ly/Play_SolitaireStoryTripeaks",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.softgames.solitairestory",
    appStoreLink: "https://www.google.com",
    image: solitaireStory,
    title: "Solitaire Story",
    icon: solitaireStoryIcon
  },
  {
    link: "http://bit.ly/Play_MahjongStory",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: mahjong,
    title: "Mahjong Story",
    icon: mahjongIcon
  },
  {
    link: "http://bit.ly/Play_GardenTales",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: gardenTales,
    title: "Garden Tales",
    icon: gardenTalesIcon
  },
  {
    link: "http://bit.ly/Play_SpaceInvaders ",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: spaceInvaders,
    title: "Space Invaders",
    icon: spaceInvadersIcon
  },
  {
    link: "http://bit.ly/Play_YummyTales",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: yummuyTales,
    title: "Yummuy Tales",
    icon: yummuyTalesIcon
  },
  {
    link: "http://bit.ly/Play_BubbleShooterClassic ",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: bubbleShooter,
    title: "Bubble Shooter Classic",
    icon: bubbleShooterIcon
  },
  {
    link: "http://bit.ly/Play_JewelsBlitz",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: jewelsBlitz,
    title: "Jewels Blitz",
    icon: jewelsBlitzIcon
  },
  {
    link: "http://bit.ly/Play_2020_Connect",
    googlePlayLink: "https://www.google.com",
    appStoreLink: "https://www.google.com",
    image: connect2020,
    title: "2020 Connect",
    icon: connect2020Icon
  },
];

const seoBlockData = {
  heading: "Seo Title",
  image: seoImg,
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>`,
  contactUsBtn: true
};

const Games = props => {
  const { openModal } = useContext(ModalContext);
  return (
    <Layout>
      <NextSeo
        title="Games"
        description="A short description goes here."
      />
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
                      link={game.link}
                      key={index}
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
              <button className="btn btn--primary" onClick={openModal}>
                contact us
              </button>
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
