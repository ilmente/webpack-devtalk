/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const key = 'ilmente_com-output'
const storage = !!window && !!window.localStorage ? window.localStorage : {}

export function storeOutput(output) {
    let stringOutput

    try {
        stringOutput = JSON.stringify(output)
    } catch (error) {
        stringOutput = '[]'
    }

    storage[key] = stringOutput
}

export function retrieveOutput() {
    let stringOutput = storage[key], output

    if (!!stringOutput && stringOutput !== '[]') {
        try {
            output = JSON.parse(stringOutput)
        } catch (error) {
            output = null
        }

        return output
    }

    return null
}
