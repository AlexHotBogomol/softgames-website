import React, { useState, useEffect } from "react";
import axios from "axios";
import { NextSeo } from "next-seo";
import apiEndpoints from "../utils/apiEndpoints";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from "../components/Layout";
import HomeSlider1 from "../components/HomeSlider1";
import ArrowDown from "../components/ArrowDown";
import HomeSlider2 from "../components/HomeSlider2";
import PositionCard from "../components/PositionCard/PositionCard";
import NewsCard from "../components/NewsCard/NewsCard";
import SocialBlock from "../components/SocialBlock/SocialBlock";
import Link from "next/link";

import character from "../assets/images/character.png";
import LinkSmoothScroll from "../components/LinkSmoothScroll";

import Preloader from "../components/Preloader/Preloader";

import HomeSlider3 from "../components/HomeSlider3";

const Index = props => {
  const [positions, setPositions] = useState([]);
  const [news, setNews] = useState([]);
  const [isPreloaderEnd, setIsPreloaderEnd] = useState(false);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const htmlElement = document.getElementsByTagName('html')[0];
    htmlElement.style.overflowY = "hidden";
    const loadData = () => {
      try {
        axios
          .get(`${apiEndpoints.news}?orderby=date&order=DESC&per_page=2`, {
            cancelToken: source.token
          })
          .then(({ data: news }) => {
            setNews(news);
          });
        axios
          .get(apiEndpoints.positions, { cancelToken: source.token })
          .then(({ data: { offers: positions } }) => {
            setPositions(positions);
          });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    setTimeout(() => {
      setIsPreloaderEnd(true);
      htmlElement.style.overflowY = "scroll";
    }, 2000);

    loadData();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <Layout>
      <NextSeo title="Home" />
      {isPreloaderEnd ? null : (<Preloader />)}
      <div className="container--fullWidth">
        <HomeSlider1 />
      </div>
      <LinkSmoothScroll href="/#global-reach">
        <a>
          <ArrowDown />
        </a>
      </LinkSmoothScroll>
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
          <div className="row featuredGames-gameList justify-content-center">
            <div className="d-none d-lg-block col-lg-3" />
            <div className="col-lg-9">
              <HomeSlider3 />
            </div>
          </div>
          <div className="row">
            <Link href="/free-online-games">
              <a className="btn btn--primaryInverse mx-auto">All Games</a>
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
          <TransitionGroup className="row latestPositions-list">
            {positions
              ? positions.slice(0, 6).map(position => {
                return (
                  <CSSTransition
                    classNames="fade"
                    timeout={200}
                    key={position.id}
                  >
                    <div className="col-md-6 col-xl-4">
                      <PositionCard
                        title={position.title}
                        department={position.department}
                        location={position.location}
                        url={position.careers_url}
                      />
                    </div>
                  </CSSTransition>
                );
              })
              : null}
          </TransitionGroup>
          <div className="row">
            <LinkSmoothScroll href="/career/#job-openings">
              <a className="btn btn--primary mx-auto">All open positions</a>
            </LinkSmoothScroll>
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
              <TransitionGroup className="row">
                {news
                  ? news.map(newsItem => {
                    return (
                      <CSSTransition
                        classNames="fade"
                        timeout={200}
                        key={newsItem.id}
                      >
                        <div className="col-sm-8 mx-auto col-md-6">
                          <NewsCard
                            title={newsItem.title}
                            img={newsItem.media.large}
                            slug={newsItem.slug}
                            date={newsItem.date}
                          />
                        </div>
                      </CSSTransition>
                    );
                  })
                  : null}
              </TransitionGroup>
              <div className="row d-lg-none">
                <a
                  href="https://softgames.ein-des-ein.com/"
                  target="_blank"
                  className="btn btn--primary mx-auto"
                >
                  All news & events
                </a>
              </div>
            </div>
            <div className="col-lg-4 socialBlockWrapper">
              <SocialBlock />
            </div>
          </div>
          <div className="row d-none d-lg-flex">
            <a
              href="https://softgames.ein-des-ein.com/"
              target="_blank"
              className="btn btn--primary mx-auto"
            >
              All news & events
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
