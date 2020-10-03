const http = require('http')
const two = require('./static-app')

const staticPort = process.env.PORT || 5000

const staticServer = http.createServer(two)

staticServer.listen(staticPort)
