#!/usr/bin/env node

const { ethers } = require('ethers')
const Moralis = require('moralis/node')
const PouchDB = require('pouchdb')

/* Set database authorization. */
const dbAuth = process.env.DB_AUTH

;(async () => {
    // const db = new PouchDB('apns')
    const db = new PouchDB(`http://apns:${dbAuth}@localhost:5984/apns`)

    const val = await db.info()
        .catch(err => console.error(err))
    console.log('DB INFO', val)

})()

/* Set account SID. */
const accountSid = process.env.TWILIO_ACCOUNT_SID

/* Set authorization token. */
const authToken = process.env.TWILIO_AUTH_TOKEN

/* Initialize client. */
const client = require('twilio')(accountSid, authToken)

/* Set server URL. */
const serverUrl = 'https://yfuoyjjd4i0z.usemoralis.com:2053/server'

/* Set application id. */
const appId = '0dtJTXF3zmhSrBBLCJ0LB9UBEfm0X2DGKbwx6Z1I'

/* Moralis init code */
Moralis.start({ serverUrl, appId })

const sendMsg = () => {
    /* Set message. */
    client.messages
        .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+18788812888',
            to: '+14048248743'
        })
        .then(message => console.log(message.sid));
}

const init = async () => {
    let query = new Moralis.Query('Game')
    let subscription = await query.subscribe()

    // console.log('SUBSCRIPTION', subscription);

    subscription.on('open', () => {
        console.log('subscription opened');
    })

    subscription.on('create', (object) => {
        console.log('object created');
    })

    subscription.on('update', (object) => {
        console.log('object updated');
    })

    subscription.on('enter', (object) => {
        console.log('object entered');
    })

    subscription.on('leave', (object) => {
        console.log('object left');
    })

    subscription.on('delete', (object) => {
        console.log('object deleted');
    })

    subscription.on('close', () => {
        console.log('subscription closed');
    })
}

const query = async () => {
    Moralis.LiveQuery.on('open', () => {
        console.log('socket connection established');
    })

    Moralis.LiveQuery.on('close', () => {
        console.log('socket connection closed');
    })

    Moralis.LiveQuery.on('error', (error) => {
        console.log(error);
    })

}

/**
 * Manager
 */
const manager = async () => {
    /* Set node URL. */
    const NODE_URL = 'wss://speedy-nodes-nyc.moralis.io/39f5474b84a2f39277aea60a/avalanche/mainnet/ws'
    // const NODE_URL = 'wss://speedy-nodes-nyc.moralis.io/39f5474b84a2f39277aea60a/avalanche/testnet/ws'

    /* Set provider. */
    const provider = new ethers.providers.WebSocketProvider(NODE_URL)

    /* Set contract address. */
    const contractAddress = ''

    /* Set Brave (Dev) address. */
    const address = '0xE2266286745fEFdDeC42D895abC85a33710a2078'

    /* Set transfer filter. */
    const transferFilter = {
        contractAddress,
        topics: [
            ethers.utils.id('Transfer(address,address,uint256)'),
            ethers.utils.hexZeroPad(address, 32)
        ],
        // fromBlock: 'pending',
    }

    const firehoseFilter = {

    }

    /* Handle transfers. */
    // console.info('\nStarting transfer filter..')
    // provider.on(firehoseFilter, (log, event) => {
    //     console.log('\nEVENT LOG', log)
    // })

    console.info('\nStarting mempool stream..')
    provider.on('pending', async (tx) => {
        /* Set transaction. */
        const transaction = await provider.getTransaction(tx)
        // console.log('TRANSACTION', transaction)

        if (transaction.from === address || transaction.to === address) {
            console.log('\nFOUND YOUR TRANSACTION', transaction)
        }
    })

}

// init()
// query()
manager()

// subscription.unsubscribe()

// Moralis.LiveQuery.close()
