/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const webpackConfig = require('./builder/webpackfile')

module.exports = config => {
    config.set({
        frameworks: [
            'jasmine'
        ],
        files: [
            'public/shared.js',
            'test/*.js'
        ],
        preprocessors: {
            'test/*.js': ['webpack']
        },
        webpack: webpackConfig,
        reporters: ['spec'],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: false,
        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ]
    })
}
