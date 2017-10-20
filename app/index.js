const mount = require('./mount')
const ssr = require('./ssr')
if (typeof document !== 'undefined') {
  mount()
}
module.exports = ssr
