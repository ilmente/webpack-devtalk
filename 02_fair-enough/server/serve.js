/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

require('colors');
const koa = require('koa')
const logger = require('koa-logger')
const yargs = require('yargs').argv
const pkg = require('../package.json')
const wait = require('./wait')
const router = require('./router')
const app = koa()

if (!yargs.prod) {
    app.use(logger())
}

if (yargs.wait) {
    app.use(wait(yargs.wait))
    console.log('[server]', `response delayed of ${yargs.wait / 1000} seconds`.yellow)
}

app.use(router.error)
app.use(router.public)
app.use(router.home)
app.use(router.run)

app.listen(pkg.server.port, () => {
    console.log('[server]', `listening on http://localhost:${pkg.server.port}...`.cyan)
})
