function isUniqueBasedOnRegExp(str) {
  return !/(.).*\1/g.test(str)
}

function isUniqueBasedOnLastIndexChecking(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false
    }
  }
  return true
}

function isUniqueBasedOnSet(str) {
  return new Set(str).size === str.length
}

module.exports = { isUniqueBasedOnSet, isUniqueBasedOnRegExp, isUniqueBasedOnLastIndexChecking }
