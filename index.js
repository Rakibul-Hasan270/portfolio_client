const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;
const EMAIL_USER = process.env.EMAIL_USER || "rakibx270@gmail.com";

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL_USER,
        pass: process.env.APP_PASSWORD,
    },
});

// API health/status endpoint
app.get("/", async (req, res) => {
    res.status(200).json({ message: "deploy success", status: "online" });
});

// API endpoint to send email
app.post("/send-email", async (req, res) => {
    const { from_name, from_email, message } = req.body || {};

    if (!from_name || !from_email || !message) {
        return res.status(400).json({ error: "All fields (from_name, from_email, message) are required." });
    }

    if (!process.env.APP_PASSWORD) {
        // console.error("APP_PASSWORD environment variable is not configured.");
        return res.status(500).json({ error: "Email service is not configured properly on the server." });
    }

    const mailOptions = {
        from: EMAIL_USER,
        to: EMAIL_USER,
        subject: `Message from ${from_name}`,
        text: `senderName: ${from_name} || senderEmail: ${from_email} || senderMessage: ${message}`,
        replyTo: from_email,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        // console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
});

// Start server locally when run directly; on Vercel, the exported app is handled serverlessly
if (require.main === module) {
    app.listen(PORT, () => {
        // console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;