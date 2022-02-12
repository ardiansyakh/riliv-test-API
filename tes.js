const fs = require('fs')
const seed = JSON.parse(fs.readFileSync('./utils/admin.json', null, 2))

console.log(seed);