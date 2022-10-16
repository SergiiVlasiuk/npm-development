function allAnagrams(array) {
  const sorted = array.map(str => str.split('').sort().join(''))

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0]) {
      return false
    }
  }
  return true
}

module.exports = allAnagrams
