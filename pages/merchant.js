import React, { useContext } from "react";
import ModalContext from "../components/ModalContext";
import SeoBlock from "../components/SeoBlock";
import seoImg from "../assets/images/seoImg.jpg";
import Breadcrumb from "../components/Breadcrumb";
import BasicBlock from "../components/BasicBlock/BasicBlock";
import ArrowDown from "../components/ArrowDown";
import SimpleCard from "../components/SimpleCard/SimpleCard";

import premiumPublishersGif from "../assets/images/advertisers/premiumPublishers.gif";
import releasedGamesGif from "../assets/images/advertisers/releasedGames.gif";
import activeUsersGif from "../assets/images/advertisers/activeUsers.gif";
import returningVisitorsGif from "../assets/images/advertisers/returningVisitors.gif";
import sessionDurationGif from "../assets/images/advertisers/sessionDuration.gif";

import PartnersList from "../components/PartnersList/PartnersList";
import Rtl from "../assets/icons/partners/Rtl";
import Samsung from "../assets/icons/partners/Samsung";
import Facebook from "../assets/icons/partners/Facebook";
import Yahoo from "../assets/icons/partners/Yahoo";
import Stroer from "../assets/icons/partners/Stroer";
import Twitch from "../assets/icons/partners/Twitch";
import AxelSpringer from "../assets/icons/partners/AxelSpringer";
import Iab from "../assets/icons/partners/Iab";
import PartnersItem from "../components/PartnersList/PartnersItem/PartnersItem";
import moat from "../assets/images/partners/moat.png";
import gdpr from "../assets/images/partners/gdpr.png";
import Amazon from "../assets/icons/partners/Amazon";
import Lego from "../assets/icons/partners/Lego";
import Microsoft from "../assets/icons/partners/Microsoft";
import Cisco from "../assets/icons/partners/Cisco";
import Hp from "../assets/icons/partners/Hp";
import Fiat from "../assets/icons/partners/Fiat";
import interstitialVideo from "../assets/images/adFormats/interstitialVideo.png";
import preRollVideo from "../assets/images/adFormats/preRollVideo.png";
import rewardedVideo from "../assets/images/adFormats/rewardedVideo.png";
import Layout from "../components/Layout";
import LinkSmoothScroll from "../components/LinkSmoothScroll";

