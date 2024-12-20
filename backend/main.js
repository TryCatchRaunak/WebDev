// const http = require('node:http')
// const fs = require('fs')
import http from "http"
import {a, b, c, d, e} from "./mymodule.js"
import obj from "./mymodule.js"
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('Hello World\n')
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(obj)