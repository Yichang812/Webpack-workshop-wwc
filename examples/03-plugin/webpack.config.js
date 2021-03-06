'use strict';

const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Our configuration
module.exports = {

	// Define the entry point
	entry: path.resolve(__dirname, 'js/index.js'),

	// Output configuration
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
			// Inform about CSS loaders so that it can be bundled too
			{ 
				test: /\.sass$/, 
				use: [
					MiniCssExtractPlugin.loader, // extracts CSS into separate files
					'css-loader', // translates CSS into CommonJS
					'sass-loader' // compiles Sass to CSS, using Node Sass by default
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin()
	],
	
};