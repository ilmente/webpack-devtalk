/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import { retrieveOutput } from './storage'
import { getOutput } from './output'

const output = retrieveOutput() || [getOutput(1)];

export default {
    command: null,
    isFetching: false,
    output
}
