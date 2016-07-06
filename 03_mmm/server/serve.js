/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

require('colors')
const path = require('path')
const koa = require('koa')
const logger = require('koa-logger')
const route = require('koa-route')
const serve = require('koa-static')
const views = require('co-views')
const pkg = require('../package')
const app = koa()
const render = views(`${__dirname}/views`, {
    map: { html: 'swig' }
})

function* home() {
    this.body = yield render('home')
}

function* details() {
    this.body = yield render('details')
}

app.use(logger())
app.use(serve(path.join(__dirname, `../public`)))
app.use(route.get('/', home))
app.use(route.get('/details', details))

app.listen(pkg.server.port, () => {
    console.log('[server]', `listening on http://localhost:${pkg.server.port}...`.cyan)
})
