'use client';
import Navbar from './Navbar';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Background Clipped Image */}
      <div
        className="absolute top-0 right-0 w-[400px] h-screen z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
          clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* Main Content */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 min-h-[90vh]">
        
        {/* Left Text Content */}
        <motion.div
          className="md:w-1/2 space-y-6 text-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Discover the Perfect Ride!
          </h1>
          <p className="text-base md:text-lg font-body leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Quis nostrud exercitation.
          </p>

          {/* Input Field + Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md sm:rounded-r-none border outline-none w-full sm:w-64 font-body"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-md sm:rounded-l-none flex items-center justify-center gap-2 hover:bg-secondary transition-all duration-300">
              Submit <ArrowRight size={18} />
            </button>
          </div>

          {/* Check Icon + Text */}
          <div className="flex items-center gap-2 pt-2 text-sm font-medium">
            <CheckCircle className="text-secondary" size={20} />
            <span>No credit card required!</span>
          </div>
        </motion.div>
      </section>
    </>
  );
}
