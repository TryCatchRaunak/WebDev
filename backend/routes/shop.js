const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Shop Router Home Page')
})

router.get('/about', (req, res) => {
    res.send('Shop Router About Page')
})

router.get('/product/:slug', (req, res) => {
    res.send(`Fetch the Product ${req.params.slug}`)
})

module.exports = router