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

/* Export module. */
module.exports = query
