import { Router } from 'express'
import { getAll, create, remove } from '../controllers/employees.js'

const router = Router()

router.get('', getAll)
router.get('', create)
router.get(':id', remove)

export default router
