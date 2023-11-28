const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPLugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    port: 3000
  }
}