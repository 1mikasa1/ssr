const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: [
          ['@babel/preset-env'],
          ['@babel/preset-react']
        ]
      }
    }]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
  }
}