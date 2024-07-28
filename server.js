const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.post("/api/send-email", (req, res) => {
  const { phoneNumber } = req.body;

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "carurgpost1@gmail.com",
    subject: "New Phone Number Submission - Quick",
    text: `Phone Number: ${phoneNumber}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: "Email sent: " + info.response });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
