/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

function wait(ms) {
    return function*(next) {
        return new Promise((resolve, reject) => setTimeout(() => resolve(), ms)).then(yield next)
    }
}

module.exports = wait
