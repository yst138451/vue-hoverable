const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve('./src', 'index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'vue-hoverable.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}