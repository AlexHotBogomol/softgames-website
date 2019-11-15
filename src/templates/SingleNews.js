import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import Loader from "react-loader-spinner";
import Sidebar from "../partials/Sidebar/Sidebar";
import NewsCard from "../partials/NewsCard/NewsCard";
import { Link } from "react-router-dom";
import Helper from "../services/Helper";
import Breadcrumb from "../partials/Breadcrumb";
import Slider from "react-slick";
import SEO from "../partials/SEO";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from "react-share";
import FacebookShareIcon from "../assets/icons/FacebookShareIcon";
import LinkedinShareIcon from "../assets/icons/LinkedinShareIcon";
import TwitterShareIcon from "../assets/icons/TwitterShareIcon";
import GooglePlusShareIcon from "../assets/icons/GooglePlusShareIcon";
import JoyStick from "../assets/icons/JoyStick";
import AboutUsBlock from "../partials/AboutUsBlock";
import SeoBlock from "../partials/SeoBlock";

class SingleNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      postData: {},
      latestNews: []
    };

    this.wpApiService = new WpApiService();
    this.helper = new Helper();
  }

  componentDidMount = () => {
    this.wpApiService
      .getCustomPostBySlug("blog", this.props.match.params.slug)
      .then(({ data: postData }) => {
        this.setState({
          postData
        });
        this.wpApiService
          .getCustomPostCollection("blog", {
            per_page: 2,
            exclude: this.state.postData.id
          })
          .then(({ data: latestNews }) => {
            this.setState({
              loading: false,
              latestNews
            });
          });
      });
  };

  componentDidUpdate = prevProps => {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({
        loading: true
      });
      this.wpApiService
        .getCustomPostBySlug("blog", this.props.match.params.slug)
        .then(({ data: postData }) => {
          this.setState({
            postData
          });
          this.wpApiService
            .getCustomPostCollection("blog", {
              per_page: 2,
              exclude: this.state.postData.id
            })
            .then(({ data: latestNews }) => {
              this.setState({
                loading: false,
                latestNews
              });
            });
        });
    }
  };

  render() {
    const { loading, postData, latestNews } = this.state;
    console.log(this.state);
    return (
      <div id="content">
        {loading ? (
          <Loader
            type="Puff"
            color="#F5842D"
            height={100}
            width={100}
            timeout={0}
            className="Loader"
          />
        ) : (
          <Fragment>
            {/*<SEO*/}
            {/*  pageProps={{*/}
            {/*    title: "Yet another page",*/}
            {/*    thumbnail: "https://picsum.photos/id/52/1200/600",*/}
            {/*    url: "yetanotherawesomeapp.com"*/}
            {/*  }}*/}
            {/*/>*/}
            <section className="singleNews">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <Breadcrumb
                      items={[
                        { name: "Home", slug: "/" },
                        { name: "News", slug: "/news/" },
                        { name: postData.title, slug: `/blog/${postData.slug}` }
                      ]}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <article>
                      <div className="singleNews-imgWrapper">
                        <img src={postData.media.large} alt={postData.title} />
                        {postData.terms.length ? (
                          <ul className="tags-list tags-list--singlePage">
                            {postData.terms.map(tag => {
                              return (
                                <li key={tag.term_id}>
                                  <Link to={`/news/${tag.slug}`}>
                                    {tag.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        ) : null}
                      </div>
                      <p className="singleNews-date">
                        Published on {this.helper.formatDate(postData.date)}
                      </p>
                      <h2 className="singleNews-title">{postData.title}</h2>
                      <div
                        className="singleNews-content"
                        dangerouslySetInnerHTML={{
                          __html: this.helper.deleteEmptyPTags(postData.content)
                        }}
                      />
                      {postData.acf && postData.acf.single_news_gallery ? (
                        <Slider
                          className="slider slider3"
                          customPaging={function(i) {
                            return (
                              <a>
                                <img
                                  src={postData.acf.single_news_gallery[i].url}
                                  alt={postData.acf.single_news_gallery[i].alt}
                                />
                              </a>
                            );
                          }}
                          dots={true}
                          dotsClass="slick-dots slick-thumb"
                          infinite={true}
                          speed={500}
                          slidesToShow={1}
                          slidesToScroll={1}
                        >
                          {postData.acf.single_news_gallery.map(
                            (slide, index) => {
                              return (
                                <div className="slider3-slide" key={index}>
                                  <img src={slide.url} alt={slide.alt} />
                                </div>
                              );
                            }
                          )}
                        </Slider>
                      ) : null}
                      <div className="singleNews-shareBtns">
                        <FacebookShareButton
                          url={
                            window.location.origin +
                            this.props.location.pathname
                          }
                        >
                          <FacebookShareIcon />
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={
                            window.location.origin +
                            this.props.location.pathname
                          }
                        >
                          <TwitterShareIcon />
                        </TwitterShareButton>
                        <LinkedinShareButton
                          url={
                            window.location.origin +
                            this.props.location.pathname
                          }
                        >
                          <LinkedinShareIcon />
                        </LinkedinShareButton>
                        <div>
                          <GooglePlusShareIcon />
                        </div>
                      </div>
                    </article>
                    <section className="otherArticles">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="otherArticles-heading">
                            Other articles
                          </h2>
                        </div>
                      </div>
                      <div className="row otherArticles-list">
                        {latestNews.map(news => {
                          return (
                            <div className="col-md-6" key={news.id}>
                              <NewsCard
                                title={news.title}
                                img={news.media.large}
                                slug={news.slug}
                                date={news.date}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <Link to="/news/" className="btn btn--primary">
                            All news & events
                          </Link>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="col-lg-4">
                    <Sidebar />
                  </div>
                </div>
              </div>
            </section>
            {postData.acf && postData.acf.add_about_us_block && postData.acf.add_about_us_block.length ? (
              <AboutUsBlock
                heading={postData.acf.about_us_block.heading}
                image={postData.acf.about_us_block.image}
                content={postData.acf.about_us_block.content}
                withButton={!!postData.acf.about_us_block.add_contact_us_button.length}
              />
            ) : null}
            {postData.acf && postData.acf.add_seo_block && postData.acf.add_seo_block.length ? (
              <SeoBlock
                heading={postData.acf.seo_block.heading}
                image={postData.acf.seo_block.image}
                content={postData.acf.seo_block.content}
                withButton={!!postData.acf.seo_block.add_contact_us_button.length}
              />
            ) : null}
          </Fragment>
        )}
      </div>
    );
  }
}

export default SingleNews;
