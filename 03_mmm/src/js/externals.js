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

import 'motion-ui'     
import 'foundation-sites/js/foundation.core'
import 'foundation-sites/js/foundation.util.mediaQuery'

// utils
import 'foundation-sites/js/foundation.util.box'
import 'foundation-sites/js/foundation.util.keyboard'
import 'foundation-sites/js/foundation.util.motion'
import 'foundation-sites/js/foundation.util.nest'
import 'foundation-sites/js/foundation.util.timerAndImageLoader'
import 'foundation-sites/js/foundation.util.touch'
import 'foundation-sites/js/foundation.util.triggers'

// modules
import 'foundation-sites/js/foundation.offcanvas'
import 'foundation-sites/js/foundation.orbit'
          
$(() => {       
    console.log('external code: document ready! :)')

    $(document).foundation()
})
