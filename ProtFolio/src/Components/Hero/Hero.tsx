import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import Sr from "../../assets/Sr.png";
const roles = ["Full Stack Developer", "MERN Stack Developer", "Web Enthusiast"];
import cv from "../../assets/SreeshanthM Resume.pdf";
const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  useEffect(() => {
    setText(roles[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-32 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      {/* Left Side - Text */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-lime-600">SREESANTH M</span>
        </h1>
        {/* Typing Effect */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {text}
          <span className="animate-blink">|</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Passionate about building web applications and solving problems.
        </p>

        {/* MERN Stack Logos */}
        <div className="flex justify-center md:justify-start gap-6 mb-6">
          {[
            { icon: SiMongodb, color: "#4DB33D" },
            { icon: SiExpress, color: "#000000" },
            { icon: SiReact, color: "#61DAFB" },
            { icon: SiNodedotjs, color: "#83CD29" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
              whileHover={{
                backgroundColor: tech.color,
                scale: 1.2,
              }}
            >
              <tech.icon className="text-4xl text-gray-700 dark:text-white transition-all" />
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4">
          <motion.a
            href={cv}
            download
            className="px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Resume
          </motion.a>
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            My Projects
          </motion.a>
        </div>
      
      </div>

      {/* Right Side - Flip Card Animation */}
      <motion.div
        className="relative w-72 h-72 md:w-80 md:h-80 perspective-1000"
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <motion.div
          className="w-full h-full relative"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Front Side */}
          <motion.img
            src={Sr}
            alt="Sreesanth M"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          />
          

          {/* Back Side */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-lime-600 text-white flex items-center justify-center text-xl font-bold rounded-lg shadow-lg"
            style={{ backfaceVisibility: "hidden" }}
            animate={{ rotateY: isFlipped ? 0 : 180 }}
          >
            {/* You can add some content here for the back side */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
