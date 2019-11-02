import axios from "axios";

axios.defaults.baseURL = "/wp-json/better-rest-endpoints/v1/";

export default class wpApiService {
  getAllPosts = () => {
    return axios.get(`/posts/`);
  };
  getLatestPosts = (option = {orderby: "date", order: "ASC", per_page: 5}) => {
    const {orderby, order, per_page} = option;
    return axios.get(`/posts/?orderby=${orderby}&order=${order}&per_page=${per_page}`);
  };
  getPostById = id => {
    return axios.get(`/post/${id}`);
  };
  getPostBySlug = slug => {
    return axios.get(`/post/${slug}`);
  };
  getAllPages = () => {
    return axios.get(`/pages/`);
  };
  getPageById = id => {
    return axios.get(`/page/${id}`);
  };
  getPageBySlug = slug => {
    return axios.get(`/page/${slug}`);
  };
  getMenuBySlug = menuSlug => {
    return axios.get(`/menus/${menuSlug}`);
  };
  getCustomPostCollection = postType => {
    return axios.get(`/${postType}/`);
  };
  getCustomPostById = (postType, id) => {
    return axios.get(`/${postType}/${id}/`);
  };
  getCustomPostBySlug = (postType, slug) => {
    return axios.get(`/${postType}/${slug}/`);
  };
  getPostsByTaxonomyTerm = (taxonomy, term) => {
    return axios.get(`/${taxonomy}/${term}/`);
  };
  getAcfOptions = () => {
    return axios.get(`/options/acf/`);
  };
  getAcfOptionByField = field => {
    return axios.get(`/options/acf/${field}`);
  };
}
