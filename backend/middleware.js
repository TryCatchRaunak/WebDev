const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const blog = require('./routes/blog.js')
const shop = require('./routes/shop.js')

app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop', shop)

//middleware1
const myLogger1 = function (req, res, next) {
    // console.log('m1')
    console.log(req.headers)
    req.raunak = 50
    fs.appendFileSync('logs.txt', `${Date.now()} is a ${req.method}\n`)//adds output to logs.txt
    console.log(`${Date.now()} is a ${req.method}`)//Sample output - 1735216723201 is a GET
    // res.send('Hacked by Middleware 1')
    next()
}
app.use(myLogger1)

//middleware2
const myLogger2 = function (req, res, next) {
    console.log('m2')
    next()
}
app.use(myLogger2)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello About!' + req.raunak)
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})