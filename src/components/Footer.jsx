import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-green-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 py-8 grid gap-4 text-sm">

                <p>© {new Date().getFullYear()} TheNatureBox.com</p>

                <div className="flex flex-wrap gap-6">
                    <Link to="/about">About Us</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                    <Link to="/refund-policy">Refunds</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>

            </div>
        </footer>
    );
}
