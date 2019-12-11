import React, { useContext } from "react";
import ModalContext from "../components/ModalContext";
import SeoBlock from "../components/SeoBlock";
import seoImg from "../assets/images/seoImg.jpg";
import BasicBlock from "../components/BasicBlock/BasicBlock";
import Breadcrumb from "../components/Breadcrumb";
import ArrowDown from "../components/ArrowDown";
import PartnersList from "../components/PartnersList/PartnersList";
import Rtl from "../assets/icons/partners/Rtl";
import Samsung from "../assets/icons/partners/Samsung";
import Facebook from "../assets/icons/partners/Facebook";
import Yahoo from "../assets/icons/partners/Yahoo";
import Stroer from "../assets/icons/partners/Stroer";
import Twitch from "../assets/icons/partners/Twitch";
import AxelSpringer from "../assets/icons/partners/AxelSpringer";
import SimpleCard from "../components/SimpleCard/SimpleCard";
import PremiumGames from "../assets/icons/publishers/PremiumGames";
import InstantPlay from "../assets/icons/publishers/InstantPlay";
import MultipleLanguage from "../assets/icons/publishers/MultipleLanguages";
import Layout from "../components/Layout";
import LinkSmoothScroll from "../components/LinkSmoothScroll";

import crossPlatformGif from '../assets/images/publishers/crossPlatform.gif';
import realTimeDashboardGif from '../assets/images/publishers/realTimeDashboard.gif';
import premiumMonetizationGif from '../assets/images/publishers/premiumMonetization.gif';
import newGamesGif from '../assets/images/publishers/newGames.gif';

const seoBlockData = {
  heading: "Seo Title",
  image: seoImg,
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>`,
  contactUsBtn: true
};

const simpleCards = [
  {
    icon: <PremiumGames />,
    content: (
      <div>
        <h4>400+ Premium Games</h4>
      </div>
    )
  },
  {
    icon: <InstantPlay />,
    content: (
      <div>
        <h4>Instant Play</h4>
      </div>
    )
  },
  {
    icon: <MultipleLanguage />,
    content: (
      <div>
        <h4>Multiple Languages</h4>
      </div>
    )
  }
];

const whyUsCards = [
  {
    icon: crossPlatformGif,
    content: (
      <div>
        <h4>
          Cross
          <br />
          Platform
        </h4>
      </div>
    )
  },
  {
    icon: realTimeDashboardGif,
    content: (
      <div>
        <h4>
          Realtime
          <br />
          Dashboard
        </h4>
      </div>
    )
  },
  {
    icon: premiumMonetizationGif,
    content: (
      <div>
        <h4>
          Premium
          <br />
          Monetization
        </h4>
      </div>
    )
  },
  {
    icon: newGamesGif,
    content: (
      <div>
        <h4>
          New Games
          <br />
          Every Month
        </h4>
      </div>
    )
  }
];

const Publishers = props => {
  const {openModal} = useContext(ModalContext);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb
              items={[
                { name: "Home", slug: "/" },
                { name: "Publishers", slug: "/publishers" }
              ]}
            />
          </div>
        </div>
      </div>
      <BasicBlock
        className="partnerUpBlock publishersBlock withIllustration"
        id="games-affiliate"
        category="Publishers"
        title={
          <h1>
            Games Affiliate
            <br />
            <span>Program</span>
          </h1>
        }
        description={
          <p>
            Join the best Games Affiliate Program as a publisher and maximize
            your earnings! Earn the highest commissions and monetize your online
            and app traffic by embedding high quality, cross-platform games.
          </p>
        }
        image={seoImg}
        imageAlt="Softgames"
        btn={<a href="https://publishers.softgames.com/" target="_blank" className="btn btn--primary">browse games</a>}
      />
      <LinkSmoothScroll href="/publishers/#earn-money">
        <a>
          <ArrowDown />
        </a>
      </LinkSmoothScroll>
      <section id="earn-money" className="affiliateProgram withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="affiliateProgram-description">
                Earn money with SOFTGAMES Games Affiliate Program! Join the
                world’s no.1 casual games platform and offer your users premium
                entertainment with our games directly embedded on your site or
                in your app.
              </p>
            </div>
          </div>
          <div className="row affiliateProgram-list">
            {simpleCards.map((card, index) => (
              <SimpleCard
                key={index}
                icon={card.icon}
                content={card.content}
                className="affiliateProgram-card"
              />
            ))}
          </div>
          <div className="col-lg-10 col-xl-8 mx-auto text-center">
            <h4 className="affiliateProgram-title">
              Join our Games Affiliate Program and start earning money!
            </h4>
            <button className="btn btn--primary" onClick={openModal}>Join Us</button>
          </div>
        </div>
      </section>
      <section id="why-softgames" className="whyUs withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="whyUs-heading">Why SOFTGAMES?</h2>
              <p className="whyUs-subheading">
                To-date, more than 1 billion people have enjoyed our games,
                including the most popular titles like Cookie Crush, Solitaire
                Story, Space Invaders, Fish Story and Bubble Shooter HD.
              </p>
              <p className="whyUs-subheading">
                Whether you run a site, app, bot or messenger, we offer
                everything you need to entertain, retain and monetise your
                audience:
              </p>
            </div>
          </div>
          <div className="row whyUs-list">
            {whyUsCards.map((card, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <SimpleCard
                  icon={card.icon}
                  content={card.content}
                  className="whyUs-card"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="our-partners" className="ourPartners withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="basicHeading">Our partners</h2>
              <p className="ourPartners-subheading">
                Over 2500 global publishers trust us to deliver brand safe
                entertainment, retention and new revenue to their sites and
                apps.
              </p>
            </div>
          </div>
          <PartnersList
            firstColumn={[<Rtl />, <Samsung />]}
            secondColumn={[<Facebook />, <Yahoo />]}
            thirdColumn={[<Stroer />, <Twitch />]}
            fourthColumn={[<AxelSpringer />]}
          />
        </div>
      </section>
      <BasicBlock
        className="partnerUpBlock publishersBlock2 withIllustration"
        category="Publishers"
        title={
          <h2>
            Join our
            <br />
            <span>Games Affiliate Program!</span>
          </h2>
        }
        description={
          <p>
            Join our Games Affiliate Program and start earning money! Get in
            touch, we love talking to people! Reach out:
            <br />
            <a className="link" href="mailto:publishers@softgames.com">
              publishers@softgames.com
            </a>
          </p>
        }
        image={seoImg}
        imageAlt="Softgames"
        btn={<button className="btn btn--primary" onClick={openModal}>register now</button>}
      />
      <SeoBlock
        heading={seoBlockData.heading}
        image={seoBlockData.image}
        content={seoBlockData.content}
        withButton={seoBlockData.contactUsBtn}
      />
    </Layout>
  );
};

export default Publishers;
