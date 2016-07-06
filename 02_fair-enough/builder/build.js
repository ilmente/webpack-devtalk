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

let version = !!yargs.app ? (yargs.app === true ? 'default' : yargs.app) : 'default'
let webpackConfig = require(`./webpackfile.${version}`)
let start = Date.now()

console.log('[webpack]', `application: ${version}`.magenta.bold)
console.log('[webpack]', `building assets for ${yargs.prod ? 'production' : 'development'}...`.magenta)

webpack(webpackConfig, (error, stats) => {
    if (error) {
        throw new gutil.PluginError('webpack', error)
    }

    if (yargs.verbose) {
        gutil.log('[webpack]', stats.toString({
            colors: true
        }))
    }

    let app = 'DEFAULT'

    if (!!stats.stats) {
        stats.stats.forEach(stat => {
            app = stat.compilation.compiler.name
            let duration = (stat.endTime - stat.startTime) / 1000
            console.log('[webpack]', `[${app}]`, 'assets built'.green, `in ${duration} seconds`.magenta)
        })
    } else {
        app = stats.compilation.compiler.name
        let duration = (stats.endTime - stats.startTime) / 1000
        console.log('[webpack]', `[${app}]`, 'assets built'.green, `in ${duration} seconds`.magenta)
    }

    if (yargs.watch) {
        console.log('[webpack]', `[${app}]`, 'watching assets...'.yellow)
    }
})
