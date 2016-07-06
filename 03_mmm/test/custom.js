/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import $ from 'jquery'
import Viewer from 'js/custom/viewer'

describe('custom files', () => {
    describe('dependency check', () => {
        it('jquery', () => expect($).toBeTruthy())
        it('Viewer', () => expect(Viewer).toBeTruthy())
    })

    describe('check class instances', () => {
        let viewer = new Viewer()
        it('Viewer', () => expect(viewer).toBeTruthy())
    })
})
