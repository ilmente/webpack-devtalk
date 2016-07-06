/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const path = require('path')
const webpack = require('webpack')
const yargs = require('yargs').argv
const cwd = process.cwd()

let shared = {
    cwd: cwd,
    resolve: {
        root: path.join(cwd, '/src'),
        extensions: ['', '.js', '.jsx', '.scss']
    },
    output: {
        path: path.join(cwd, '/public'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            APP: '"multi"',
            PROD: yargs.prod,
            'process.env': {
                'NODE_ENV': yargs.prod ? '"production"' : '"development"'
            }
        })
    ],
    devtool: yargs.prod ? false : 'eval-source-map',
    watch: yargs.watch
}

module.exports = shared
