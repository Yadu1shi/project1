'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { fadeInOnScroll } from "../hooks/gsapAnimations";

export default function Banner2() {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      fadeInOnScroll(el.querySelectorAll('.fade-up'));
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[482px] text-white justify-center items-center flex flex-col px-6 md:px-52 text-center"
      style={{
        backgroundImage: "url(/bg2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo Image */}
      <Image
        className="absolute top-8 left-6 md:left-10"
        src="/Frame 80.png"
        alt="Logo"
        width={100}
        height={50}
      />

      {/* Animated Heading */}
      <h1 className="fade-up px-1 font-bold text-2xl md:text-3xl leading-snug">
        {`dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing `.toUpperCase()}
      </h1>

      {/* Padding holder if needed */}
      <div className="px-10"></div>
    </section>
  );
}
