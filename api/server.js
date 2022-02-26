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
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT')
    res.header('Access-Control-Allow-Headers', 'content-type') // superagent bug fix

    /* Move to next process. */
    next()
})

/* Build welcome message. */
const welcome = `
<html>
<body>

<h2>APNS: Ava's Push Notification Service API</h2>
<h3>https://api.apns.io</h3>

</body>
</html>
`

// TODO: Replace with a "static" site.
app.get('/', (req, res) => {
    res.end(welcome)
})

/* Initialize Account routes. */
app.get('/v1/accounts', require('./routes/accounts'))

/* Initialize Polygon routes. */
app.post('/v1/polygon/mainnet', require('./routes/relay'))

/* Initialize External (3rd-party) routes. */
app.post('/v1/ext/moralis', require('./routes/ext/moralis'))


/* Start listening for connections. */
app.listen(PORT, HOST)

/* Display current environment variables. */
console.info()
console.log(`Running on http://${HOST}:${PORT}`)
console.info()
console.info('Current Environment Variables')
console.info('-----------------------------')
console.info('  - NODE_ENV           :', process.env.NODE_ENV)
console.info('  - DB_AUTH            :', process.env.DB_AUTH)
console.info('  - TWILIO_ACCOUNT_SID :', process.env.TWILIO_ACCOUNT_SID)
console.info('  - TWILIO_AUTH_TOKEN  :', process.env.TWILIO_AUTH_TOKEN)
console.info()
