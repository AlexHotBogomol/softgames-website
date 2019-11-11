import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import axios from "axios";
import Loader from "react-loader-spinner";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from "../partials/Header/Header";
import Footer from "../partials/Footer/Footer";
import NewsCard from "../partials/NewsCard/NewsCard";
import Sidebar from "../partials/Sidebar/Sidebar";
import Pagination from "../partials/Pagination/Pagination";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      newsPageData: {},
      news: [],
      currentPage: 1,
      newsPerPage: 14,
      acfOptions: {},
      headerMenuItems: [],
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    axios
      .all([
        this.wpApiService.getPageBySlug("news"),
        this.wpApiService.getCustomPostCollection("blog", {
          per_page: 100,
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

  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    });
  };

  onTagClick = (slug) => {
    console.log(slug);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.currentPage !== this.state.currentPage){
      window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }
  }

  render() {
    const {loading, newsPageData, news, acfOptions, headerMenuItems, currentPage, newsPerPage, tags} = this.state;

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

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
                  <div className="col-12">
                    <Pagination postsPerPage={newsPerPage} totalPosts={news.length} paginate={this.paginate} currentPage={currentPage}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <TransitionGroup className="row news-list">
                      {currentNews.map((news)=>{
                        return(
                          <CSSTransition
                            appear={true}
                            key={news.id}
                            timeout={300}
                            classNames="fade"
                            unmountOnExit={true}
                          >
                            <div className="col-md-6">
                              <NewsCard
                                id={news.id}
                                title={news.title}
                                img={news.media.large}
                                slug={news.slug}
                                date={news.date}
                              />
                            </div>
                          </CSSTransition>
                        )
                      })}
                    </TransitionGroup>
                    <div className="row">
                      <div className="col-12">
                        <Pagination postsPerPage={newsPerPage} totalPosts={news.length} paginate={this.paginate} currentPage={currentPage}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <Sidebar tags={tags} onTagClick={this.onTagClick}/>
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