import { Router } from 'express'
import { resolve } from '../utils/path.util.js'

const router = Router()

// static page routing
router.get('', (req, res) => {
  res.sendFile(resolve('features.html'))
})

export default router
