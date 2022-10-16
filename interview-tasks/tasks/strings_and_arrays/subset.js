function arraySubset(source, subset) {
  if (source.length < subset.length) {
    return false
  }

  for (let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i])
    if (index === -1) {
      return false
    }
    delete source[index]
  }
  return true
}

module.exports = arraySubset
