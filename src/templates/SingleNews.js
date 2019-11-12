import React, { Component, Fragment } from "react";
import WpApiService from "../services/WpApiService";
import axios from "axios";
import Loader from "react-loader-spinner";
import Sidebar from "../partials/Sidebar/Sidebar";
import NewsCard from "../partials/NewsCard/NewsCard";
import {Link} from "react-router-dom";
import Helper from "../services/Helper";
import Breadcrumb from "../partials/Breadcrumb";

class SingleNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      postData: {},
      latestNews: [],
    };

    this.wpApiService = new WpApiService();
    this.helper = new Helper();
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
        ])
        .then(
          axios.spread(
            (
              {data: latestNews},
            ) => {
              this.setState({
                loading: false,
                latestNews,
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
    const {loading, postData, latestNews} = this.state;
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
            <article className="singleNews">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <Breadcrumb
                      items={[
                        { name: "Home", slug: "/" },
                        { name: "News", slug: "/news/" },
                        { name: postData.title, slug: `/blog/${postData.slug}`}
                      ]}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="singleNews-imgWrapper">
                      <img src={postData.media.large} alt={postData.title}/>
                        {postData.terms.length ? (
                          <ul className="tags-list tags-list--singlePage">
                            {postData.terms.map((tag) => {
                              return (
                                <li key={tag.term_id}>
                                  <Link to={`/news/${tag.slug}`}>{tag.name}</Link>
                                </li>
                              )
                            })}
                          </ul>
                        ) : null}
                    </div>
                    <p className="singleNews-date">
                      Published on {this.helper.formatDate(postData.date)}
                    </p>
                    <h2 className="singleNews-title">{postData.title}</h2>
                    <div className="singleNews-content" dangerouslySetInnerHTML={{
                      __html: this.helper.deleteEmptyPTags(postData.content)
                    }}/>
                    <div className="singleNews-shareBtns">
                      <a href="https://www.facebook.com/sharer/sharer.php?u=http://softgames.ein-des-ein.com/blog/softgames-releases-mahjong-story-on-facebook-instant-games-15" target="_blank">
                        Share on Facebook
                      </a>
                    </div>
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
          </Fragment>
        )}
      </div>
    )
  }
}

export default SingleNews;