// import express from "express"
const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Router Home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('Router About Blog')
})
// define the BlogPost route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`Fetch the Blog Post ${req.params.slug}`)
})

module.exports = router