import { useEffect, useState } from "react";

export default function Enquiry() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    useEffect(() => {
        if (!status.message) {
            return undefined;
        }

        const timer = window.setTimeout(() => {
            setStatus({ type: "", message: "" });
        }, 2000);

        return () => window.clearTimeout(timer);
    }, [status]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const API_URL = import.meta.env.VITE_API_URL || "";

        try {
            const response = await fetch(`${API_URL}/api/send-enquiry`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({
                    type: "success",
                    message: "Enquiry sent successfully."
                });
            } else {
                setStatus({
                    type: "error",
                    message: "Failed to send enquiry."
                });
            }
        } catch {
            setStatus({
                type: "error",
                message: "Failed to send enquiry."
            });
        }

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
        >
            <h2 className="text-2xl font-bold text-center">
                Send Us an Enquiry
            </h2>

            <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                />
            </div>

            <div
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    status.message
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-1 pointer-events-none h-0 p-0"
                } ${
                    status.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-700 border border-red-200"
                }`}
                aria-live="polite"
            >
                {status.message}
            </div>

            <button
                type="submit"
                className="w-full bg-green-700 text-white py-4 rounded-xl text-lg hover:bg-green-800 transition"
            >
                Submit Enquiry
            </button>
        </form>
    );
}
