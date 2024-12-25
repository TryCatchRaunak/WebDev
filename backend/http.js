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

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/contact', (req, res) => {
    res.send('Contact Page')
})

app.get('/blog', (req, res) => {
    res.send('Blog!')
})

// app.get('/blog/intro-to-javascript', (req, res) => {
//     res.send('Introduction to Javacript')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     res.send('Introduction to Python')
// })

// app.get('/blog/intro-to-java', (req, res) => {
//     res.send('Introduction to Java')
// })
//But this type of code is not maintainable and scalable and this is one of the other reasons we use ExpressJS

app.get('/blog/:slug', (req, res) => {
    //logic to fetch {slug} from database
    console.log(req.params)//prints { slug: 'intro-to-python' }
    console.log(req.query)//prints { mode: 'dark', region: 'in' }
    res.send(`Blog Post: ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'))//making static files public to be accessed by anyone but this should not be done with main backend code bcz it can be accessed by anyone.
