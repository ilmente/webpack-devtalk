/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

export default class Viewer {
    constructor() {
        $('[data-viewer-default]').addClass('__is-shown')
        $('[data-viewer-show]').on('click', this.showHandler)
        $('[data-viewer-reset]').on('click', this.resetHandler)
    }

    showHandler(e) {
        let target = $(e.currentTarget).data('viewer-show')
        let href = $(e.currentTarget).attr('href')

        $('[data-viewer-id].__is-shown').removeClass('__is-shown')
        $('[data-viewer-id="' + target + '"]').addClass('__is-shown')

        return !href
    }

    resetHandler(e) {
        let href = $(e.currentTarget).attr('href')

        $('[data-viewer-id].__is-shown').removeClass('__is-shown')
        $('[data-viewer-default]').addClass('__is-shown')

        return !href
    }
}
