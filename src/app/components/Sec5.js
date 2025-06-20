'use client';
import Image from 'next/image';
import heroImg from 'public/hero3.png';
import item1 from 'public/item-4.png';
import { fadeInLeft, fadeInRight } from '../utils/motionVariants';
import { motion } from 'framer-motion';

export default function Section5() {
  const cards = [
    {
      heading: 'Lorem ipsum dolor sit amet.',
      para: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
    },
    {
      heading: 'Lorem ipsum dolor sit amet.',
      para: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
    },
    {
      heading: 'Lorem ipsum dolor sit amet.',
      para: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
    }
  ];

  return (
    <div  className="w-full font-body bg-white relative">
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-16 py-16">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <div className="space-y-4 max-w-[593px]">
            <a className="font-semibold text-secondary">Lorem ipsum dolor sit amet</a>
            <h1 className="text-2xl md:text-3xl font-heading font-bold leading-snug text-text">
              LOREM IPSUM DOLOR SIT<br />AMET CONSECTETUR. EU<br />ELITE.
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
            </p>
          </div>

          {/* Features List */}
          <motion.div {...fadeInLeft} className="bg-white p-4 space-y-6 ">
            {cards.map((item, index) => (
              <div key={index} className="flex gap-4 relative">
                <Image
                  src={item1}
                  alt={`Item ${index + 1}`}
                  width={24}
                  height={24}
                  className="object-contain mt-1"
                />
                <div className="flex flex-col">
                  <h4 className="text-md font-semibold text-text">{item.heading}</h4>
                  <p className="text-sm text-gray-700">{item.para}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div {...fadeInRight} className="md:w-1/2 flex justify-end">
          <Image
            src={heroImg}
            alt="Hero Image"
            width={577}
            height={620}
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </section>

      {/* Gradient Divider - stick to bottom right */}
      <div className="absolute bottom-0 right-0 w-[1220px] max-w-4xl h-[20px] bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]"></div>
    </div>
  );
}
