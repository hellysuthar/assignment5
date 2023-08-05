module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = require('path').join(__dirname, './');
    return config;
  },
};
