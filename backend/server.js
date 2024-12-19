console.log("Hello World!");

var slugify = require('slugify')

let a = slugify('some string') // => some-string
console.log(a)

//function of slugify
let b = slugify('some st&&*#*&@%#@)ring', '_') // => some_string
console.log(b)

//if we prefer something other than '-' as separator
let c = slugify('some string', '_') // => some_string
console.log(c)