/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const path = require('path')
const webpack = require('webpack')
const shared = require('./shared')
const yargs = require('yargs').argv
const cwd = process.cwd()

let js = Object.assign({}, shared, {
    name: 'JS',
    entry: {
        'app': './src/multi.entry.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }]
    }
})

if (yargs.prod) {
    js.plugins = [
        ...shared.plugins,
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

module.exports = js
