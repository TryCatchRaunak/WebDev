import fs from "fs/promises"

let a = await fs.writeFile("raunakPromise.txt", "testing promises without async function")
let b = await fs.readFile("raunakPromise.txt")

console.log(b.toString())