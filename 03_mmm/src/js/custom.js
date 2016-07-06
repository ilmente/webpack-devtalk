/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import Viewer from 'js/custom/viewer'

$(() => {
    console.log('custom code: document ready! :)')

    new Viewer()

    if ($('#details').length > 0){
        require.ensure(['js/custom/lazy'], require => {
            let Lazy = require('js/custom/lazy')
            new Lazy.default()
        })
    }
})
