process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
  console.trace()
});
console.log(process.argv)

const args = require('minimist')(process.argv.slice(2))
console.log(args)