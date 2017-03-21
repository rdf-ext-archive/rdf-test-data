const fs = require('fs')
const path = require('path')
const fetch = require('nodeify-fetch')

function filePath (type, id) {
  let filename = id

  if (type === 'text/turtle') {
    filename = filename + '.ttl'
  }

  if (process.browser) {
    return filename
  } else {
    return path.join(__dirname, '../files', filename)
  }
}

function stream (type, id) {
  if (process.browser) {
    return fetch(filePath(type, id)).then((result) => {
      return result.readable()
    })
  } else {
    return Promise.resolve(fs.createReadStream(filePath(type, id)))
  }
}

module.exports = stream
