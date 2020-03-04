const _domain = "http://www-staging.softgames.de/news";
const _base = `${_domain}/wp-json/better-rest-endpoints/v1`;

const endPoints = {
  news: `${_base}/posts/`,
  positions: "https://softgames.recruitee.com/api/offers/",
};

export default endPoints