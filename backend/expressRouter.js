// import express from 'express'
// import blog from './routes/blog.js'
const express = require('express')
const blog = require('./routes/blog.js')
const shop = require('./routes/shop.js')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey it is a get request")
    res.send('Hello World!')
}).post('/', (req, res) => {
    console.log("Hey it is a post request")
    res.send('Hello World Post!')
}).put('/', (req, res) => {
    console.log("Hey it is a put request")
    res.send('Hello World Put!')
}).delete('/', (req, res) => {
    console.log("Hey it is a delete request")
    res.send('Hello World Delete!')
})

app.listen(port, () =>{
    console.log(`Server listening at http://localhost:${port}`)
})