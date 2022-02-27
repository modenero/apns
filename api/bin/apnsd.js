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


/**
 * Send Message
 */
const sendMsg = async (_destination) => {
    /* Random String */
    const _randomString = (length) => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let result = ''
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
        return result
    }

    /* Initialize to. */
    let to = null

    /* Validate destination. */
    if (!_destination) {
        to = process.env.TWILIO_TEST_NUM
    }

    /* Validate to. */
    if (!to) {
        throw new Error('You MUST provide a destination number.')
    }

    /* Set activity. */
    const activity = `Trader Joe collateral has dropped to 30%`

    /* Set referral ID. */
    // TODO: Pull (generated) value from DB.
    const referralid = _randomString(6)

    /* Set URL. */
    // TODO: Verify "auto-linking" w/out (https://) prefix.
    const url = `apns.io/r/${referralid}`

    /* Create message. */
    const response = await Twilio.messages
        .create({
            body: `APNS | ${activity} | ${url}`,
            from: '+18788812888',
            to,
        })
        .catch(err => console.error(err))
    console.log('RESPONSE (sid):', response.sid);
}


/**
 * Initialization
 */
const init = async () => {
    // let query = new Moralis.Query('APNS')
    // let subscription = await query.subscribe()

    /* Initialize Polygon transactions query. */
    const query = new Moralis.Query('AvaxTransactions')

    /* Set (address) constraint. */
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


/**
 * Query
 */
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


/**
 * (Address) Watcher
 */
const watcher = async () => {
    // const type = 'watchAvaxAddress' // Avalanche
    // const type = 'watchBscAddress' // Binance Smart Chain
    const type = 'watchEthAddress' // Ethereum
    // const type = 'watchFtmAddress' // Fantom
    // const type = 'watchPolygonAddress' // Polygon

    const result = await Moralis.Cloud
        .run(type, {
            // address: AvaSponsorsAcct,
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

sendMsg() // Use test number
// init()
// query()
// manager()
// watcher()

// subscription.unsubscribe()

// Moralis.LiveQuery.close()
