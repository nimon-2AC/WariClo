const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
      title: "clock",
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "src"),
    host: "0.0.0.0",
    hot: true,
    port: 3001,
    watchContentBase: true,
    watchOptions: {
      ignored: "./node_modules/",
      poll: 1000
    }
  }
};
