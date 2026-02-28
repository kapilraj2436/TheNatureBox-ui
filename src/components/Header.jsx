import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-green-900 text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo + Brand */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/logo/logo.png"
                        alt="The Nature Box"
                        className="h-10 w-auto"
                    />
                    <span className="text-lg font-semibold tracking-wide">
                        The Nature Box
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link to="/" className="hover:text-green-300">Home</Link>
                    <Link to="/packing" className="hover:text-green-300">Packing</Link>
                    <Link to="/about" className="hover:text-green-300">About Us</Link>
                    <Link to="/team" className="hover:text-green-300">Our Team</Link>
                    <Link to="/contact" className="hover:text-green-300">Contact Us</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="md:hidden bg-green-900 border-t border-green-800">
                    <nav className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium">
                        <Link onClick={() => setOpen(false)} to="/">Home</Link>
                        <Link onClick={() => setOpen(false)} to="/packing">Packing</Link>
                        <Link onClick={() => setOpen(false)} to="/about">About Us</Link>
                        <Link onClick={() => setOpen(false)} to="/team">Our Team</Link>
                        <Link onClick={() => setOpen(false)} to="/contact">Contact Us</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}