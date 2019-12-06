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
  baseUrl: 'https://softgames-next.zakablukov777.now.sh',
  pagesDirectory: __dirname + "/pages",
  targetDirectory : 'public/'
});