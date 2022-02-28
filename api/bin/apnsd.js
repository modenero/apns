#!/usr/bin/env node

/* Set account SID. */
const accountSid = process.env.TWILIO_ACCOUNT_SID

/* Set authorization token. */
const authToken = process.env.TWILIO_AUTH_TOKEN

const { ethers } = require('ethers')
const Moralis = require('moralis/node')
const nodemailer = require('nodemailer')
const path = require('path')
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
 * Send Email
 */
const sendEmail = async () => {
    /* Create reusable transporter object. */
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        // dkim: {
        //     domainName: 'apns.io',
        //     keySelector: '2017',
        //     privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...'
        // },
    })

    const platform = `Trader Joe`

    const from = `"${platform} via APNS" <no-reply@apns.io>`

    /* Set (message) recipient(s). */
    // NOTE: Separate multiple recipients with a (,) comma.
    const to = process.env.SMTP_TEST_ADDR

    /* Set (message) subject. */
    const subject = `Your collateral has dropped to 30%`

    /* Set (message) plain text. */
    const text = `Why are you looking at this??`

    /* Set (message) HTML text. */
    const html =
`
<header style="width: 500px;">
    <div style="margin-top: 15px;">
        <img src="cid:apns-logo-embedded-1646028141" style="float: right; width: 60px; height: 60px;" />

        <span style="font-size: 1.4em; font-weight: bold;">
            Ava's Push Notification Service
        </span>
    </div>

    <div style="margin-top: 5px;">
        <a href="https://apns.io" style="font-size: 1.1em; font-weight: bold; text-decoration: none;">
            https://apns.io
        </a>
    </div>
</header>

<main style="width: 500px; margin-top: 5px;">
    <div style="padding: 15px;">
        <p style="">
            Something very important just happened.
            You need to take care of it right away!!
        </p>
    </div>

    <div style="display: flex; justify-content: center;">
        <a href="https://apns.io/r/aBc123" style="display: block; width: 250px; padding: 15px; text-decoration: none; border: 2pt solid #9999CC; border-radius: 10px; background-color: #CCCCFF; text-align: center;">
            <span style="color: #FFFFFF; font-size: 1.6em; font-weight: bold;">
                Launch App
            </span>
        </a>
    </div>
</main>

<footer style=" width: 500px; margin-top: 50px; padding-top: 15px; border-top: 2pt solid #999999;">
    <div style="font-style: bold;">
        <span style="display: block;">
            brought to you with ❤️ from APNS DAO
        </span>

        <div style="display: flex; width: 300px; justify-content: space-around; align-items: center;">
            <a href="https://apns.io/" style="text-decoration: none;">
                Home
            </a>

            <span style="color: #999999; font-size: 1.2em;">
                |
            </span>

            <a href="https://apns.io/$APNS" style="text-decoration: none;">
                $APNS
            </a>

            <span style="color: #999999; font-size: 1.2em;">
                |
            </span>

            <a href="https://apns.io/gov" style="text-decoration: none;">
                Gov
            </a>

            <span style="color: #999999; font-size: 1.2em;">
                |
            </span>

            <a href="https://docs.apns.io/" style="text-decoration: none;">
                Docs
            </a>
        </div>
    </p>

    <div style="color: #999999;">
        <span style="display: block; font-weight: bold; font-size: 0.8em;">
            Disclaimer:
        </span>

        <p style="margin-top: 5px; font-size: 0.7em;">
            Qui expetendis imitarentur. Sunt eiusmod te relinqueret ad aliquip non legam,
            quem praetermissum possumus quis incididunt iis incididunt cillum officia.
            Cupidatat anim est doctrina praesentibus, enim proident hic dolore aliqua ita ad
            labore ab tamen ita sed sint consequat tractavissent, quorum quibusdam si
        </p>
    </div>
</footer>
`

    /* Set "embedded" logo path. */
    // const logoPath = path.join(__dirname, '/logo-embedded.png')
    const logoPath = path.join(__dirname, '../../src/assets/logo-256.png')
    // console.log('LOGO PATH', logoPath)

    /* Set "embedded" (message) attachments. */
    const attachments = [
        {
            filename: 'logo.png',
            path: logoPath,
            cid: 'apns-logo-embedded-1646028141',
        }
    ]

    /* Send mail with defined transport object. */
    let info = await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
        attachments,
    })
    .catch(err => console.error(err))

    /* Validate info. */
    if (info) {
        console.log('Message sent: %s', info.messageId)
    }

    return
}


/**
 * Send SMS
 */
const sendSms = async (_destination) => {
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

;(async () => {
    sendEmail()

})()
// sendSms() // Use test number
// init()
// query()
// manager()
// watcher()

// subscription.unsubscribe()

// Moralis.LiveQuery.close()
