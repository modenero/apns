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

/* Export module. */
module.exports = sendSms
