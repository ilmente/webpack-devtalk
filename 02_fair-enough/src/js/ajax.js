/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

export default function ajax(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.status)
                }
            }
        }

        xhr.open('GET', url, true)
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()
    })
}
