import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <div className="bg-primary pt-30 pb-16 px-4 sm:px-6 lg:px-0">
      <Helmet>
        <title>Hoteleo - Contact Us</title>
      </Helmet>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          className="text-base text-accent font-semibold tracking-wide uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Contact Us
        </motion.h2>
        <motion.h3
          className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          We'd love to hear from you
        </motion.h3>
      </div>

      <motion.form
        className="max-w-3xl bg-secondary shadow-2xl p-6 rounded-2xl mx-auto grid grid-cols-1 gap-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-accent"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Name"
            required
            className="mt-1 p-3 block w-full shadow-sm border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-accent"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Email"
            required
            className="mt-1 p-3 block w-full shadow-sm border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-accent"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
            className="mt-1 p-3 block w-full shadow-sm border  rounded-md focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-accent"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Message"
            required
            className="mt-1 p-3 block w-full shadow-sm border  rounded-md focus:ring-yellow-500 focus:border-yellow-500"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-accent hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactUs;
