const withSass = require('@zeit/next-sass');
const sitemap = require('nextjs-sitemap-generator');
const withImages = require('next-images');

module.exports = withImages(withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  }
}));
sitemap({
  baseUrl: 'http://www-staging.softgames.de/',
  pagesDirectory: __dirname + "/pages",
  targetDirectory : 'public/'
});