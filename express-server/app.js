// const express = require('express')
// const config = require('config')
// const { startServices } = require('./services/start.services')

import express from 'express'
import config from 'config'

import { startServices } from './services/start.services.js'
// import route from './routes/auth.routes.js'
// import features from './routes/features.routes.js'
import {
  authRoutes,
  employeeRoutes,
  featuresRoutes,
  rootRoutes,
} from './routes/index.js'
import { resolvePath } from './utils/path.util.js'
import { logger, requestTime } from './middlewares/index.js'

const app = express()

/*
 * You can consider to use ejs for adding some dynamic to static pages (like a jsp concept in java).
 * To make it working just add '*.ejs' files by path `app.get('views')`.
 * There are no `ejs` examples, just note.
 */
app.set('view engine', 'ejs')
console.log(app.get('view engine'))
console.log(app.get('views'))
/*
 * If you need change the 'views' path, just specify different path. For example
 *
 * import path from 'path'
 * const __dirname = path.resolve()
 * app.set('views', path.resolve(__dirname, 'templates'))
 *
 * ...
 * res.render('index') //
 */

// add middlewares
app.use(requestTime, logger)

// this concept declares static page location and as result in URI file names can be used for navigation: '/features.html'
app.use(express.static(resolvePath()))

// explain to express how to work with json
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: false }))

// app.use('/', rootRoutes)
app.use('/api/auth', authRoutes)
// duplicates the static concept loading via router
app.use('/features', featuresRoutes)
app.use('/features', employeeRoutes)

// app
startServices()

const PORT = config.get('port') || process.env.PORT || 5000

app.listen(PORT, () => console.log(`App has been started on "${PORT}" port.`))
