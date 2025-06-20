'use client'

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="my-56 mx-6 md:mx-56 px-8 font-body h-[292px] max-w-2xl text-text flex flex-col items-center gap-4">
      <Image src="/Frame 80.png" alt="Logo" width={100} height={50} />
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-heading font-semibold">
          {`Lorem ipsum dolor sit amet consectetur. Dui.`.toUpperCase()}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus <br /> vitae
          porttitor pharetra tempor quis arcu. Ipsum nullam.
        </p>
      </div>
      <button className="bg-primary mt-4 text-white px-6 py-2 rounded-md whitespace-nowrap flex items-center gap-2 hover:bg-secondary transition">
        Lorem ipsum
        <ArrowRight size={22} />
      </button>
    </section>
  );
}
