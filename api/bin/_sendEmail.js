const nodemailer = require('nodemailer')
const path = require('path')

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

/* Export module. */
module.exports = sendEmail
