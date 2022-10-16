function flattenByRecursion(array) {
  const res = []

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flattenByRecursion(array[i])
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j])
      }
    } else {
      res.push(array[i])
    }
  }

  return res
}

function flattenByInnerCollection(array) {
  return array.flatMap(item => Array.isArray(item) ? flattenByInnerCollection(item) : item)
}

module.exports = { flattenByRecursion, flattenByInnerCollection }
