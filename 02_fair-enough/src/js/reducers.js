/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import initialState from './state'
import { getOutput } from './output'
import { SEND_COMMAND, CLEAR_OUTPUT, FETCH_OUTPUT, FETCH_OUTPUT_SUCCESS, FETCH_OUTPUT_FAIL } from './actions'

export function app(state = initialState, action) {
    switch (action.type) {
        case SEND_COMMAND:
            return Object.assign({}, state, {
                command: action.command,
                output: [
                    ...state.output, 
                    action.output
                ]
            })

        case CLEAR_OUTPUT:
            return Object.assign({}, state, {
                command: action.command,
                output: [
                    getOutput(1)
                ]
            })

        case FETCH_OUTPUT:
            return Object.assign({}, state, {
                isFetching: true
            })

        case FETCH_OUTPUT_SUCCESS:
        case FETCH_OUTPUT_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                output: [
                    ...state.output, 
                    action.output
                ]
            })

        default:
            return state
    }
}

