/**
 * Include EXPRESS framework 
 * and body parser
 */
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

/**
 * Enable Middleware
 */
app.use(express.json()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * Show welcome screen
 */
app.get('/', async (req, res) => {
    res.send(`Welcome to Pre-Webhook Demo`);
});

/**
 * Sendbird will call this and send each message
 */
app.post('/pre-webhook', async (req, res) => {

    console.log(req.body);

    if (req.body.payload.message == 'test') {
        // Block message
        res.status(200).json({
            pass: false,
            block_reason: 'Blocking because we are doing a test'
        })
    } else {
        // Approve
        res.status(200).json({
            pass: true
        })
    }
});


app.listen(3001, () => console.log('Pre-Webhook demo is listening on port 3001!'));
