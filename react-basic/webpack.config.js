var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
      './entry.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '',
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
              loader: 'style!css'
            },
            // ECMAScript 2015를 사용하기 위한 로더 설정
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /(node_modules|bower_components)/,
              query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
              }
            }
        ]
    }, // End of Module
    resolve: {
        extensions: ['', '.js', '.jsx', '.coffee']
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compressor: {
          warnings: false,
        },
        output: {
          comments: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(true),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      })
    ]
};
