
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiJest, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "Jest", icon: <SiJest className="text-red-500" /> },
  { name: "Git", icon: <FaGit className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-900 dark:text-white" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
];

const Skills = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ rotate: 360 }} // Rotation effect on click
              className="w-20 h-20 flex justify-center items-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-300 dark:border-gray-700 cursor-pointer transition-transform"
            >
              <div className="text-4xl">{skill.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
