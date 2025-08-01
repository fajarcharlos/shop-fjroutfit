import React from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
import { useEffect } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  return (
    <div className="relative py-4 ">
      <CiLight
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-7 h-7 cursor-pointer drop-shadow transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />

      <MdDarkMode
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-7 h-7 cursor-pointer drop-shadow transition-all duration-300  ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default Darkmode;
