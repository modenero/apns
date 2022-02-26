const PouchDB = require('pouchdb')
const moment = require('moment')
const superagent = require('superagent')
const { v4: uuidv4 } = require('uuid')

/* Set database authorization. */
const dbAuth = process.env.DB_AUTH

/* Initialize database. */
// const db = new PouchDB('apns')
const apnsDb = new PouchDB(`http://apns:${dbAuth}@localhost:5984/apns`)
const moralisDb = new PouchDB(`http://apns:${dbAuth}@localhost:5984/moralis_apns`)

/**
 * Moralis DAO
 */
const moralis = async function (req, res) {
    let errors = null
    let response = null

    /* Set body. */
    const body = req.body
    console.log('\nBODY', body)

    /* Validate body. */
    if (!body) {
        /* Set status. */
        res.status(400)

        /* Return error. */
        return res.json({
            error: 'Missing message body.'
        })
    }

    /* Enter into (local) Moralis DB. */
    response = await moralisDb.put({
        _id: uuidv4(),
        ...body,
        createdAt: moment().unix(),
    })
    .catch(err => {
        console.error(err)

        /* Set errors. */
        errors = err
    })
    console.log('\nDB RESPONSE', response)

    /* Return quote. */
    res.json({
        success: errors ? null : 'Hi Moralis DAO!',
        errors,
    })
}

module.exports = moralis
