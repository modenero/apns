#!/usr/bin/env node

const { ethers } = require('ethers')
const Moralis = require('moralis/node')
const PouchDB = require('pouchdb')
// const { v4: uuidv4 } = require('uuid')

/* Set database authorization. */
const apnsAuth = process.env.APNS_AUTH
const polygonAuth = process.env.POLYGON_AUTH

// const db = new PouchDB('apns')
const apnsDb = new PouchDB(`http://apns:${apnsAuth}@localhost:5984/apns`)
const polygonMainnetDb = new PouchDB(`http://polygon:${polygonAuth}@localhost:5984/polygon_mainnet`)

/* Set account SID. */
const accountSid = process.env.TWILIO_ACCOUNT_SID

/* Set authorization token. */
const authToken = process.env.TWILIO_AUTH_TOKEN

/* Initialize client. */
const client = require('twilio')(accountSid, authToken)

/* Set server URL. */
const serverUrl = 'https://sdxoimq5qr9a.usemoralis.com:2053/server'

/* Set application id. */
const appId = 'pzls6wPNQQtaVnMjubFYnnIWjcghkYfRW1Ytgot1'

/* Set master key. */
const masterKey = 'oO4LJwOOewl8nY8sTL4CgDU7KVPFzGid7itc8LoF'

/* Initialize Web3. */
const web3 = new Moralis.Web3()

/* Moralis init code */
Moralis.start({ serverUrl, appId, masterKey })

// const PolygonAcct = '0xBCc532C9c2052f09DF7E8b65Cd2845f55de34ac6' // MetaMask
const PolygonAcct = '0xE2266286745fEFdDeC42D895abC85a33710a2078' // Brave
const AvalancheSponsor = '0xDC1C3Eb7AD2a1ABF0CBb1B115B67ddd4cfAe5B66'
const EventEmitter = '0x7AaCEC83e10D8F8DfDfaa4858d55b0cC29eE4795' // FOR TESTING PURPOSES ONLY

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
    // let query = new Moralis.Query('APNS')
    // let subscription = await query.subscribe()

    /* Initialize Polygon transactions query. */
    const query = new Moralis.Query('MaticTransactions')

    /* Set query address. */
    query.equalTo('to_address', PolygonAcct)

    /* Subscribe for real-time updates. */
    const subscription = await query.subscribe()

    /* Set subscriptions handler. */
    subscription.on('create', function(data) {
        console.log('CREATED', data)

        const amountEth = web3.utils.fromWei(data.attributes.value)
        console.log(`${amountEth} deposited to Polygon`)
    })

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

        const pkg = {
            _id: transaction.hash,
            ...transaction,
        }

        const results = await polygonMainnetDb.put(pkg)
            .catch(err => console.error('LOGS ERROR:', err))
        console.log('RESULTS', results)

        // if (transaction.from === address || transaction.to === address) {
        //     console.log('\nFOUND YOUR TRANSACTION', transaction)
        // }
    })

}

const watcher = async () => {
    // const type = 'watchAvaxAddress' // Avalanche
    // const type = 'watchBscAddress' // Binance Smart Chain
    const type = 'watchEthAddress' // Ethereum
    // const type = 'watchFtmAddress' // Fantom
    // const type = 'watchPolygonAddress' // Polygon

    const result = await Moralis.Cloud
        .run(type, {
            // address: AvalancheSponsor,
            address: EventEmitter,
            // address: PolygonAcct,
        }, {
            useMasterKey: true,
        })
        .catch(err => console.error(err))
    // const result = await Moralis.Cloud
    //     .run('watchEthAddress', {
    //         address: PolygonAcct,
    //         syncHistorical: false,
    //         useMasterKey: true,
    //     })
    //     .catch(err => console.error(err))
    console.log('RESULT (watchXxxAddress):', result)
}

// init()
// query()
// manager()
watcher()

// subscription.unsubscribe()

// Moralis.LiveQuery.close()
