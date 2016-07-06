/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

if (PROD) {
    require('babel-polyfill')
}

import './info'
import React from 'react'
import thunk from 'redux-thunk'
import Terminal from './components/terminal'
import createLogger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { storeOutput } from './storage'
import * as reducers from './reducers'

let middleware = [thunk];

if (!PROD) {
    middleware.push(createLogger())
}

let store = createStore(combineReducers(reducers), applyMiddleware(...middleware))

store.subscribe(() => {
    storeOutput(store.getState().app.output)
})

render(
    <Provider store={store}>
        <Terminal />
    </Provider>,
    document.querySelector('terminal')
)
