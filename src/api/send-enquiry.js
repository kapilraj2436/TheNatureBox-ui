import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message, phone } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
            to: "customer.support@thenaturebox.com",
            subject: "New Enquiry from Website",
            html: `
        <h2>New Customer Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
        });

        res.status(200).json({ success: true });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Email failed" });
    }
}