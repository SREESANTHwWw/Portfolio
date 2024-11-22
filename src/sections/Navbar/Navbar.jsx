import React, { useState } from "react";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <div
      className={`w-screen h-20 flex items-center justify-between px-6 md:px-12 shadow-md ${
        theme === "light" ? "bg-white" : "dark"
      }`}
    >
      {/* Logo */}
      <span
        className={`text-2xl md:text-3xl font-bold font-mono ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        SS
      </span>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:w-[40%] justify-around items-center">
        {["Home", "Skills", "Experience", "Contact Me"].map((item) => (
          <span
            key={item}
            className={`text-sm md:text-base font-semibold cursor-pointer ${
              theme === "light" ? "text-black hover:text-gray-500" : "text-white hover:text-gray-300"
            }`}
          >
            {item}
          </span>
        ))}
        <button className="w-24 h-10 bg-gradient-to-r from-zinc-800 to-zinc-800 rounded-md font-mono font-semibold text-white hover:bg-zinc-800 hover:scale-105 transition-transform duration-300">
          Hire Me
        </button>
      </div>

      {/* Theme Toggle */}
      <img
        src={themeIcon}
        alt="Toggle theme"
        className="w-6 h-6 cursor-pointer"
        onClick={toggleTheme}
      />

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden ${theme === "light" ? "text-black" : "text-white"} text-2xl`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-20 left-0 w-full flex flex-col items-center space-y-4 py-4 shadow-md md:hidden ${
            theme === "light" ? "bg-white" : "dark"
          }`}
        >
          {["Home", "Skills", "Experience", "Contact Me"].map((item) => (
            <span
              key={item}
              className={`text-sm font-semibold cursor-pointer ${
                theme === "light" ? "text-black hover:text-gray-500" : "text-white hover:text-gray-300"
              }`}
            >
              {item}
            </span>
          ))}
          <button className="w-24 h-10 bg-gradient-to-r from-zinc-800 to-zinc-800 rounded-md font-mono font-semibold text-white hover:bg-zinc-800 hover:scale-105 transition-transform duration-300">
            Hire Me
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
