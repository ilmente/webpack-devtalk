/**
 *
 * @name: webpack devtalk
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const headerCss = 'font-size: 14px; font-weight: bold; color: #19A260'
const subheaderCss = 'font-size: 12px; font-weight: bold; color: #BA4AEE'
const textCss = 'color: #aaaaaa'
const warnCss = 'color: #DF5E26'
const linkCss = 'text-decoration: underline; color: #37AAE0'

console.log("%cHello, code explorer!", headerCss)
console.log("%cApplication: %s", subheaderCss, APP)
console.log("%cIf you want to actually take a look under the hood, go on github:", textCss)
console.log("%chttps://github.com/ilmente/ilmente", linkCss)
console.info("%cAnyway, you may see some ajax error: don't panic!\nEverytime you'll type a wrong command, server will remind you about it.\n", textCss)

if (!PROD) {
    console.warn("%cYou're in development mode.\nSwitch to production for optimization and best performace.", warnCss)
}
