var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: "./app/temp/scripts",
		filename: "App.js"
	},

	//Babel loader
	module: {
		loaders: [
			{
				loader: 'babel',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}