/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const path = require('path')
const webpack = require('webpack')
const cwd = process.cwd()

module.exports = {
    cwd: cwd,
    entry: './src/entry.js',
    resolve: {
        root: path.join(cwd, '/src'),
        extensions: ['', '.js', '.scss']
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    },
    output: {
        path: path.join(cwd, '/public'),
        filename: 'output.js'
    },
    devtool: 'source-map',
    watch: true
}
