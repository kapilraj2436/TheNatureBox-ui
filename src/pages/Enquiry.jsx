import { useState } from "react";

export default function Enquiry() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Later: send to backend / email
        console.log("Enquiry Submitted:", formData);

        alert("Thank you! Your enquiry has been sent.");

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

            <button
                type="submit"
                className="w-full bg-green-700 text-white py-4 rounded-xl text-lg hover:bg-green-800 transition"
            >
                Submit Enquiry
            </button>
        </form>
    );
}
