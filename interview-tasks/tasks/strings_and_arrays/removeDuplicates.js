function removeDuplicates(input) {
  return Array.from(new Set(input)).join('')
}

module.exports = { removeDuplicates }
