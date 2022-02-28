#!/usr/bin/env node

/* Set account SID. */
const accountSid = process.env.TWILIO_ACCOUNT_SID

/* Set authorization token. */
const authToken = process.env.TWILIO_AUTH_TOKEN

const { ethers } = require('ethers')
const Moralis = require('moralis/node')
const PouchDB = require('pouchdb')
const Twilio = require('twilio')(accountSid, authToken)
const { v4: uuidv4 } = require('uuid')

/* Set database authorization. */
const apnsAuth = process.env.APNS_AUTH
const polygonAuth = process.env.POLYGON_AUTH

// const db = new PouchDB('apns')
const apnsDb = new PouchDB(`http://apns:${apnsAuth}@localhost:5984/apns`)
const polygonMainnetDb = new PouchDB(`http://polygon:${polygonAuth}@localhost:5984/polygon_mainnet`)

/* Set server URL. */
const serverUrl = process.env.MORALIS_SERVER_URL

/* Set application id. */
const appId = process.env.MORALIS_APP_ID

/* Set master key. */
const masterKey = process.env.MORALIS_MASTER_KEY

/* Initialize Web3. */
const web3 = new Moralis.Web3()

/* Moralis init code */
Moralis.start({ serverUrl, appId, masterKey })

// const PolygonAcct = '0xBCc532C9c2052f09DF7E8b65Cd2845f55de34ac6' // MetaMask
const PolygonAcct = '0xE2266286745fEFdDeC42D895abC85a33710a2078' // Brave
const AvaSponsorsAcct = '0xDC1C3Eb7AD2a1ABF0CBb1B115B67ddd4cfAe5B66' // HöS
const EventEmitter = '0x7AaCEC83e10D8F8DfDfaa4858d55b0cC29eE4795' // FOR TESTING PURPOSES ONLY


const sendEmail = require('./_sendEmail')

const sendSms = require('./_sendSms')

const init = require('./_init')

const query = require('./_query')

const manager = require('./_manager')

const watcher = require('./_watcher')


sendEmail() // NOTE: This is an async method.
// sendSms() // Use test number
// init()
// query()
// manager()
// watcher()
