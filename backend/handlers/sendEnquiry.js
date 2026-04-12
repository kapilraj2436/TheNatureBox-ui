import nodemailer from "nodemailer";

function escapeHtml(value = "") {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function buildHtml({ name, email, phone, message }) {
    return `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone || "N/A")}</p>
        <p><b>Message:</b> ${escapeHtml(message)}</p>
    `;
}

let transporter;

function getTransporter() {
    if (!transporter) {
        transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }

    return transporter;
}

export default async function sendEnquiryHandler(req, res) {
    if (req.method && req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({
            success: false,
            message: "Method not allowed"
        });
    }

    const { name, email, phone, message } = req.body ?? {};

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return res.status(500).json({
            success: false,
            message: "Email service is not configured"
        });
    }

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields"
        });
    }

    try {
        await getTransporter().sendMail({
            from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
            to: "customer.support@thenaturebox.com",
            replyTo: email,
            subject: "New Website Enquiry",
            html: buildHtml({ name, email, phone, message })
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Failed to send enquiry email", error);

        return res.status(500).json({
            success: false,
            message: "Failed to send email"
        });
    }
}
