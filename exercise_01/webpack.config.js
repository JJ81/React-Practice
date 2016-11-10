var webpack = require('webpack');
var config = {
	entry:  __dirname + "/app/App.js",
	output: {
		path: __dirname + "/public/",
		filename: "bundle.js"
	},
	// TODO css 및 js를 압축하는 모듈을 추가할 것.
	// TODO Requirejs or commonsjs를 통해서 AMD를 도입하여 필요한 라이브러리만 로딩하여 사용할 수 있도록 하여 클라이언트 부하분산처리를 할 수 있도록 한다
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015','react']
			}
		}]
	},

	devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true
	}
};

module.exports = config;