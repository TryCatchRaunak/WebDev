import express from "express"
import path from "path"

const app = express()
const port = 3000

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     console.log("Hey it is a get request")
//     res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//     console.log("Hey it is a post request")
//     res.send('Hello World Post!')
// })

// app.put('/', (req, res) => {
//     console.log("Hey it is a put request")
//     res.send('Hello World Put!')
// })

// app.delete('/', (req, res) => {
//     console.log("Hey it is a delete request")
//     res.send('Hello World Delete!')
// })


//Chaining
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


app.get('/index', (req,res) => {
    console.log("Hey it's index")
    // res.send('Hello Index')
    //res.sendFile('templates/index.html', {root: __dirname})//This is followed when we use '__dirname' and change type to 'module' in package.json
    res.sendFile(path.resolve('templates/index.html'))//This is followed when we use 'path' package
})

app.get('/api', (req, res) => {
    res.json({"a": 1, "b": 2, "c": 3, "d": 4})
})
app.listen(port, () =>{
    console.log(`Server listening at http://localhost:${port}`)
})