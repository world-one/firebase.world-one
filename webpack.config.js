const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: {
        directory: path.join(__dirname, "public/"), 
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DEV TITLE',
      template: './src/template/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "bundle.[hash].js",
    clean: true
  },
  // plugins: [new webpack.HotModuleReplacementPlugin()]
};