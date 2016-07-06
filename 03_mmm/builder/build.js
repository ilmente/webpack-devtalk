/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

require('colors');
const gutil = require('gutil')
const webpack = require('webpack')
const yargs = require('yargs').argv

let webpackConfig = require(`./webpackfile`)

console.log('[webpack]', `building assets for ${yargs.prod ? 'production' : 'development'}...`.magenta)

webpack(webpackConfig, (error, stats) => {
    if (error) {
        throw new gutil.PluginError('webpack', error)
    }

    let duration = (stats.endTime - stats.startTime) / 1000

    if (yargs.verbose) {
        gutil.log('[webpack]', stats.toString({
            colors: true
        }))
    }

    console.log('[webpack]', 'assets built'.green, `in ${duration} seconds`.magenta)

    if (yargs.watch) {
        console.log('[webpack]', `watching assets...`.yellow)
    }
})
