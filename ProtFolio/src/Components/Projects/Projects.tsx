
import { motion } from "framer-motion";
import dilsTrade from "../../assets/DilsTrades.png";
import rettro    from  "../../assets/Rettro.png";

const projects = [
  {
    name: "Dils Trades",
    description: "Dils Trades is a full-featured e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a seamless online shopping experience with user authentication, secure payment options, and robust product management features..",
    link: "https://dils-trades.onrender.com/",
    image: dilsTrade, // Add your project images
  },
  {
    name: "RettroFit",
    description: "Developed a web platform that provides reverse engineering solutions for obsolete, damaged, or unavailable machine parts. The project focuses on redesigning and manufacturing critical components when original manufacturers no longer produce them, solving challenges like missing technical drawings and urgent replacement needs",
    link: "https://rettrofit-fd.onrender.com/",
    image: rettro,
  },
  {
    name: "E-Commerce",
    description: "An e-commerce platform for buying and selling products.",
    link: "",
    image: "/images/portfolio.png",
  },
];

const Projects = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700"
            >
              {/* Project Image */}
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-lime-600 text-white font-medium rounded-lg hover:bg-lime-700 transition"
                >
                  Visit
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
