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

/* Export module. */
module.exports = init
