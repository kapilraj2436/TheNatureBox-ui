import dotenv from "dotenv";
import sendEnquiryHandler from "../backend/handlers/sendEnquiry.js";

dotenv.config();

export default async function handler(req, res) {
    return sendEnquiryHandler(req, res);
}
