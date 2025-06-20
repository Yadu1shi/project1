"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const icon = "/icon.svg";
const icon1 = "/icon1.svg";
const icon2 = "/icon2.svg";
const icon3 = "/icon3.svg";
const dp1 = "/dp1.png";
const dp2 = "/dp2.png";
const dp3 = "/dp3.png";
const dp4 = "/dp4.png";
const leftArrow = "/leftArrow.svg";
const rightArrow = "/rightArrow.svg";

export default function Section7() {
    const scrollRef = useRef(null);
    const [activeCard, setActiveCard] = useState(0);

    const scrollLeft = () => {
        if (activeCard > 0) {
            setActiveCard((prev) => prev - 1);
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
            }
        }
    };

    const scrollRight = () => {
        if (activeCard < cards.length - 1) {
            setActiveCard((prev) => prev + 1);
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
            }
        }
    };

    const cards = [
        {
            icon: icon,
            para: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
            profile: { dp: dp1, name: "John Doe" },
        },
        {
            icon: icon1,
            para: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
            profile: { dp: dp2, name: "Jane Smith" },
        },
        {
            icon: icon2,
            para: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
            profile: { dp: dp3, name: "Alice Johnson" },
        },
        {
            icon: icon3,
            para: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
            profile: { dp: dp4, name: "Boob Brown" },
        },
    ];

    return (
        <section className="bg-secondary flex flex-col gap-28 py-16 pl-16 w-full h-[1019px] overflow-hidden font-body my-28">
            {/* Top Content */}
            <div className="space-y-4 flex justify-between pr-16 text-white text-sm w-full">
                <div className="space-y-4 text-white max-w-[814px] pr-12 text-sm">
                    <a className="font-semibold text-md">Join other Son harvesters</a>
                    <h1 className="text-3xl font-heading font-bold">
                        LOREM IPSUM DOLOR SIT AMET
                    </h1>
                    <p className="text-sm font-thin">
                        Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
                        Eleifend mi tristique condimentum congue fusce nunc, donec magnis
                        commodo.
                    </p>
                </div>
                <div className="flex items-center">
                    <button className="whitespace-nowrap text-text bg-white px-8 py-2 rounded-sm font-bold">
                        Lorem Ipsum →
                    </button>
                </div>
            </div>

            {/* Cards & Arrows */}
            <div className="relative w-full min-w-[1000px] h-[491px]  mx-auto">
                <div className="overflow-x-auto overflow-hidden">
                    <div
                        ref={scrollRef}
                        className="flex gap-6  items-center scroll-smooth transition-all duration-300 min-w-full "
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`bg-white  rounded-md p-6 py-6 flex flex-col justify-center items-start gap-2 transition-all duration-300 ${
                                    index === activeCard
                                        ? "w-full h-[491px]"
                                        : "w-full h-[443px]"
                                } shadow`}
                            >
                                <div className="w-12 h-12 mb-4">
                                    <Image
                                        src={card.icon}
                                        alt={`Icon ${index + 1}`}
                                        width={48}
                                        height={48}
                                        onError={() => console.log("Image failed to load:", card.profile.dp)}
                                    />
                                </div>
                                <p className="text-gray-700 text-center">{card.para}</p>
                                <div className="flex items-center gap-2 mt-6">
                                    <div className="w-8 h-8 relative overflow-hidden rounded-full">
                                        <Image
                                            src={card.profile.dp}
                                            alt={`Profile ${index + 1}`}
                                            width={48}
                                            height={48}
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-gray-800 font-medium">
                                        {card.profile.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrows at bottom-left */}
                <div className="mt-6 flex gap-6 hover:">
                    <button onClick={scrollLeft} className="w-14 h-14 flex items-center justify-center" disabled={activeCard === 0}>
                        <Image src={leftArrow} alt="Left" width={56} height={56} />
                    </button>
                    <button onClick={scrollRight} className="w-14 h-14 flex items-center justify-center" disabled={activeCard === cards.length - 1}>
                        <Image src={rightArrow} alt="Right" width={56} height={56} />
                    </button>
                </div>
            </div>
        </section>
    );
}
