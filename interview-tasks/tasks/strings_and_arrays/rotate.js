function isStringRotated(source, test) {
  // if (source.length !== test.length) {
  //   return false
  // }
  //
  // for (let i = 0; i < source.length; i++) {
  //   const rotate = source.slice(i, source.length) + source.slice(0, i)
  //
  //   if (rotate === test) {
  //     return true
  //   }
  // }
  //
  // return false
  return source.length === test.length && (source + source).includes(test)
}

module.exports = { isStringRotated }
