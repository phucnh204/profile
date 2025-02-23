"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import MyProject from "./components/MyProject";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import InfoButton from "./components/InfoButton";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <NavBar
          // setActiveSection={setActiveSection}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </motion.div>

      {/* Hiệu ứng slide-down cho Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HomePage isDarkMode={isDarkMode} />
      </motion.div>

      {/* Hiệu ứng fade-in cho About */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <About isDarkMode={isDarkMode} />
      </motion.div>

      {/* Hiệu ứng slide-in từ trái cho MyProject */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <MyProject isDarkMode={isDarkMode} />
      </motion.div>

      {/* Hiệu ứng slide-in từ phải cho Contact */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Contact isDarkMode={isDarkMode} />
      </motion.div>

      <InfoButton/>
    </div>
  );
}
