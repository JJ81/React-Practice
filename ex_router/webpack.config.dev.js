/**
  ref 1. http://d2.naver.com/helloworld/0239818
  ref 2. https://hyunseob.github.io/2016/04/03/webpack-practical-guide/
  ref 3. https://firejune.com/1798/%EC%B4%88%EB%B3%B4%EC%9E%90%EC%9A%A9+Webpack+%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC+%ED%8C%8C%ED%8A%B81+-+Webpack+%EC%9E%85%EB%AC%B8
  ref 4. https://medium.com/@jimkimau/%EC%9B%B9%ED%8C%A9-webpack-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-4d477aa6e58c#.6gfr4ctts

  < 장점 >
  프론트엔드에서 npm을 사용할 수 있다.
  하나의 파일로 js파일을 번들할 수 있다.
  ES6,7 문법을 사용할 수 있다.
  LESS/SCSS 문법을 사용할 수 있다.
  HMR(Hot Module Replacement)를 사용할 수 있다. (코드가 저장될 때마다 리프레시)
  ...

  webpack-dev-server webpack.config.js --progress --color -p
*/

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
      './entry.js'
    ],
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
              loader: 'style!css'
            },
            // ECMAScript 2015를 사용하기 위한 로더 설정
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /(node_modules|bower_components)/,
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    }, // End of Module
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ],
    devServer: {
      port : 9000,
      contentBase: __dirname + './public', // 브라우저 접근 위치
      inline: true,
      hot: true
    }
};
