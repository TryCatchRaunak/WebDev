// import http from "http"

// const hostname = "127.0.0.1"
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader("Content-Type", "text/plain")
//     res.end("Hello World\n")
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

//Now if we start using expressJS we do not need to use HTTP package to perform our server related tasks

import express from "express"

const app = express()
const port = 3000


//app.get or app.push or app.put or app.delete
app.get('/', (req, res) => {
    res.send('Hello World! My name is Raunak Mishra')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})