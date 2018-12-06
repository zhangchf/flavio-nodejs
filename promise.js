var promise = (result) => {
  if (result) {
    return Promise.resolve('TRUE')
  } else {
    return Promise.reject('FALSE')
  }
}

var printVal = val => console.log(val)

promise(0).then(printVal).catch(printVal)
promise(1).then(printVal).catch(printVal)

