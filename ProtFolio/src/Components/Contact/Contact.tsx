import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";



const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e :React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }
    setError("");
    alert("Message Sent!");
  };

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-10">Contact Me</h2>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <label className="block font-medium mb-1">Name</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
              title="Name"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
              title="Email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              rows={4}
              required
              title="Message"
              placeholder="Enter your message"
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full bg-lime-600 text-white py-2 rounded-md hover:bg-lime-700 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Sreeshanth | All Rights Reserved</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/9567641722" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        title="Contact me on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default Contact;
