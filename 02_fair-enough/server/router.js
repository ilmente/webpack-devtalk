/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const path = require('path')
const route = require('koa-route')
const serve = require('koa-static')
const views = require('co-views')
const yargs = require('yargs').argv
const commands = require('./commands')
const render = views(`${__dirname}/views`, {
    map: { html: 'swig' }
})

function* error(next) {
    try {
        yield next
    } catch (error) {
        this.status = error.status || 500
        this.body = this.status
        this.app.emit('error', error, this)
    }
}

function* home() {
    this.body = yield render('home')
}

function* run(command) {
    if (!commands[command]) {
        console.log('[server]', `${command} command not found`.red)
        this.throw('command not found', 404)
    }

    console.log('[server]', `${command} command found`.green)

    switch (command) {
        case 'help':
            this.body = yield render('help', {commands})
            break

        default: 
            this.body = yield render(command)
    }
}

module.exports = {
    error: error,
    public: serve(path.join(__dirname, `../public`)),
    home: route.get('/', home),
    run: route.get('/command/:cmd', run)
}
