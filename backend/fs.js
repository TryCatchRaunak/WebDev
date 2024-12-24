const fs = require("fs")
// console.log(fs)
console.log("Starting")
// fs.writeFileSync("raunak.txt", "Raunak is a coder")
fs.writeFile("raunak2.txt", "Raunak is an Engineer", () => {
    console.log("Done")
    fs.readFile("raunak2.txt", (error, data) => {
        console.log(error, data)
    })
})

fs.appendFile("raunak.txt", "raunak mishra", (e, d) => {
    console.log(d)
})
console.log("ending")