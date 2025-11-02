import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // A simple promise-based toast for EmailJS
    toast.promise(
      emailjs.sendForm(serviceId, templateId, form.current, publicKey),
      {
        loading: 'Sending message...',
        success: 'Message sent successfully!',
        error: 'Failed to send message.',
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-light-secondary dark:text-dark-secondary">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="mt-1 block w-full px-3 py-2 bg-light-accent dark:bg-dark-accent border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-light-secondary dark:text-dark-secondary">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="mt-1 block w-full px-3 py-2 bg-light-accent dark:bg-dark-accent border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light-secondary dark:text-dark-secondary">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="mt-1 block w-full px-3 py-2 bg-light-accent dark:bg-dark-accent border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-light-primary text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary"
              >
                Send Message
              </button>
            </div>
          </motion.form>
          <div className="mt-12 text-center">
            <p className="text-light-secondary dark:text-dark-secondary mb-4">Or connect with me on:</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/aayushjp/" className="text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/aayush-jp" className="text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                <FaGithub size={28} />
              </a>
              <a href="mailto:imaayushjp@gmail.com" className="text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;