/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import React, { PropTypes } from 'react';
import Promt from './promt';
import Output from './output';

const Terminal = () => (
    <div className="terminal">
        <Output />
        <Promt />
    </div>
)

export default Terminal;