const seoBlockData = {
  heading: "Seo Title",
  image: seoImg,
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>`,
  contactUsBtn: false
};

const whyUsCards = [
  {
    icon: premiumPublishersGif,
    content: (
      <div>
        <div className="indicator">2000+</div>
        <h5>
          Premium
          <br />
          Publishers
        </h5>
      </div>
    )
  },
  {
    icon: releasedGamesGif,
    content: (
      <div>
        <div className="indicator">400+</div>
        <h5>
          In-house Released
          <br />
          Games
        </h5>
      </div>
    )
  },
  {
    icon: activeUsersGif,
    content: (
      <div>
        <div className="indicator">30m+</div>
        <h5>
          Monthly Active
          <br />
          Users
        </h5>
      </div>
    )
  },
  {
    icon: returningVisitorsGif,
    content: (
      <div>
        <div className="indicator">87%</div>
        <h5>
          Returning
          <br />
          Visitors
        </h5>
      </div>
    )
  },
  {
    icon: sessionDurationGif,
    content: (
      <div>
        <div className="indicator">45+</div>
        <h5>
          Minutes average
          <br />
          session duration
        </h5>
      </div>
    )
  }
];

const Merchant = props => {
  const {openModal} = useContext(ModalContext);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb
              items={[
                { name: "Home", slug: "/" },
                { name: "Advertisers", slug: "/advertisers" }
              ]}
            />
          </div>
        </div>
      </div>
      <BasicBlock
        className="partnerUpBlock advertisersBlock withIllustration"
        category="Advertisers"
        title={
          <h1>
            Global Reach
            <br />
            <span>for your brand.</span>
          </h1>
        }
        description={
          <p>
            Enjoy our brand-safe traffic, high viewability, engaged users and
            diverse demographic audience! Select your target audience from 30+
            million active users and advertise your brand on our HTML5 games
            platform.
          </p>
        }
        image={seoImg}
        imageAlt="Softgames"
        btn={<button className="btn btn--primary" onClick={openModal}>get started</button>}
      />
      <LinkSmoothScroll href="/advertisers/#why-softgames">
        <a>
          <ArrowDown />
        </a>
      </LinkSmoothScroll>
      <section id="why-softgames" className="whyUs whyUs--advertisers">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="whyUs-heading">Why SOFTGAMES?</h2>
              <h4 className="whyUs-subheading">Engaged audience</h4>
            </div>
          </div>
          <div className="row whyUs-list justify-content-center">
            {whyUsCards.map((card, index) => (
              <div className="col-sm-6 col-lg-4" key={index}>
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
      <section className="ourPartners ourPartners--advertisers withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h4 className="ourPartners-subheading">
                Our games entertain the audiences of such companies:
              </h4>
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
      <section className="adFormats">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h2 className="adFormats-heading">Ad formats</h2>
              <p className="adFormats-subheading">
                We offer a variety of high impact formats for your brand to tell
                a story:
              </p>
            </div>
          </div>
          <div className="row withIllustration preRollVideo">
            <div className="col-lg-6">
              <h2 className="adFormats-title withGrid">Pre-Roll Video</h2>
              <p className="adFormats-description">
                Pre-roll advertising is extremely practical. Running an ad
                before the user’s desired content means the audience is likely
                still engaged, interested, and willing to sit through a brief ad
                to get to the content they want to see. Since they’re waiting
                for something specific, there’s a higher chance they’ll watch
                your ad for at least for a few seconds, if not in its entirety.
              </p>
              <button className="btn btn--primary" onClick={openModal}>contact us</button>
            </div>
            <div className="col-lg-6">
              <div className="adFormats-imgWrapper">
                <img src={preRollVideo} alt="Pre-Roll Video" />
              </div>
            </div>
          </div>
          <div className="row withIllustration interstitialVideo">
            <div className="col-lg-4 offset-lg-1">
              <div className="adFormats-imgWrapper adFormats-imgWrapper--top">
                <img src={interstitialVideo} alt="Interstitial Video/ Banner" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h2 className="adFormats-title withGrid">
                Interstitial Video/ Banner
              </h2>
              <p className="adFormats-description">
                Interstitial ads are one of the most popular mobile ad formats
                used by developers and marketers because of their high
                impression rate to increase downloads and revenue. Well-known
                companies have seen significant increases in app installs by
                optimizing interstitials, including Pinterest and Airbnb with an
                increase of 100% and 300%, respectively.
              </p>
              <button className="btn btn--primary" onClick={openModal}>contact us</button>
            </div>
          </div>
          <div className="row withIllustration rewardedVideo">
            <div className="col-lg-6">
              <h2 className="adFormats-title withGrid">Rewarded Video</h2>
              <p className="adFormats-description">
                Pre-roll advertising is extremely practical. Running an ad
                before the user’s desired content means the audience is likely
                still engaged, interested, and willing to sit through a brief ad
                to get to the content they want to see. Since they’re waiting
                for something specific, there’s a higher chance they’ll watch
                your ad for at least for a few seconds, if not in its entirety.
              </p>
              <button className="btn btn--primary" onClick={openModal}>contact us</button>
            </div>
            <div className="col-lg-6">
              <div className="adFormats-imgWrapper">
                <img src={rewardedVideo} alt="Rewarded Video" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="brands" className="brandSafety">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h2 className="brandSafety-heading">Brand safety</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <PartnersItem icon={<Iab />} />
              <p className="brandSafety-text">
                Your ads are presented in a natural, non-intrusive format. We
                adopted the industry best practices and comply with IAB
                guidelines.
              </p>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <PartnersItem icon={<img src={gdpr} alt="gdpr" />} />
              <p className="brandSafety-text">
                Privacy of our user safety comes first and with it also lawful
                data processing. We are fully GDPR compliant.
              </p>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <PartnersItem icon={<img src={moat} alt="moat" />} />
              <p className="brandSafety-text">
                The quality of our inventory is monitored and verified by MOAT.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="betterMonetization withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-8 mx-auto text-center">
              <h2 className="basicHeading">Brands</h2>
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
      <BasicBlock
        className="partnerUpBlock publishersBlock2"
        id="join-us"
        category="Advertisers"
        title={
          <h2>
            <span>Contact us</span>
            <br />
            to tell your story
          </h2>
        }
        description={
          <p>
            Would you like to become a partner or expand an existing
            <br />
            cooperation? Get in touch, we love talking to people!
          </p>
        }
        image={seoImg}
        imageAlt="Softgames"
        btn={<button className="btn btn--primary" onClick={openModal}>Contact Us</button>}
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

export default Merchant;
