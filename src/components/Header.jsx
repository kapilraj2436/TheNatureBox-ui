import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-green-900 text-white">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <img
                        src="logo/logo.png"
                        alt="The Nature Box"
                        className="h-10 w-auto"
                    />
                    <span className="text-lg font-semibold tracking-wide">
                        <Link to="/" className="text-lg font-bold">
                            The Nature Box
                        </Link>
                    </span>
                </div>
                {/* Brand */}


                {/* Navigation */}
                <nav className="flex gap-6 text-sm font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/packing">Packing</Link>
                    <Link to="/about" className="hover:text-green-300">
                        About Us
                    </Link>
                    <Link to="/contact" className="hover:text-green-300">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
}
