/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import Loader from './loader'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

function getHtml(text) {
    return {
        __html: text
    }
}

function getClassName(output){
    return `line output-text output-text-${output.code} output-text-${output.type}`
}

const Output = ({ output }) => (
    <div className="output">
        {output.map(out => 
            <div className={getClassName(out)} key={out.timestamp} dangerouslySetInnerHTML={getHtml(out.text)}></div>
        )}
        <Loader />
    </div>
)

export default connect(
    state => ({
        output: state.app.output
    }),
    null
)(Output);
