import Enquiry from "./Enquiry";


export default function Contact() {
    return (
        <div className="w-full">

            {/* ================= HERO ================= */}
            <section className="bg-green-50">
                <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-700 text-lg">
                        We’d love to hear from you. Reach out anytime.
                    </p>
                </div>
            </section>

            {/* ================= CONTACT INFO + ENQUIRY ================= */}
            <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Contact Details */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">
                        <strong>Company:</strong> RML AgriFresh Private Limited
                    </h2>

                    <div className="bg-green-50 border rounded-xl p-5">
                        <p className="mb-4 text-gray-700">
                            📧 <strong>Email:</strong> customer.support@thenaturebox.com
                        </p>
                        <p className="text-gray-800 leading-relaxed">
                            🏠 <strong>Location:</strong> Office-1, The Mira Complex,
                            Nursary Phulwari Road, Madharmau Khurd, Khurdahi,
                            Lucknow (Uttar Pradesh), <br /> Pin Code –<b> 226002 </b>
                            <br />
                            🇮🇳 <strong>India</strong>
                        </p>
                    </div>
                </div>

                {/* Enquiry Form */}
                <Enquiry />

            </section>
        </div>
    );
}
