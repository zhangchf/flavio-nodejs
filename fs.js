const fs = require('fs')
const path = require('path')

const folderPath = './'

fs.readdirSync(folderPath).map(fileName => {
  console.log(path.join(folderPath, fileName))    
})