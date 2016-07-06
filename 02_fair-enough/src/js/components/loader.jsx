/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Loader = ({ isFetching }) => (
    <p>
        {isFetching ? 'Loading...' : ''}
    </p>
)

export default connect(
    state => ({
        isFetching: state.app.isFetching
    }),
    null
)(Loader);
