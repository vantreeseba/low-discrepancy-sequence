const path = require('path');

// Define the Webpack config.
const config = {
  entry: {
    index: [
      './index.js',
    ],
  },
  output: {
    library: ['halton-sequence'],
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js?[chunkhash]',
  },
};

module.exports = config;
