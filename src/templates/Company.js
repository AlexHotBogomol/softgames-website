import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import AboutUsBlock from "../partials/AboutUsBlock";
import SeoBlock from "../partials/SeoBlock";
import seoImg from "../assets/images/seoImg.jpg"
import Breadcrumb from "../partials/Breadcrumb";
import TimelineSlider from "../partials/TimelineSlider/TimelineSlider";
import ManagerList from "../partials/ManagerList/ManagerList";
import NewsCard from "../partials/NewsCard/NewsCard";
import Sidebar from "../partials/Sidebar/Sidebar";
import WpApiService from "../services/WpApiService";
import SocialBlock from "../partials/SocialBlock/SocialBlock";
import Form from "../partials/Form/Form";

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

const Company = (props) => {
  const wpApiService = new WpApiService();
  const [news, setNews] = useState([]);

  useEffect(() => {
    wpApiService.getCustomPostCollection("blog", {
      per_page: 6
    }).then(({data: news}) => {
      setNews(news);
    })
  }, []);

  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb
              items={[
                {name: "Home", slug: "/"},
                {name: "Company", slug: "/company/"},
              ]}
            />
          </div>
        </div>
      </div>
      <AboutUsBlock
        heading={aboutUsData.heading}
        id="about-us"
        image={aboutUsData.image}
        content={aboutUsData.content}
        withButton={aboutUsData.contactUsBtn}
        className="company-aboutUs"
      />
      <section id="our-story" className="ourStory withIllustration">
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
      <section id="management" className="management withIllustration">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="management-heading">Management</h2>
              <ManagerList/>
            </div>
          </div>
        </div>
      </section>
      <section id="press-room" className="pressRoom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="pressRoom-heading">
                Press Room
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="row news-list">
                {news.map(newsItem => {
                  return (
                    <div className="col-md-6" key={newsItem.id}>
                      <NewsCard
                        id={newsItem.id}
                        title={newsItem.title}
                        img={newsItem.media.large}
                        slug={newsItem.slug}
                        date={newsItem.date}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-4">
              <Sidebar
                subscribe={false}
                tags={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Link to="/news/" className="btn btn--secondary">
                All news & events
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="getInTouch">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="getInTouch-heading">
                Get in touch
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <Form className="form--getInTouch"/>
            </div>
            <div className="col-lg-4">
              <SocialBlock className="socialBlock--company"/>
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
}

export default Company;