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

/* Export module. */
module.exports = manager
