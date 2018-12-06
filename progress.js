const progressBar = require('progress')

const bar = new progressBar(':bar', {total: 10})

const timer = setInterval(() => {
  bar.tick()
  if(bar.complete) {
    clearInterval(timer)
  }
}, 100)