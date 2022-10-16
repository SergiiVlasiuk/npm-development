function highestFrequencyWithCollection(array) {
  // return array.reduce((acc, item) => {
  //   acc[item] ? acc[item]++ : acc[item] = 1
  //   return acc
  // }, new Map()).entries().reduce((a, b) => a[1] >= b[1] ? a : b)[0]
  return Object.entries(array.reduce((acc, item) => {
    acc[item] ? acc[item]++ : acc[item] = 1
    return acc
  }, {})).reduce((a, b) => a[1] >= b[1] ? a : b)[0]
}

function highestFrequencyWithLoop(array) {
  const map = {}
  let maxFreq = 0
  let maxFreqStr = array[0]

  for (let i = 0; i < array.length; i++) {
    const current = array[i]

    if (map[current]) {
      map[current]++
    } else {
      map[current] = 1
    }

    if (map[current] > maxFreq) {
      maxFreq = map[current]
      maxFreqStr = current
    }
  }

  return maxFreqStr
}

module.exports = { highestFrequencyWithLoop, highestFrequencyWithCollection }