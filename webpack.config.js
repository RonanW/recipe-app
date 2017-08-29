var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./client/js/client.js",
	module: {
		loaders: [
		    {test: /\.css$/, loader: 'style-loader!css-loader'},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
				} 
			},
		]
	},
	output: {
    	path: __dirname + "/public/",
    	filename: 'app.min.js',
	},
	devServer: {
		historyApiFallback: true,
		contentBase: 'public',
		port: 8080,
		proxy: {
			'/api': {
				target: {
					host: "0.0.0.0",
					protocol: 'http:',
					port: 3000
				},
			}
		}
  	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
};