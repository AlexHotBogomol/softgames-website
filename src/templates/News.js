import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import axios from "axios";
import Loader from "react-loader-spinner";
import Header from "../partials/Header/Header";
import Footer from "../partials/Footer/Footer";
import NewsCard from "../partials/NewsCard/NewsCard";
import Sidebar from "../partials/Sidebar/Sidebar";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      newsPageData: {},
      news: [],
      acfOptions: {},
      headerMenuItems: []
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    axios
      .all([
        this.wpApiService.getPageBySlug("news"),
        this.wpApiService.getCustomPostCollection("blog", {
          per_page: 14
        }),
        this.wpApiService.getAcfOptions(),
        this.wpApiService.getMenuBySlug("header-menu"),
      ])
      .then(
        axios.spread(
          (
            {data: newsPageData},
            {data: news},
            {data: acfOptions},
            {data: headerMenuItems},
          ) => {
            this.setState({
              loading: false,
              newsPageData,
              news,
              acfOptions,
              headerMenuItems,
            });
          }
        )
      );
  };

  render() {
    const {loading, newsPageData, news, acfOptions, headerMenuItems} = this.state;
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
            <Header menuItems={headerMenuItems}/>
            <section className="news">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="breadcrumb">Home/ News</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-9 mx-auto">
                    <h1 className="news-heading">Press & Events</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      {news.map((news)=>{
                        return(
                          <div className="col-md-6" key={news.id}>
                            <NewsCard
                              id={news.id}
                              title={news.title}
                              img={news.media.large}
                              slug={news.slug}
                              date={news.date}
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <Sidebar/>
                  </div>
                </div>
              </div>
            </section>
            <Footer joinUsOptions={acfOptions.join_us} />
          </Fragment>
        )}
      </div>
    )
  }
}

export default News;