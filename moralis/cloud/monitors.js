/**
 * Before Saving AvaxTransactions
 *
 * Will execute on each new Avalanche (AVAX) transaction.
 */
Moralis.Cloud.afterSave('AvaxTransactions', async (_request) => {
    /* Retrieve confirmed status. */
    const confirmed = _request.object.get('confirmed')

    /* Validate confirmed status. */
    if (confirmed) {
        // do something
    } else {
        // handle unconfirmed case
    }
})

/**
 * Binance Smart Chain Transaction Handler
 *
 * Will execute on each new Binance Smart Chain (BSC) transaction.
 */
Moralis.Cloud.afterSave('BscTransactions', async (request) => {
    /* Set destination (to) address. */
    const to_address = request.object.get('to_address')

    /* Query watched addresses. */
    // const query = new Moralis.Query('WatchedBscAddress', {
    //     useMasterKey: true,
    // })
    const query = new Moralis.Query('WatchedBscAddress')

    /* Set query params. */
    query.equalTo('address', to_address)

    /* Execute DB query. */
    // const results = await query.find({ useMasterKey: true })
    const results = await query.find()

    /* Validate results. */
    if (results) {
        logger.info('----------------')
        logger.info('https://www.bscscan.com/tx/' + request.object.get('hash'))
        logger.info('--🚨 ALERT 🚨--')
    } else {
        logger.info('----------------')
        logger.info('This transaction is NOT part of our network of accounts.')
        logger.info('https://www.bscscan.com/tx/' + request.object.get('hash'))
        logger.info('--🚨 ALERT 🚨--')
    }
})

/**
 * Polygon Transaction Handler
 *
 * Will execute on each new Polygon (MATIC) transaction.
 */
Moralis.Cloud.afterSave('PolygonTransactions', async (_request) => {
    /* Retrieve confirmed status. */
    const confirmed = _request.object.get('confirmed')

    /* Validate confirmed status. */
    if (confirmed) {
        // do something
    } else {
        // handle unconfirmed case
    }
})
