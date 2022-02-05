const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()


// /api/auth/register
// curl -d '{"email":"your-email", "password":"your-password"}' -H "Content-Type: application/json" -X POST 'http://localhost:5000/api/auth/register'
router.post('/register',
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Minimal length of password must be 6 characters').isLength({ min: 6 }),
    check('password', 'Please change password place holder').not().equals('your-password'),
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Please, correct your registration data'
      })
    }
    try {
      const { email, password } = req.body
      const candidate = await User.findOne({ email })

      if (candidate) {
        return res.status(400).json({ message: 'This user already exists' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, password: hashedPassword })

      await user.save()

      res.status(201).json({ message: 'User registered successfully' })
    } catch (e) {
      res.status(500).json({ message: 'Server error. Please, try again later.' })
    }
  })

// /api/auth/login
// curl -d '{"email":"your-email", "password":"your-password"}' -H "Content-Type: application/json" -X POST 'http://localhost:5000/api/auth/login'
router.post('/login',
  [
    check('email', 'Please enter correct email').normalizeEmail().isEmail(),
    check('password', 'Password can\'t be empty').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect credentials'
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })
      const isMatch = await bcrypt.compare(password, user.password)

      if (!user || !isMatch) {
        return res.status(400).json({ message: 'Incorrect credentials' })
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )

      res.json({ token, userId: user.id })

    } catch (e) {
      res.status(500).json({ message: 'Server error. Please, try again later.' })
    }
  })

module.exports = router
