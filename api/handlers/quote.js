const PouchDB = require('pouchdb')
const moment = require('moment')
const superagent = require('superagent')

/* Initialize database. */
const db = new PouchDB('localhost:5984/temp')

/* Set TOP tracked cryptos. */
const TOP_TRACKED = 200

/* Set minutes to (data) refresh. */
const MINS_TO_REFRESH = 5 // 288 per day

/* Initialize cache. */
let cache = {}

/**
 * Ticker Price
 */
const price = async function (req, res) {
    /* Set id. */
    const baseCurrency = req.params.baseCurrency
    const quoteCurrency = req.params.quoteCurrency
    // const symbol = req.query.symbol
    console.log('BASE CURRENCY', baseCurrency)
    console.log('QUOTE CURRENCY', quoteCurrency)

    /* Validate quote currency. */
    if (!quoteCurrency) {
        /* Return error. */
        return res.end(-1)
    }

    /* Initialize id. */
    let id = null

    switch(quoteCurrency.toUpperCase()) {
    case 'BTC':
        id = '1'
        break
    case 'LTC':
        id = '2'
        break
    case 'DOGE':
        id = '74'
        break
    case 'USDT':
        id = '825'
        break
    case 'ETH':
        id = '1027'
        break
    case 'BCH':
        id = '1831'
        break
    case 'BNB':
        id = '1839'
        break
    case 'ADA':
        id = '2010'
        break
    case 'USDC':
        id = '3408'
        break
    case 'LUNA':
        id = '4172'
        break
    case 'DAI':
        id = '4943'
        break
    case 'SOL':
        id = '5426'
        break
    case 'AVAX':
        id = '5805'
        break
    default:
        id = '1'
    }

    /*
    BTC = 1
    LTC = 2
    XRP = 52
    DOGE = 74
    DASH = 131
    XMR = 328
    XLM = 512
    USDT = 825
    ETH = 1027
    NEO = 1376
    EOS = 1765
    BCH = 1831
    BNB = 1839
    ZRX = 1896
    TRX = 1958
    ADA = 2010
    XTZ = 2011
    SAI = 2308
    WETH = 2396
    TUSD = 2563
    0xBTC = 2837
    GUSD = 3306
    PAX = 3330
    USDC = 3408
    ATOM = 3794
    BUSD = 4687
    DAI = 4943
    */

    /* Initialize document. */
    let doc = null

    console.log('\nID is', id)
    console.log('CACHE is', cache[id])

    if (cache[id]) {
        console.log('\n\nREADING FROM CACHE')
        doc = cache[id]
    } else {
        /* Retrieve document. */
        doc = await db.get(id)
            .catch(console.error)

        /* Set cache. */
        cache[id] = doc
    }

    /* Set quote. */
    const quote = doc.quote.USD

    /* Return quote. */
    res.json(quote)
}

/* Setup intervals to maintain the ticker updates. */
console.log('Initializing interval...')
setInterval(() => {
    console.log('\n\nRUNNING INTERVAL')

    /* Reset all cache. */
    cache = {}
}, MINS_TO_REFRESH * 60 * 1000)

module.exports = price
