const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		"bundle": "./src/index.js",
		"bundle.min": "./src/index.js"
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "build")
	},
	externals: {},
	devtool: "source-map",
	module: {
		rules: [
			{test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, loader: 'url-loader?limit=100000'},			
            {
               test: /\.(scss)$/,
               use: [{
                 loader: 'style-loader', // inject CSS to page
               }, {
                 loader: 'css-loader', // translates CSS into CommonJS modules
               }, {
                 loader: 'postcss-loader', // Run post css actions
                 options: {
                   plugins: function () { // post css plugins, can be exported to postcss.config.js
                     return [
                       require('precss'),
                       require('autoprefixer')
                     ];
                   }
                 }
               }, {
                 loader: 'sass-loader' // compiles Sass to CSS
			 },
           ]
         }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			sourceMap: true,
			compressor: {
				warnings: false
			}
		})
	]

};
