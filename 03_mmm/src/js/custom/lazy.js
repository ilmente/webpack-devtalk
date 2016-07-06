/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

export default class Lazy {
    constructor() {
        console.log('waking up...')
        setTimeout(() => console.log("I'm lazy and I know it!"), 2000)

        window.lazy = 'Here I am!'
    }
}
