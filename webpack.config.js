const path = require('path');

// Define the Webpack config.
const config = {
  entry: {
    index: [
      './index.js',
    ],
  },
  output: {
    library: ['lowDiscrepancySequence'],
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js?[chunkhash]',
  },
};

module.exports = config;
