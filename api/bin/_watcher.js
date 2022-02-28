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

/* Export module. */
module.exports = watcher
