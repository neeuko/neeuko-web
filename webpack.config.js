const Encore = require('@symfony/webpack-encore');

const config = Encore.getWebpackConfig();
config.node = { fs: 'empty' };

module.exports = config;
