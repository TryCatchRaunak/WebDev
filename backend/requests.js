import express from "express"

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log("Hey it is a get request")
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log("Hey it is a post request")
    res.send('Hello World Post!')
})

app.put('/', (req, res) => {
    console.log("Hey it is a put request")
    res.send('Hello World Put!')
})

app.delete('/', (req, res) => {
    console.log("Hey it is a delete request")
    res.send('Hello World Delete!')
})

app.listen(port, () =>{
    console.log(`Server listening at http://localhost:${port}`)
})