const port = 9009
    , bodyParser = require('body-parser')
    , express = require('express')
    , server = express()
    , allowCors = require('./cors')
    , queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, () => {
    console.log(`Backend Port: ${port}.`)
})

module.exports = server