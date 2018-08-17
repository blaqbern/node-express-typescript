const path = require('path')

function root(...args) {
  return path.resolve(__dirname, '..', ...args)
}

exports.root = root
