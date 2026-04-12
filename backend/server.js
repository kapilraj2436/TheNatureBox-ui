import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import sendEnquiryHandler from "./handlers/sendEnquiry.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.resolve(__dirname, "../frontend/dist");

app.use(express.json());

/* Rate limiter */
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // limit each IP to 20 requests per window
    message: {
        success: false,
        message: "Too many enquiries. Please try again later."
    }
});

/* Apply limiter only to enquiry endpoint */
app.use("/api/send-enquiry", limiter);

/* Route */
app.post("/api/send-enquiry", sendEnquiryHandler);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(frontendDistPath));

    app.get("/{*path}", (_req, res) => {
        res.sendFile(path.join(frontendDistPath, "index.html"));
    });
}

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
