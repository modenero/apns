/* Import modules. */
const moment = require('moment')
const superagent = require('superagent')

/**
 * Feed Module
 */
const feed = async function (req, res) {
    // console.log('REQ', req);

    const body = req.body
    // console.log('BODY', body)

    // return res.json({
    //     hi: 'there',
    // })
    const result = await superagent
        .post('https://speedy-nodes-nyc.moralis.io/39f5474b84a2f39277aea60a/polygon/mainnet')
        .send(body)
        .set('Accept', 'application/json')
        .catch(err => console.error(err))
    // console.log('RESULT', result)

    /* Validate result body. */
    if (result && result.body) {
        return res.json(result.body)
    } else if (result && result._body) {
        return res.json(result._body)
    } else if (result && result.text) {
        try {
            return res.json(JSON.parse(result.text))
        } catch (err) {
            return res.json(err)
        }
    }

    /* Catch all error. */
    res.json({
        error: 'All is lost!',
    })
}

/* Export module. */
module.exports = feed
