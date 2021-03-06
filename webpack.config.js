var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        excude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ],
  }
};
