import React from "react";
import AboutUsBlock from "../partials/AboutUsBlock";
import SeoBlock from "../partials/SeoBlock";
import seoImg from "../assets/images/seoImg.jpg"
import Breadcrumb from "../partials/Breadcrumb";
import TimelineSlider from "../partials/TimelineSlider/TimelineSlider";
import ManagerList from "../partials/ManagerList/ManagerList";

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

const Company = (props) => (
  <div id="content">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Breadcrumb
            items={[
              { name: "Home", slug: "/" },
              { name: "Company", slug: "/company/" },
            ]}
          />
        </div>
      </div>
    </div>
    <AboutUsBlock
      heading={aboutUsData.heading}
      image={aboutUsData.image}
      content={aboutUsData.content}
      withButton={aboutUsData.contactUsBtn}
      className="company-aboutUs"
    />
    <section className="ourStory">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="ourStory-heading">
              Our Story
            </h2>
            <TimelineSlider/>
          </div>
        </div>
      </div>
    </section>
    <section className="management">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="management-heading">Management</h2>
            <ManagerList/>
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

export default Company;