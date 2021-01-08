/* eslint @typescript-eslint/no-var-requires: 0 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");

const enabledSourceMap = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  // ベンダープレフィックスを自動付与する
                  ["autoprefixer", { grid: true }],
                ],
              },
              sourceMap: enabledSourceMap,
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
              },
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
      {
        test: /CNAME/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]",
            },
          },
        ],
      },
      {
        test: /\.xml$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src", "html", "index.html"),
      title: "WariClo -- ドーナツ型年時計",
      templateParameters: {
        description:
          "WariClo はドーナツ型のアナログ時計とデジタル時計を表示するサイトです。「“いま”って 1 年のうちどのくらいが過ぎた？ 1 月なら？ 1 日なら？ 1 時間なら？ 1 分なら？」というのを視覚的にわかりやすく表示します。WariClo という名前は割合を表示する時計であるところから付けられています。",
      },
    }),

    new StylelintPlugin(),
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

if (enabledSourceMap) {
  module.exports.devtool = "source-map";
}
