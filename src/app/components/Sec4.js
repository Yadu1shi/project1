'use client';

import Image from "next/image"
import { motion } from "framer-motion";
import { fadeInScale } from "../utils/motionVariants";

export default function Section4() {
  const logos = [
    { img: "/logo1.png" }, { img: "/logo2.png" },
    { img: "/logo3.png" }, { img: "/logo4.png" },
    { img: "/logo5.png" }, { img: "/logo6.png" },
    { img: "/logo7.png" }, { img: "/logo8.png" },
    { img: "/logo9.png" }, { img: "/logo10.png" },
    { img: "/logo11.png" }, { img: "/logo12.png" },
  ];

  // Divide into 3 groups of 4
  const group1 = logos.slice(0, 4);
  const group2 = logos.slice(4, 8);
  const group3 = logos.slice(8, 12);

  return (
    <div className="mx-20 mt-32 h-auto flex flex-col gap-20 justify-start">
      <h1 className="px-4 md:px-32 font-bold text-3xl text-center">
        {`Lorem ipsum dolor sit amet consectetur. Commodo leo amet.`.toUpperCase()}
      </h1>

      <div className="bg-white p-4 space-y-10 flex flex-col justify-center items-center">
        {[group1, group2, group3].map((group, groupIndex) => (
          <div key={groupIndex} className="flex gap-10 flex-wrap justify-center">
            {group.map((item, index) => (
              <motion.div
                key={index}
                initial={fadeInScale.initial}
                whileInView={fadeInScale.whileInView}
                transition={{ ...fadeInScale.transition, delay: index * 0.1 }}
                viewport={fadeInScale.viewport}
                className="flex items-center justify-center"
              >
                <Image
                  src={item.img}
                  alt={`Logo ${index + groupIndex * 4 + 1}`}
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
