/**
 * Avalanche Watcher
 *
 * Will add a new Avalanche (AVAX) address to be monitored
 * by the Moralis network.
 */
Moralis.Cloud.define('watchAvaxAddress', async (request) => {
    /* Initialize Moralis logger. */
    const logger = Moralis.Cloud.getLogger()

    /* Set address. */
    const address = request.params.address

    /* Validate address. */
    if (!address) {
        logger.info(`Oops! You MUST provide an address.`)

        return null
    }

    //Check address is not already being watched
    const countQuery = new Moralis.Query('WatchedAvaxAddress')

    countQuery.equalTo('address', address)

    const watchCount = await countQuery.count()

    if (watchCount > 0) {
        return null
    }

    /* Add address to watch list. */
    Moralis.Cloud.run('watchedAvaxAddress', {
        address,
        syncHistorical: false,
        useMasterKey: true,
    })

    return true
})
