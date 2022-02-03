'use strict'

/* Require modules. */
const express = require('express')

/* Set constants. */
const HOST = '0.0.0.0'
const PORT = 3000
// const PORT = 8080

/* Initialize application. */
const app = express()

/* Initialize JSON parser. */
app.use(express.json())

/* Initialize URL parser. */
app.use(express.urlencoded({ extended: true }))

/* Configure application. */
app.use(function (req, res, next) {
    /* Initialize headers. */
    res.header('Access-Control-Allow-Origin', '*')

    /* Move to next process. */
    next()
})

// TODO: Replace with a "static" site.
app.get('/', (req, res) => {
    res.end('<h1>Welcome to the APNS: Avalanche Push Notification Service API</h1>')
})

/* Start listening for connections. */
app.listen(PORT, HOST)

/* Display current environment variables. */
console.info()
console.log(`Running on http://${HOST}:${PORT}`)
console.info()
console.info('Current Environment Variables')
console.info('-----------------------------')
console.info('  - NODE_ENV       :', process.env.NODE_ENV)
console.info('  - TWILIO_API_KEY :', process.env.TWILIO_API_KEY)
console.info()
