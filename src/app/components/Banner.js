'use client';

import Image from "next/image";
import { fadeInOnScroll } from "../hooks/gsapAnimations";
import { useEffect, useRef } from "react";

export default function Banner() {
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
      className="relative h-[482px] text-white justify-center items-center flex flex-col px-6 md:px-52 mt-20 text-center"
      style={{
        backgroundImage: "url(/bg1.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Image
        className="absolute top-8 left-6 md:left-16 fade-up"
        src="/Frame 80.png"
        alt="Logo"
        width={100}
        height={50}
      />

      <h1 className="py-8 font-bold text-2xl md:text-3xl fade-up">
        {`Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.`.toUpperCase()}
      </h1>

      <div className="px-4 md:px-10 fade-up">
        <p className="text-sm py-4">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat
          vestibulum nisi at ac risus amet. Mi accumsan sagittis justo
          pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna
          arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat
          vestibulum nisi at ac risus amet. Mi accumsan sagittis justo
          pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna
          arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
        </p>
      </div>
    </section>
  );
}
