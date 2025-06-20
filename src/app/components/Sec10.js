'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    img: '/hero8.png',
    title: 'Artist & Investor',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor...',
  },
  {
    id: 2,
    img: '/hero8.png',
    title: 'Creative Designer',
    para: 'Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue...',
  },
  {
    id: 3,
    img: '/hero8.png',
    title: 'Tech Innovator',
    para: 'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi...',
  },
  {
    id: 4,
    img: '/hero8.png',
    title: 'Marketing Guru',
    para: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere...',
  },
  {
    id: 5,
    img: '/hero8.png',
    title: 'Finance Expert',
    para: 'Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi...',
  },
];

export default function Section10() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col px-28 my-80 gap-10  items-center overflow-hidden">
      {/* Slider */}
      <h1 className='text-3xl font-bold '>LOREM IPSUM DOLOR SIT AMET</h1>
      <p className='text-center text-xs ' >Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.</p>
      <div className="relative max-w-5xl h-[412px] overflow-hidden ">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 1280}px)`,
            width: `${cards.length * 1280}px`,
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className="relative left-10 z-0 w-[1280px] h-[312px] flex bg-white"
            >
              {/* Image on left */}
              <div className="w-1/2 h-full relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right empty space */}
              <div className="w-1/2 h-full" />

              {/* Pinned Card (Only on active card) */}
              {current === idx && (
                <div className="absolute right-10  top-1/2 transform -translate-y-1/2 z-20">
                  <div className="w-[680px] h-[164px] rounded-md bg-white shadow-t-80 shadow-lg p-6 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {card.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">
                      {card.para}
                    </p>
                    <div className="mt-4">
                      <button className="flex items-center text-blue-600 font-semibold hover:underline">
                        Read full story
                        <ArrowRight size={20}/>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2 mt-6">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === idx ? 'w-6 bg-blue-600' : 'w-2 bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
