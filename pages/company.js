import React, {useState, useEffect} from "react";
import Link from 'next/link';
import axios from "axios";
import apiEndpoints from '../utils/apiEndpoints';

import AboutUsBlock from "../components/AboutUsBlock";
import SeoBlock from "../components/SeoBlock";
import seoImg from "../assets/images/seoImg.jpg";
import CompanyTopBanner from "../assets/images/company/companyTopBanner.jpg";
import Breadcrumb from "../components/Breadcrumb";
import TimelineSlider from "../components/TimelineSlider/TimelineSlider";
import ManagerList from "../components/ManagerList/ManagerList";
import NewsCard from "../components/NewsCard/NewsCard";
import Sidebar from "../components/Sidebar/Sidebar";
import SocialBlock from "../components/SocialBlock/SocialBlock";
import Form from "../components/Form/Form";
import Layout from "../components/Layout";


const aboutUsData = {
  heading: "About Us",
  image: CompanyTopBanner,
  content: `<p>SOFTGAMES is a leading developer of the most popular Instant Games. Our flagship titles Cookie Crush, Solitaire Story and Candy Match are being played by tens of millions of users every month.</p>
  <p>Our mission is to enable everybody to instantly play great casual games with their friends across any device.</p>
  <p>Further our line of products includes over 400 hyper casual games within our innovative HTML5 games platform which allows our partners to engage and retain their user base. Founded in 2006 we are operating out of Berlin, Germany and Toronto, Canada.</p>`,
  contactUsBtn: true,
};

const seoBlockData = {
  heading: "Seo Title",
  image: seoImg,
  content: `<p>Games Affiliate Program
  Earn money with SOFTGAMES Games Affiliate Program!
  Join our best affiliate program tailored for gaming site publishers, online networks and website owners and become a Publisher at SOFTGAMES Affiliate Marketing Network! Earn the highest commissions and monetize your online traffic by embedding high quality, cross-platform gaming content.
  As a worldwide leader in HTML5 casual gaming, SOFTGAMES makes it easy to profit and to be a part of the fast-growing and extremely popular mobile online games business.
  Our Games Affiliate Program provides you with access to our catalog of 400+ exclusive HTML5 casual games from our catalogue as automatic feeds, full white label portals or selected content only.
  </p>`,
  contactUsBtn: false,
};

const Company = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const loadData = () => {
      try{
        axios.get(`${apiEndpoints.news}?orderby=date&order=DESC&per_page=6`, { cancelToken: source.token }).then(({data: news}) => {
          setNews(news);
        })
      } catch(error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      source.cancel();
    }
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb
              items={[
                {name: "Home", slug: "/"},
                {name: "Company", slug: "/company"},
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
                    <div className="col-sm-8 mx-auto col-md-6" key={newsItem.id}>
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
              <div className="row d-lg-none">
                <div className="col-12 text-center">
                  <a className="btn btn--secondary" href="/news" target="_blank">
                    All news & events
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 mx-auto col-lg-4">
              <Sidebar />
            </div>
          </div>
          <div className="row d-none d-lg-flex">
            <div className="col-12">
              <Link href="/news/">
                <a className="btn btn--secondary" href="/news" target="_blank">
                  All news & events
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="getInTouch withIllustration">
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
              <Form className="form--getInTouch withGrid"/>
            </div>
            <div className="col-lg-4 socialBlockWrapper">
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
    </Layout>
  );
};

export default Company;