function rotate(source) {
  const newMatrix = source[0].map(() => [])
  console.info('[rotateMatrix] newMatrix: ', newMatrix)

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[0].length; j++) {
      newMatrix[j][source.length - 1 - i] = source[i][j]
    }
  }

  return newMatrix
}

function rotate180(source) {
  return rotate(rotate(source))
}

function rotate270(source) {
  return rotate180(rotate(source))
}

module.exports = { rotate, rotate180, rotate270 }
