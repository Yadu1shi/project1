'use client';
import Image from 'next/image';
import heroImg from 'public/hero2.png';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/motionVariants';


const cards = [
  {
    img: '/item-1.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.',
  },
  {
    img: '/item-2.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.',
  },
  {
    img: '/item-3.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.',
  },
];

export default function Section1() {
  

  return (
    <div  className="flex flex-col justify-between my-10 pl-10">
      <section className="flex flex-col shadow-lg px-10 md:flex-row items-center justify-between py-16 gap-12">
        {/* LEFT SIDE */}
        <motion.div
          className="md:w-1/2 gap-4 flex flex-col fade-up"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Headline + Paragraph */}
          <div className="space-y-6 w-full max-w-xl">
            <a className="font-semibold text-secondary">Lorem ipsum dolor sit</a>
            <h1 className="text-4xl font-bold leading-snug">
              LOREM IPSUM <br /> DOLOR SIT AMET
            </h1>
            <p className="text-base leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Sed do eiusmod tempor incididunt ut labore et dolore. <br />
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          {/* Cards */}
          <motion.div
            className="bg-white p-4 space-y-3 w-full max-w-xl fade-up"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3 }}
          >
            {cards.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={item.img}
                  alt={`Item ${index + 1}`}
                  width={140}
                  height={140}
                  className="object-cover w-20 h-20"
                />
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Button & Call */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 w-full max-w-xl fade-up"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-primary flex items-center text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-secondary transition-all duration-300">
              Lorem Ipsum <ArrowRight size={20} />
            </button>
            <a
              href="tel:123456789"
              className="text-secondary flex items-center whitespace-nowrap text-sm font-bold font-body"
            >
              <Phone size={20} /> 123456789
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="md:w-1/2 flex justify-center fade-up"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8 }}
        >
          <Image
            src={heroImg}
            alt="Hero Image"
            width={500}
            height={500}
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </section>

      {/* Bottom Strip */}
      <div className="w-full h-[20px] bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]"></div>
    </div>
  );
}
