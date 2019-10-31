export default class wpApiService{
  _apiBase = '/wp-json/wp/v2';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json();
  };

  getAllPages = async () => {
    const res = await this.getResource(`/pages/`);
    return res;
  };
}