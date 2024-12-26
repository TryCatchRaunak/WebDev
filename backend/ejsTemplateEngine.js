const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use('/' , (req, res) => {
    let sitename = 'OverClap Solutions'
    let searchText = 'See'
    // res.sendFile('templates/templates.html', {root: __dirname})
    let arr = [1, 54, 66]
    res.render('templates', {siteName: sitename, searchText: searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = 'OverClap Solutions - The heavy techy solutions'
    let blogContent = 'It is a very good company'
    //res.sendFile('templates/blogPost.html', {root: __dirname})//But we cannot afford to have a different html file for each blog that's why we have a solution
    res.render('blogPost', {title: blogTitle, content: blogContent})
})

app.listen(3000, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})