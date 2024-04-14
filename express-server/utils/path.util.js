import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// to use static resources
function resolve(fileName, relativePath = '../static') {
  return path.resolve(__dirname, relativePath, fileName)
}

// to use static resources
function resolvePath(relativePath = '../static') {
  return path.resolve(__dirname, relativePath)
}

export { resolvePath, resolve }
