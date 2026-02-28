import { motion } from "framer-motion";

export default function Team() {

    const cardVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const teamMembers = [
        {
            name: "Mahendra Singh",
            designation: "Director",
            education: "M.Sc. (Ag.), MBA",
            experience: "15 Years",
            image: "/team/mahendra-singh.jpg",
        },
        {
            name: "Bhoopendra Yadav",
            designation: "Director",
            education: "M.Sc. Agriculture (Genetics & Plant Breeding), Agra University",
            experience: "6 Years",
            image: "/team/bhoopendra-yadav.jpg",
        },
        {
            name: "Komal Singh",
            designation: "Director",
            education: "MBA (Finance), Welingkar Institute of Management",
            experience: "5 Years",
            image: "/team/komal-singh.jpg",
        },
    ];

    return (
        <div className="w-full">

            {/* ===== HERO SECTION ===== */}
            <section className="bg-green-50 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Leadership Team
                    </h1>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Meet the visionaries behind The Nature Box, driving quality,
                        authenticity, and trust in every product.
                    </p>
                </div>
            </section>

            {/* ===== TEAM MEMBERS ===== */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {teamMembers.map((member, index) => (
                        <motion.div
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <motion.img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-auto object-contain bg-gray-100"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-1">
                                    {member.name}
                                </h3>

                                <p className="text-green-700 font-medium mb-2">
                                    {member.designation}
                                </p>

                                <p className="text-gray-600 text-sm">
                                    🎓 {member.education}
                                </p>

                                <p className="text-gray-600 text-sm mt-1">
                                    💼 {member.experience} Experience
                                </p>
                            </div>
                        </motion.div>
                    ))};
                </div>
            </section>
        </div>
    );
}