// server.js
const twilio = require('twilio');
const express = require('express');
const app = express();
const port = 3000;

// Twilio credentials
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = twilio(accountSid, authToken);

app.use(express.json());

// Route to send OTP
app.post('/send-otp', (req, res) => {
    const { phoneNumber } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);  // Generate 6-digit OTP

    client.messages.create({
        body: `Your OTP is: ${otp}`,
        from: '+1YourTwilioNumber',  // Replace with your Twilio phone number
        to: phoneNumber  // The phone number to send OTP to
    })
    .then(message => {
        console.log(message.sid);
        res.status(200).send({ otp });  // Send OTP back for demo (in real-world, store OTP securely)
    })
    .catch(error => {
        console.error(error);
        res.status(500).send('Error sending OTP');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
