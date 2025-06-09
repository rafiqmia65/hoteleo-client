import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const features = [
  "Curated hotel listings with verified reviews",
  "Luxury to budget-friendly stays",
  "Instant confirmation & real-time availability",
  "24/7 customer support",
  "Secure, smooth & personalized booking experience",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-white py-16 px-4 md:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-yellow-500">Hoteleo?</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At Hoteleo, we bring you a travel experience crafted with care and style. Whether you're chasing luxury or comfort, we ensure your hotel booking journey is smooth, reliable, and unforgettable.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <FiCheckCircle className="text-yellow-500 mt-1" size={24} />
              <p className="text-gray-700 text-base">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

