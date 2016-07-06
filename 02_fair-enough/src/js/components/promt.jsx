/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { run } from '../actions'

const Promt = ({ isFetching, onSubmit }) => {
    let text, input, cursor

    return (
        <div className="promt">
            <form autoComplete="off" onSubmit={e => {
                !!e && e.preventDefault()
                if (isFetching || !input.value.trim()) return
                onSubmit(input.value)
                input.value = ''
            }}>
                <label htmlFor="promt-input" className="line promt-arrow">&rarr;</label>
                <input type="text" id="promt-input" className="promt-input" autoFocus ref={node => { input = node }} />
            </form>
        </div>
    )
}

export default connect(
    state => ({
        isFetching: state.app.isFetching
    }),
    dispatch => ({
        onSubmit: (command) => {
            dispatch(run(command))
        }
    })
)(Promt);
