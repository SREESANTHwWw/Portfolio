import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className={`w-full fixed h-24 flex items-center top-0 z-50 shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-300`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.h1 
          className="text-2xl font-extrabold bg-gradient-to-r from-lime-500 to-white bg-clip-text text-transparent"
          whileHover={{ scale: 1.1 }}
        >
          SS
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {["Home", "Skills", "Experience", "Contact", "Hire Me"].map((item, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1, y: -2 }}>
              <Link
                to={`/`}
                className="relative text-lg px-4 py-2 hover:text-lime-600 transition group"
              >
                {item}
                <motion.div
                  className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleDarkMode}
          className="hidden md:block"
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? <Sun size={22} className="text-lime-400" /> : <Moon size={22} className="text-gray-600" />}
        </motion.button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu (Full Screen) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-8 text-2xl md:hidden`}
          >
            {["Home", "Skills", "Experience", "Contact", "Hire Me"].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-blue-500 transition">
                  {item}
                </Link>
              </motion.div>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="py-3 px-6 border rounded-lg mt-6"
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </motion.button>

            {/* Close Button */}
            <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)} title="Close Menu">
              <X size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
