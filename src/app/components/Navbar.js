'use client';
import Image from "next/image";
import logo from "public/Frame 80.png";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-12 py-4 flex justify-between items-center font-body text-text bg-transparent z-10 relative">
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image src={logo} alt="Logo" width={100} height={50} priority />
      </motion.div>

      {/* Center Menu */}
      <motion.div
        className="hidden md:flex gap-6 text-secondary font-heading text-base z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <select className="bg-transparent outline-none cursor-pointer hover:text-primary transition-colors duration-200">
          <option className="text-text">lorem ipsum</option>
          <option>Option A</option>
        </select>
        <select className="bg-transparent outline-none cursor-pointer hover:text-primary transition-colors duration-200">
          <option className="text-text">lorem ipsum</option>
          <option>Option B</option>
        </select>
        <select className="bg-transparent outline-none cursor-pointer hover:text-primary transition-colors duration-200">
          <option className="text-text">lorem ipsum</option>
          <option>Option C</option>
        </select>
      </motion.div>

      {/* Sign In Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-secondary hover:text-white transition-all duration-300 z-10"
      >
        Sign In
      </motion.button>
    </nav>
  );
}
