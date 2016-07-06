/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

function createOutput(code, text, type) {
    return {
        text: `<span class="output-code output-code-${code} output-code-${type}">[${code}]</span> ${text}`,
        timestamp: Date.now(),
        type,
        code
    }
}

export function getOutput(code = 500, text = 'OK') {
    switch (code) {
        case 0:
            return createOutput(code, 'Seems like we have a connection problem...', 'error')

        case 1:
            return createOutput(code, 'Shell ready :)', 'init')

        case 2:
            return createOutput(code, text, 'command')

        case 200:
            return createOutput(code, text, 'success')

        case 404:
            return createOutput(code, 'Command not found: maybe a typo?', 'warning')

        default:
            return createOutput(code, 'Something went wrong: wtf are you trying to do?', 'error')
    }
}
