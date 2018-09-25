"use strict";

const path = require("path");
const Webpack = require("webpack");

// Our configuration
module.exports = {

	// Define the entry point
	entry: path.resolve(__dirname, "js", "app.js"),

	// Output configuration
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
    },

	// module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: "babel-loader"
    //             }
    //         }
    //     ]
    // }
   
};