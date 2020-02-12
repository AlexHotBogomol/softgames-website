import React, { useContext } from "react";
import ModalContext from "../components/ModalContext";
import SeoBlock from "../components/SeoBlock";
import seoImg from "../assets/images/seoImg.jpg";
import Breadcrumb from "../components/Breadcrumb";
import BasicBlock from "../components/BasicBlock/BasicBlock";
import ArrowDown from "../components/ArrowDown";
import PartnersList from "../components/PartnersList/PartnersList";

import Rtl from "../assets/icons/partners/Rtl";
import Samsung from "../assets/icons/partners/Samsung";
import Facebook from "../assets/icons/partners/Facebook";
import Yahoo from "../assets/icons/partners/Yahoo";
import Stroer from "../assets/icons/partners/Stroer";
import Twitch from "../assets/icons/partners/Twitch";
import AxelSpringer from "../assets/icons/partners/AxelSpringer";
import Amazon from "../assets/icons/partners/Amazon";
import Hp from "../assets/icons/partners/Hp";
import Lego from "../assets/icons/partners/Lego";
import Microsoft from "../assets/icons/partners/Microsoft";
import Cisco from "../assets/icons/partners/Cisco";
import Fiat from "../assets/icons/partners/Fiat";

import gotGameGif from '../assets/images/developers/gotGame.gif';
import challengeGif from '../assets/images/developers/challenge.gif';
import Layout from "../components/Layout";
import LinkSmoothScroll from "../components/LinkSmoothScroll";

import DevelopersImg from "../assets/images/homeSlider2/Developers_Slide.png";

const seoBlockData = {
  heading: "Are you a HTML5 game developer?",
  image: seoImg,
  content: `
    <p><b>
    Are you enjoying HTML5 games development?<br/>
    Do you want to sell your HTML5 game to us?
    </b></p>
    <p>Join the leading <b>HTML5 Games Network</b> today, do what you love and <b>earn MORE!</b></p>
    <p><b>SOFTGAMES</b> offers you different sponsorship options from instant cash to long-term revenue shares for your HTML5 games. We can help you to monetize and distribute your games by providing an access to the widest audience!</p>
    <p>
    Therefore, you can get all the necessary tools and services that would help your free to play or freemium games to succeed and to have a truly global reach.<br/>
    We provide our developers with high level QA support, localization, legal support and device expertise. You would be able to track the performance of your game through a detailed reporting dashboard at any time!
    </p>
    <p>
    If there are any question our dedicated Support team will assist you!
Get paid and instant cash for your great HTML5 games. <b>Submit today!</b>
    </p>
  `,
  contactUsBtn: false
};

const Developers = props => {
  const {openModal} = useContext(ModalContext);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb
              items={[
                { name: "Home", slug: "/" },
                { name: "Developers", slug: "/distribute-html5-games" }
              ]}
            />
          </div>
        </div>
      </div>
      <BasicBlock
        className="partnerUpBlock developersBlock withIllustration"
        category="Developers"
        title={
          <h1>
            Publish with us -<br />
            <span>do what you love</span>
          </h1>
        }
        description={
          <p>
            Publish your HTML5 Game or Messenger Game with SOFTGAMES and do what
            you love! We help you to distribute and monetize your HTML5 games
            better with our global reach and better ads.
          </p>
        }
        image={DevelopersImg}
        imageAlt="Softgames"
        btn={<button className="btn btn--primary" onClick={openModal}>Submit Game</button>}
      />
      <LinkSmoothScroll href="/distribute-html5-games/#global-reach">
        <a>
          <ArrowDown />
        </a>
      </LinkSmoothScroll>
      <section id="global-reach" className="globalReach withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="basicHeading">Global Reach</h2>
              <p className="globalReach-subheading">
                Instantly publish your best HTML5 game to millions of players
                around the globe through 2500 global partners.
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
      <section
        id="better-monetization"
        className="betterMonetization withIllustration"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-xl-6 mx-auto text-center">
              <h2 className="basicHeading">Better Monetization</h2>
              <p className="betterMonetization-subheading">
                Concentrate on doing what you can do best – create great HTML5
                games and keep the rest of work to us. We will provide you the
                tools and services to put your HTML5 game in front of millions
                of players. Our powerful game distribution service makes
                monetization and distribution like a piece of cake.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h4 className="betterMonetization-title">
                Brands that regularly advertise in our games include:
              </h4>
            </div>
          </div>
          <PartnersList
            firstColumn={[<Amazon />, <Lego />]}
            secondColumn={[<Microsoft />]}
            thirdColumn={[<Cisco />, <Hp />]}
            fourthColumn={[<Fiat />]}
          />
        </div>
      </section>
      <section id="publish-with-us" className="publishWithUs">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="publishWithUs-heading">Publish with us</h2>
              <div className="row">
                <div className="col-sm-8 mx-auto col-md-6">
                  <div className="publishWithUsCard">
                    <div className="publishWithUsCard-imgWrapper">
                      <img src={gotGameGif} alt="Got a great game?"/>
                    </div>
                    <div className="publishWithUsCard-content">
                      <div className="publishWithUsCard-text">
                        <h4>Got a great game?</h4>
                      </div>
                      <button className="btn btn--secondary" onClick={openModal}>
                        Get in touch
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 mx-auto col-md-6">
                  <div className="publishWithUsCard">
                    <div className="publishWithUsCard-imgWrapper">
                      <img src={challengeGif} alt="Got a great game?"/>
                    </div>
                    <div className="publishWithUsCard-content">
                      <div className="publishWithUsCard-text">
                        <h4>Ready for your next challenge?</h4>
                        <p>
                          We are always on the lookout for talents who share the
                          same passion as us.{" "}
                        </p>
                      </div>
                      <button className="btn btn--primary" onClick={openModal}>
                        Join the team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

export default Developers;
