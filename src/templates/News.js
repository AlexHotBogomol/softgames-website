import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import Loader from "react-loader-spinner";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NewsCard from "../partials/NewsCard/NewsCard";
import Sidebar from "../partials/Sidebar/Sidebar";
import Pagination from "../partials/Pagination/Pagination";
import Breadcrumb from "../partials/Breadcrumb";
import AboutUsBlock from "../partials/AboutUsBlock";
import SeoBlock from "../partials/SeoBlock";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      pageData: {},
      news: [],
      filteredNews: [],
      currentPage: 1,
      newsPerPage: 14
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    this.wpApiService.getPageBySlug("news").then(({ data: pageData }) => {
      this.wpApiService
        .getCustomPostCollection("blog", {
          per_page: 100
        })
        .then(({ data: news }) => {
          this.setState({
            loading: false,
            pageData,
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
      pageData,
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
                <div className="row mb-4">
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
                    <Sidebar />
                  </div>
                </div>
              </div>
            </section>
            {pageData.acf && pageData.acf.add_about_us_block && pageData.acf.add_about_us_block.length ? (
              <AboutUsBlock
                heading={pageData.acf.about_us_block.heading}
                image={pageData.acf.about_us_block.image}
                content={pageData.acf.about_us_block.content}
                withButton={!!pageData.acf.about_us_block.add_contact_us_button.length}
              />
            ) : null}
            {pageData.acf && pageData.acf.add_seo_block && pageData.acf.add_seo_block.length ? (
              <SeoBlock
                heading={pageData.acf.seo_block.heading}
                image={pageData.acf.seo_block.image}
                content={pageData.acf.seo_block.content}
                withButton={!!pageData.acf.seo_block.add_contact_us_button.length}
              />
            ) : null}
          </Fragment>
        )}
      </div>
    );
  }
}

export default News;
