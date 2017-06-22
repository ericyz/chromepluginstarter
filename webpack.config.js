let webpack = require('webpack');
let path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'index': './src/inject/index.js',
        'popup': './src/plugin/popup.js'
    },
    target: 'web',
    output: {
        path: __dirname + '/plugin/dist/.',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, include: path.join(__dirname, 'src'), loader: 'eslint-loader', enforce: 'pre' },
            { test: /\.jsx?$/, exclude: /node_modules/, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
            { test: /\.css$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};