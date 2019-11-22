import React from "react";
import SeoBlock from "../partials/SeoBlock";
import seoImg from "../assets/images/seoImg.jpg"
import Breadcrumb from "../partials/Breadcrumb";
import BasicBlock from "../partials/BasicBlock/BasicBlock";
import ArrowDown from "../assets/icons/ArrowDown";
import PartnersList from "../partials/PartnersList/PartnersList";

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


const seoBlockData = {
  heading: "Seo Title",
  image: seoImg,
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>`,
  contactUsBtn: true,
};

const Developers = (props) => (
  <div id="content">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Breadcrumb
            items={[
              { name: "Home", slug: "/" },
              { name: "Developers", slug: "/developers/" }
            ]}
          />
        </div>
      </div>
    </div>
    <BasicBlock
      className="partnerUpBlock developersBlock withIllustration"
      category="Developers"
      title={<h1>Publish with us -<br/><span>do what you love</span></h1>}
      description={<p>Publish your HTML5 Game or Messenger Game with SOFTGAMES and do what
                   you love! We help you to distribute and monetize your HTML5 games better with
        our global reach and better ads.</p>}
      image={seoImg}
      imageAlt="Softgames"
      btn={<button className="btn btn--primary">Submit Game</button>}
    />
    <ArrowDown className="arrowDown" />
    <section className="globalReach">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <h2 className="basicHeading">Global Reach</h2>
            <p className="globalReach-subheading">
              Instantly publish your best HTML5 game to millions of players around the globe
              through 2500 global partners.
            </p>
          </div>
        </div>
        <PartnersList
          firstColumn={[
            <Rtl/>,
            <Samsung/>
          ]}
          secondColumn={[
            <Facebook/>,
            <Yahoo/>
          ]}
          thirdColumn={[
            <Stroer/>,
            <Twitch/>
          ]}
          fourthColumn={[
            <AxelSpringer/>
          ]}
        />
      </div>
    </section>
    <section className="betterMonetization">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <h2 className="basicHeading">Better Monetization</h2>
            <p className="betterMonetization-subheading">
              Concentrate on doing what you can do best – create great HTML5 games and
              keep the rest of work to us. We will provide you the tools and services to put your
              HTML5 game in front of millions of players. Our powerful game distribution service
              makes monetization and distribution like a piece of cake.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h4 className="betterMonetization-title">Brands that regularly advertise in our games include:</h4>
          </div>
        </div>
        <PartnersList
          firstColumn={[
            <Amazon/>,
            <Lego/>
          ]}
          secondColumn={[
            <Microsoft/>,
          ]}
          thirdColumn={[
            <Cisco/>,
            <Hp/>
          ]}
          fourthColumn={[
            <Fiat/>
          ]}
        />
      </div>
    </section>
    <section className="publishWithUs">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="publishWithUs-heading">Publish with us</h2>
            <div className="row">
              <div className="col-lg-6">
                <div className="publishWithUsCard">
                  <div className="publishWithUsCard-imgWrapper">

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
  </div>
);

export default Developers;