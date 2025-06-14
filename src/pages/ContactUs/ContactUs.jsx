import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white pt-30 pb-16 px-4 sm:px-6 lg:px-0">
      <Helmet>
        <title>Hoteleo - Contact Us</title>
      </Helmet>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          className="text-base text-yellow-600 font-semibold tracking-wide uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Contact Us
        </motion.h2>
        <motion.h3
          className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          We'd love to hear from you
        </motion.h3>
      </div>

      <motion.form
        className="max-w-3xl mx-auto grid grid-cols-1 gap-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            className="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            className="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactUs;
