import axios from "axios";

axios.defaults.baseURL = "/wp-json/better-rest-endpoints/v1/";

export default class wpApiService {
  getAllPosts = () => {
    return axios.get(`/posts/`);
  };
  getLatestPosts = (customOptions) => {
    const defaultOptions = {
      orderby: "date",
      order: "DESC",
      per_page: 5
    };
    const options = Object.assign(defaultOptions, customOptions);
    const {orderby, order, per_page} = options;
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
  getCustomPostCollection = (postType, customOptions) => {
    const defaultOptions = {
      orderby: "date",
      order: "DESC",
      per_page: 5,
      exclude: 0,
    };
    const options = Object.assign(defaultOptions, customOptions);
    const {orderby, order, exclude, per_page} = options;
    return axios.get(`/${postType}/?orderby=${orderby}&order=${order}&per_page=${per_page}&exclude=${exclude}`);
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
