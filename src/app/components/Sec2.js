// ✅ app/components/Section2.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInScale } from "../utils/motionVariants";

export default function Section2() {
  return (
    <div className="flex px-16">
      <motion.div
        initial={fadeInScale.initial}
        whileInView={fadeInScale.whileInView}
        transition={fadeInScale.transition}
        viewport={fadeInScale.viewport}
        className="flex flex-col w-[624px] max-h-[530px] justify-between space-y-6 overflow-hidden p-4"
      >
        <div className="flex justify-between items-start text-sm gap-4">
          <div className="space-y-4 w-[440px] text-sm">
            <a className="font-semibold text-md text-gray-500">NO LIMITS</a>
            <h1 className="text-xl font-extrabold">LOREM IPSUM DOLOR SIT AMET</h1>
            <p className="text-sm font-thin">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <button className="bg-primary text-white px-4 rounded-sm font-bold text-base">
              Lorem Ipsum →
            </button>
          </div>
          <Image
            src="/gal6.png"
            alt="gal6"
            width={135}
            height={231}
            style={{ objectFit: "contain", marginTop: "100px" }}
          />
        </div>

        <div className="flex gap-4 items-end">
          <Image src="/gal7.png" alt="gal7" width={135} height={231} style={{ objectFit: "contain" }} />
          <Image src="/gal8.png" alt="gal8" width={459} height={239} style={{ objectFit: "contain" }} />
        </div>
      </motion.div>

      <motion.div
        initial={fadeInScale.initial}
        whileInView={fadeInScale.whileInView}
        transition={fadeInScale.transition}
        viewport={fadeInScale.viewport}
        className="flex flex-col justify-around w-[624px] gap-4 p-4 overflow-hidden"
      >
        <div className="flex items-end gap-4">
          <Image src="/gal1.png" alt="gal1" width={135} height={210} style={{ objectFit: "contain" }} />
          <Image src="/gal2.png" alt="gal2" width={459} height={240} style={{ objectFit: "contain" }} />
        </div>
        <Image src="/gal3.png" alt="gal3" width={624} height={312} style={{ objectFit: "contain" }} />
        <div className="flex gap-4">
          <Image src="/gal4.png" alt="gal4" width={135} height={231} style={{ objectFit: "contain" }} />
          <Image src="/gal5.png" alt="gal5" width={459} height={239} style={{ objectFit: "contain" }} />
        </div>
      </motion.div>
    </div>
  );
}
