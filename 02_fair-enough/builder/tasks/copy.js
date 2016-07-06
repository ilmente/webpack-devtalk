/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const shared = require('./shared')

let copy = Object.assign({}, shared, {
    name: 'COPY',
    plugins: [
        ...shared.plugins,
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
    ]
})

module.exports = copy
