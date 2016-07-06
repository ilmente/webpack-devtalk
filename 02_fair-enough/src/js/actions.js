/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import ajax from './ajax'
import { getOutput } from './output'

export const SEND_COMMAND = 'SEND_COMMAND'
export const CLEAR_OUTPUT = 'CLEAR_OUTPUT'
export const FETCH_OUTPUT = 'FETCH_OUTPUT'
export const FETCH_OUTPUT_SUCCESS = 'FETCH_OUTPUT_SUCCESS'
export const FETCH_OUTPUT_FAIL = 'FETCH_OUTPUT_FAIL'

// creators

export function sendCommand(command, output) {
    return {
        type: SEND_COMMAND,
        command,
        output
    }
}

export function clearOutput(command) {
    return {
        type: CLEAR_OUTPUT,
        command
    }
}


export function fetchOutput() {
    return {
        type: FETCH_OUTPUT
    }
}

export function fetchOutputSuccess(output) {
    return {
        type: FETCH_OUTPUT_SUCCESS,
        output
    }
}

export function fetchOutputFail(output) {
    return {
        type: FETCH_OUTPUT_FAIL,
        output
    }
}

// async

export function run(command) {
    return (dispatch, getState) => {
        let state = getState();

        if (getState().app.isFetching) {
            return Promise.resolve()
        }

        if (command.toLowerCase() === 'clear') {
            return dispatch(clearOutput())
        }

        dispatch(sendCommand(command, getOutput(2, command)))
        dispatch(fetchOutput())

        return ajax(`/command/${command}`).then(
            output => dispatch(fetchOutputSuccess(getOutput(200, output))),
            code => dispatch(fetchOutputFail(getOutput(code)))
        )
    }
}
