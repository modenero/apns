const PouchDB = require('pouchdb')
const moment = require('moment')
const superagent = require('superagent')

/* Set database authorization. */
const dbAuth = process.env.DB_AUTH

/* Initialize database. */
// const db = new PouchDB('apns')
const db = new PouchDB(`http://apns:${dbAuth}@localhost:5984/apns`)

/**
 * Ava's Push Notification Service
 */
const apns = async function (req, res) {
    /* Set id. */
    const baseCurrency = req.params.baseCurrency
    const quoteCurrency = req.params.quoteCurrency
    // const symbol = req.query.symbol
    console.log('BASE CURRENCY', baseCurrency)
    console.log('QUOTE CURRENCY', quoteCurrency)

    /* Return quote. */
    res.json({
        hi: 'there'
    })
}

module.exports = apns
