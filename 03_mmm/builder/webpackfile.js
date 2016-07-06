/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const path = require('path');
const autoprefixer = require('autoprefixer');
const yargs = require('yargs').argv;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cwd = process.cwd();

let style = new ExtractTextPlugin('[name].css');
let nojs = new ExtractTextPlugin('nojs.css');

let config = {
    cwd: cwd,
    entry: {
        'externals': './src/externals.entry.js',
        'custom': './src/custom.entry.js'
    },
    resolve: {
        root: path.join(cwd, './src'),
        extensions: ['', '.js', '.scss']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.js$/,
            include: /foundation-sites/,
            loader: 'babel'
        }, {
            test: /\.css\??(\d*\w*=?\.?)+$/i,
            loader: style.extract([
                'css' + (yargs.prod ? '' : '?sourceMap')
            ])
        }, {
            test: /\.scss$/i,
            exclude: /.*nojs.*/i,
            loader: style.extract([
                'css' + (yargs.prod ? '' : '?sourceMap'),
                'postcss' + (yargs.prod ? '' : '?sourceMap'),
                'sass'
            ])
        }, {
            test: /.*nojs.*\.scss$/i,
            loader: nojs.extract([
                'css' + (yargs.prod ? '' : '?sourceMap'),
                'postcss' + (yargs.prod ? '' : '?sourceMap'),
                'sass'
            ])
        }, {
            test: /\.(ttf|woff2?|eot|svg|otf)\??(\d*\w*=?\.?)+$/i,
            loader: 'file?name=./fonts/[name].[ext]'
        }]
    },
    postcss: () => [],
    sassLoader: {
        outputStyle: yargs.prod ? 'compressed' : 'expanded',
        sourceMap: !yargs.prod
    },
    output: {
        path: path.join(cwd, './public'),
        filename: '[name].js'
    },
    plugins: [
        style,
        nojs,
        new webpack.DefinePlugin({
            PROD: yargs.prod,
            'process.env': {
                'NODE_ENV': yargs.prod ? '"production"' : '"development"'
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('shared', './shared.js'),
    ],
    devtool: yargs.prod ? false : 'source-map',
    watch: yargs.watch
}

if (yargs.prod) {
    config.postcss = () => [
        autoprefixer({
            browsers: ['last 4 versions']
        })
    ]

    config.plugins = [
        ...config.plugins,
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
                source_map: null
            },
            sourceMap: true,
            mangle: false,
            compress: {
                warnings: false,
                dead_code: true
            }
        })
    ]
}

module.exports = config;
