var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + "/src/client",
    entry: {
        js: "./js/index.js",
        css: "./scss/index.scss"
    },
    output: {
        path: __dirname + "/static/dist",
        filename: "bundle.js",
        publicPath: "/static/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.png$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ]
};
