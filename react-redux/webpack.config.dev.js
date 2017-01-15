var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// info(stylesheets) https://webpack.github.io/docs/stylesheets.html
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// https://gist.github.com/Couto/b29676dd1ab8714a818f
// http://madole.xyz/using-webpack-to-set-up-polyfills-in-your-site/

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
      './entry.js'
    ],
    debug: true,
    stats: {
        colors: true,
        reasons: true,
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
      preLoaders: [
          { // 프리로더에 jslint를 설정한다. (watch모드에서는 동작 안할 수도 있음)
            test: /\.js$/,
            loader: 'eslint',
            exclude: /(node_modules|bower_components)/
          }
        ],
        loaders: [
            { // css로더를 사용하여 번들링한다.
              test: /\.css$/,
              // loader: 'style!css'
              loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // ECMAScript 2015를 사용하기 위한 로더 설정
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /(node_modules|bower_components)/,
              query: {
                presets: ['es2015', 'es2016', 'react']
              }
            }
        ]
    }, // End of Module
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new webpack.ProvidePlugin({
        'Promise': 'es6-promise' // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
        ,'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      }),
      new ExtractTextPlugin("[name].css")
    ],
    devServer: {
      port : 9000,
      contentBase: __dirname + './public', // 브라우저 접근 위치
      inline: true,
      hot: true
    }
};
