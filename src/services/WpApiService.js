import axios from "axios";

export default class wpApiService {
  constructor(){
    this._base = "/wp-json/wp/v2";
    this._braBase = "/wp-json/better-rest-endpoints/v1";
  }

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
    return axios.get(`${this._braBase}/posts/?orderby=${orderby}&order=${order}&per_page=${per_page}`);
  };
  getPostById = id => {
    return axios.get(`${this._braBase}/post/${id}`);
  };
  getPostBySlug = slug => {
    return axios.get(`${this._braBase}/post/${slug}`);
  };
  getAllPages = () => {
    return axios.get(`${this._braBase}/pages/`);
  };
  getPageById = id => {
    return axios.get(`${this._braBase}/page/${id}`);
  };
  getPageBySlug = slug => {
    return axios.get(`${this._braBase}/page/${slug}`);
  };
  getMenuBySlug = menuSlug => {
    return axios.get(`${this._braBase}/menus/${menuSlug}`);
  };
  getCustomPostCollection = (postType, customOptions) => {
    const defaultOptions = {
      orderby: "date",
      order: "DESC",
      per_page: 5,
      exclude: 0,
      page: 1,
    };
    const options = Object.assign(defaultOptions, customOptions);
    const {orderby, order, exclude, per_page, page} = options;
    return axios.get(`${this._braBase}/${postType}/?orderby=${orderby}&order=${order}&per_page=${per_page}&exclude=${exclude}&page=${page}`);
  };
  getCustomPostById = (postType, id) => {
    return axios.get(`${this._braBase}/${postType}/${id}/`);
  };
  getCustomPostBySlug = (postType, slug) => {
    return axios.get(`${this._braBase}/${postType}/${slug}/`);
  };
  getPostsByTaxonomyTerm = (taxonomy, term) => {
    return axios.get(`${this._braBase}/${taxonomy}/${term}/`);
  };
  getTaxonomies = () => {
    return axios.get(`${this._braBase}/taxonomies/`);
  };
  getAcfOptions = () => {
    return axios.get(`${this._braBase}/options/acf/`);
  };
  getAcfOptionByField = field => {
    return axios.get(`${this._braBase}/options/acf/${field}`);
  };
  getAllTags = (tagType) => {
    return axios.get(`${this._base}/${tagType}?per_page=100`);
  };
}
