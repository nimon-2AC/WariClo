/* eslint @typescript-eslint/no-var-requires: 0 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src", "html", "index.html"),
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
      ignored: /node_modules/,
      poll: 1000,
    },
  },
};
