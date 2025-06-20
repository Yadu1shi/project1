"use client";

import Image from "next/image";
import { useState } from "react";

export default function Section8() {
  const [active, setActive] = useState("Research");

  const content = {
    Research:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et vehicula risus. Proin dignissim nisi vel justo fermentum. Curabitur iaculis massa at bibendum dignissim.",
    Plan:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam erat volutpat. Vivamus tincidunt felis sed est ultricies, a hendrerit dolor lacinia.",
    Design:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  };

  return (
    <section className="flex items-center gap-8 overflow-hidden justify-between px-16 py-20 w-full">
      {/* Left Content */}

      <div className="flex flex-col gap-6 w-1/2">
        {/* Headline */}
        <h1 className="text-2xl font-bold font-body text-gray-900">
          LOREM IPSUM DOLOR SIT AMET
        </h1>
        {/* Buttons */}
        <div className="flex justify-around border-2 rounded-md">
          {["Research", "Plan", "Design"].map((item) => (
            <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-11 py-2 font-semibold border-r-1  transition-all duration-300 ${
              active === item
              ? "bg-[#F1F5F9] text-body border-gray-600"
              : "text-body bg-white hover:bg-slate-400"
            }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className=" p-6 rounded-lg space-y-6">
          <p className="text-gray-700 leading-relaxed">{content[active]}</p>
          <button className="flex items-center gap-2 font-bold text-secondary">
            Check Tool
            <Image src="/arrowblue.svg" alt="arrow" width={20} height={20} />
          </button>
        </div>
          </div>

      <div className="w-1/2">
      {/* Right Hero Image */}
      <div className="w-full h-[406px] relative">
        <Image
          src="/hero6.png"
          alt="Hero"
          fill
          className="object-contain"
        />
      </div>
      </div>
    </section>
  );
}
