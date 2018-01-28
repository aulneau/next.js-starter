const dev = process.env.NODE_ENV !== 'production';
const gh = process.env.GITHUB_PAGES === 'true';

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    };
  },
  assetPrefix: !dev && gh ? '/next.js-starter/' : '',
};
