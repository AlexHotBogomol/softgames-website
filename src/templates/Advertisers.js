import React from "react";
import AboutUsBlock from "../partials/AboutUsBlock";
import SeoBlock from "../partials/SeoBlock";
import seoImg from "../assets/images/seoImg.jpg"
import Breadcrumb from "../partials/Breadcrumb";
import BasicBlock from "../partials/BasicBlock/BasicBlock";
import ArrowDown from "../assets/icons/ArrowDown";

const aboutUsData = {
  heading: "About Us",
  image: seoImg,
  content: `<p>SOFTGAMES is a leading developer of the most popular Instant Games. Our flagship titles Cookie Crush, Solitaire Story and Candy Match are being played by tens of millions of users every month.</p>
  <p>Our mission is to enable everybody to instantly play great casual games with their friends across any device.</p>
  <p>Further our line of products includes over 400 hyper casual games within our innovative HTML5 games platform which allows our partners to engage and retain their user base. Founded in 2006 we are operating out of Berlin, Germany and Toronto, Canada.</p>`,
  contactUsBtn: true,
};

const seoBlockData = {
  heading: "Seo Title",
  image: seoImg,
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>`,
  contactUsBtn: true,
};

const Advertisers = (props) => (
  <div id="content">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Breadcrumb
            items={[
              { name: "Home", slug: "/" },
              { name: "Advertisers", slug: "/advertisers/" }
            ]}
          />
        </div>
      </div>
    </div>
    <BasicBlock
      className="partnerUpBlock advertisersBlock withIllustration"
      category="Advertisers"
      title={<h1>Global Reach<br/><span>for your brand.</span></h1>}
      description={<p>Enjoy our brand-safe traffic, high viewability, engaged users and diverse
                   demographic audience! Select your target audience from 30+ million active
                    users and advertise your brand on our HTML5 games platform.</p>}
      image={seoImg}
      imageAlt="Softgames"
      btn={<button className="btn btn--primary">get started</button>}
    />
    <ArrowDown className="arrowDown" />
    <AboutUsBlock
      heading={aboutUsData.heading}
      image={aboutUsData.image}
      content={aboutUsData.content}
      withButton={aboutUsData.contactUsBtn}
    />
    <SeoBlock
      heading={seoBlockData.heading}
      image={seoBlockData.image}
      content={seoBlockData.content}
      withButton={seoBlockData.contactUsBtn}
    />
  </div>
);

export default Advertisers;
