function test() {
  console.time("start")
  1 + 2
  console.timeEnd("start")
  const chalk = require('chalk')
  console.log(chalk.default.yellow('hi'))
}
test()

