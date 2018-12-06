var fetch = require('node-fetch')

fetch('./test.json')
.catch(err => console.log(err))
.then(res => console.log(res))