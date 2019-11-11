import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import axios from "axios";
import Loader from "react-loader-spinner";
import Footer from "../partials/Footer/Footer";
import Sidebar from "../partials/Sidebar/Sidebar";
import NewsCard from "../partials/NewsCard/NewsCard";
import {Link} from "react-router-dom";

class SingleNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      postData: {},
      latestNews: [],
      acfOptions: {},
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    this.wpApiService.getCustomPostBySlug('blog', this.props.match.params.slug).then((response) => {
      this.setState({
        postData: response.data
      });
      axios
        .all([
          this.wpApiService.getCustomPostCollection("blog", {
            per_page: 2,
            exclude: this.state.postData.id
          }),
          this.wpApiService.getAcfOptions(),
        ])
        .then(
          axios.spread(
            (
              {data: latestNews},
              {data: acfOptions},
            ) => {
              this.setState({
                loading: false,
                latestNews,
                acfOptions,
              });
            }
          )
        );
    });
  };

  componentDidUpdate = (prevProps) => {
    if(prevProps.match.params.slug !== this.props.match.params.slug){
      this.setState({
        loading: true
      });
      this.wpApiService.getCustomPostBySlug('blog', this.props.match.params.slug).then(({data: postData}) => {
        this.setState({
          postData
        });
        this.wpApiService.getCustomPostCollection("blog", {
          per_page: 2,
          exclude: this.state.postData.id
        }).then(({data: latestNews}) => {
          this.setState({
            loading: false,
            latestNews
          });
        })
      })
    }
  };

  render() {
    const {loading, postData, latestNews, acfOptions} = this.state;
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
            <article className="singleNews">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="breadcrumb">Home/ News/ {postData.title}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="singleNews-imgWrapper">
                      <img src={postData.media.large} alt={postData.title}/>
                    </div>
                    <h2 className="singleNews-title">{postData.title}</h2>
                    <div className="singleNews-content" dangerouslySetInnerHTML={{
                      __html: postData.content
                    }}/>
                    <section className="otherArticles">
                        <div className="row">
                          <div className="col-12">
                            <h2 className="otherArticles-heading">
                              Other articles
                            </h2>
                          </div>
                        </div>
                        <div className="row otherArticles-list">
                          {latestNews.map((news) => {
                            return(
                              <div className="col-md-6" key={news.id}>
                                <NewsCard
                                  title={news.title}
                                  img={news.media.large}
                                  slug={news.slug}
                                  date={news.date}
                                />
                              </div>
                            )
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
                    <Sidebar/>
                  </div>
                </div>
              </div>
            </article>
            <Footer joinUsOptions={acfOptions.join_us} />
          </Fragment>
        )}
      </div>
    )
  }
}

export default SingleNews;