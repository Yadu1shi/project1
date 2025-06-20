'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInScale } from "../utils/motionVariants"; // make sure it's defined
// or use fadeInUp if you prefer vertical motion

export default function Section3() {
  const cards = [
    {
      img: "/card1.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      img: "/card2.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      img: "/card3.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      img: "/card4.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
  ];

  const group1 = cards.slice(0, 2);
  const group2 = cards.slice(2, 4);

  return (
    <div className="px-16 relative">
      <section className="min-h-screen w-full flex flex-col justify-center items-center px-16">
        {/* Top Content */}
        <div className="space-y-2 h-[196px] absolute top-12 left-20">
          <a className="font-semibold text-blue-600">
            Lorem ipsum dolor sit amet
          </a>
          <h1 className="text-3xl font-heading font-bold">
            LOREM IPSUM DOLOR SIT
          </h1>
          <p className="text-sm leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi
            <br />
            porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis
            <br />
            aliquet. Hendrerit tellus at purus lectus.
          </p>
        </div>

        {/* Group 1 */}
        <div className="flex justify-between w-full mt-60">
          {group1.map((item, index) => (
            <motion.div
              key={index}
              initial={fadeInScale.initial}
              whileInView={fadeInScale.whileInView}
              transition={{ ...fadeInScale.transition, delay: index * 0.2 }}
              viewport={fadeInScale.viewport}
              className="w-[445px] overflow-hidden m-8 bg-white border border-gray-300 rounded-xl shadow-sm flex flex-col"
            >
              <Image src={item.img} alt={`item ${index + 1}`} height={400} width={400} />
              <div className="flex flex-col text-sm gap-4 space-y-1 p-4">
                <h4 className="font-bold">{item.title}</h4>
                <p>{item.description}</p>
                <button className="text-left text-primary font-semibold underline">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Group 2 */}
        <div className="flex justify-between w-full mt-8">
          {group2.map((item, index) => (
            <motion.div
              key={index + 2}
              initial={fadeInScale.initial}
              whileInView={fadeInScale.whileInView}
              transition={{ ...fadeInScale.transition, delay: index * 0.2 }}
              viewport={fadeInScale.viewport}
              className="w-[445px] overflow-hidden m-8 bg-white border border-gray-300 rounded-xl shadow-sm flex flex-col"
            >
              <Image src={item.img} alt={`item ${index + 3}`} height={400} width={400} />
              <div className="flex flex-col text-sm gap-4 space-y-1 p-4">
                <h4 className="font-bold">{item.title}</h4>
                <p>{item.description}</p>
                <button className="text-left text-primary font-semibold underline">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
