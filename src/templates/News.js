import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import Loader from "react-loader-spinner";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NewsCard from "../partials/NewsCard/NewsCard";
import Sidebar from "../partials/Sidebar/Sidebar";
import Pagination from "../partials/Pagination/Pagination";
import Breadcrumb from "../partials/Breadcrumb";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      newsPageData: {},
      news: [],
      filteredNews: [],
      currentPage: 1,
      newsPerPage: 14
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    this.wpApiService.getPageBySlug("news").then(({ data: newsPageData }) => {
      this.wpApiService
        .getCustomPostCollection("blog", {
          per_page: 100
        })
        .then(({ data: news }) => {
          this.setState({
            loading: false,
            newsPageData,
            news,
            filteredNews: this.props.match.params.tag
              ? this.filterNewsByTag(news, this.props.match.params.tag)
              : news
          });
        });
    });
  };

  filterNewsByTag = (news, tag) => {
    return news.filter(newsItem => {
      if (
        newsItem.terms &&
        newsItem.terms.some(term => {
          return term.slug === tag;
        })
      ) {
        return newsItem;
      }
    });
  };

  paginate = pageNumber => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    this.setState({
      currentPage: pageNumber
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.tag !== this.props.match.params.tag) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
      this.setState({
        filteredNews: this.props.match.params.tag
          ? this.filterNewsByTag(prevState.news, this.props.match.params.tag)
          : prevState.news,
        currentPage: 1
      });
    }
  }

  render() {
    const {
      loading,
      newsPageData,
      filteredNews,
      currentPage,
      newsPerPage,
      tags
    } = this.state;

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

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
            <section className="news">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <Breadcrumb
                      items={[
                        { name: "Home", slug: "/" },
                        { name: "News", slug: "/news/" },
                      ]}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-9 mx-auto">
                    <h1 className="news-heading">Press & Events</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Pagination
                      postsPerPage={newsPerPage}
                      totalPosts={filteredNews.length}
                      paginate={this.paginate}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <TransitionGroup className="row news-list">
                      {currentNews.map(news => {
                        return (
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
                        );
                      })}
                    </TransitionGroup>
                    <div className="row">
                      <div className="col-12">
                        <Pagination
                          postsPerPage={newsPerPage}
                          totalPosts={filteredNews.length}
                          paginate={this.paginate}
                          currentPage={currentPage}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <Sidebar tags={tags} onTagClick={this.onTagClick} />
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        )}
      </div>
    );
  }
}

export default News;
