import {
  FaUtensils,
  FaSwimmingPool,
  FaSpa,
  FaGamepad,
  FaTaxi,
  FaCoffee,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const animationVariants = [
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
    },
    {
      initial: { opacity: 0, x: -30 },
      whileInView: { opacity: 1, x: 0 },
    },
    {
      initial: { opacity: 0, x: 30 },
      whileInView: { opacity: 1, x: 0 },
    },
    {
      initial: { scale: 0.8, opacity: 0 },
      whileInView: { scale: 1, opacity: 1 },
    },
    {
      initial: { rotate: -5, opacity: 0 },
      whileInView: { rotate: 0, opacity: 1 },
    },
    {
      initial: { opacity: 0, y: -30 },
      whileInView: { opacity: 1, y: 0 },
    },
  ];

  const services = [
    {
      id: 1,
      title: "Delicious Food",
      description:
        "Experience culinary excellence at our award-winning restaurants featuring international cuisine and local specialties prepared by our master chefs.",
      icon: <FaUtensils className="text-3xl text-yellow-500" />,
    },
    {
      id: 2,
      title: "Swimming Pool",
      description:
        "Relax in our temperature-controlled infinity pool with stunning views of the city skyline, complete with poolside cocktail service.",
      icon: <FaSwimmingPool className="text-3xl text-yellow-500" />,
    },
    {
      id: 3,
      title: "Spa Salon",
      description:
        "Rejuvenate with our signature treatments using organic products in our 5-star spa facility featuring steam rooms and therapeutic massage.",
      icon: <FaSpa className="text-3xl text-yellow-500" />,
    },
    {
      id: 4,
      title: "Game Room",
      description:
        "Unwind in our gaming lounge featuring billiards, table tennis, and the latest console games - perfect for families and groups.",
      icon: <FaGamepad className="text-3xl text-yellow-500" />,
    },
    {
      id: 5,
      title: "Airport Taxi",
      description:
        "Enjoy hassle-free arrivals with our premium chauffeur service available 24/7 in luxury vehicles with meet-and-greet service.",
      icon: <FaTaxi className="text-3xl text-yellow-500" />,
    },
    {
      id: 6,
      title: "Breakfast",
      description:
        "Start your day with our extensive breakfast spread featuring fresh pastries, made-to-order omelets, and premium coffee selections.",
      icon: <FaCoffee className="text-3xl text-yellow-500" />,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="text-center mb-12">
          <motion.h2
            className="text-base font-semibold text-yellow-600 tracking-wide uppercase"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Our Services
          </motion.h2>
          <motion.h3
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            What We Offer For You
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              initial={
                animationVariants[index % animationVariants.length].initial
              }
              whileInView={
                animationVariants[index % animationVariants.length].whileInView
              }
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h4>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
