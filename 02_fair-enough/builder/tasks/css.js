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
const yargs = require('yargs').argv
const shared = require('./shared')
const cwd = process.cwd()

let style = new ExtractTextPlugin('[name].css')

let css = Object.assign({}, shared, {
    name: 'SCSS',
    entry: {
        'style': './src/scss/main.scss'
    },
    module: {
        loaders: [{
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
    plugins: [
        ...shared.plugins,
        style
    ]
})

module.exports = css
