/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const yargs = require('yargs').argv
const cwd = process.cwd()
const style = new ExtractTextPlugin('style.css')

let config = {
    name: 'DEFAULT',
    cwd: cwd,
    entry: {
        'app': './src/default.entry.js'
    },
    resolve: {
        root: path.join(cwd, '/src'),
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: style.extract([
                'css' + (yargs.prod ? '' : '?sourceMap'),
                'sass'
            ])
        }, {
            test: /\.(ttf|woff2?|eot|svg|otf)\??(\d*\w*=?\.?)+$/i,
            loader: 'file?name=./fonts/[name].[ext]'
        }]
    },
    sassLoader: {
        outputStyle: yargs.prod ? 'compressed' : 'expanded',
        sourceMap: !yargs.prod
    },
    output: {
        path: path.join(cwd, '/public'),
        filename: '[name].js'
    },
    plugins: [
        style,
        new webpack.DefinePlugin({
            APP: '"default"',
            PROD: yargs.prod,
            'process.env': {
                'NODE_ENV': yargs.prod ? '"production"' : '"development"'
            }
        }),
        new CopyPlugin([{
            from: './src/img',
            to: './img'
        }, {
            context: './src/fonts',
            from: {
                glob: '*.txt',
                dot: false
            },
            to: './fonts'
        }])
    ],
    devtool: yargs.prod ? false : 'eval-source-map',
    watch: yargs.watch
}

if (yargs.prod) {
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

module.exports = config
