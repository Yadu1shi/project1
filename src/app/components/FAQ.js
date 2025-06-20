'use client';
import { useState } from 'react';

export default function FAQ() {
  const faqData = [
    {
      question: "What is Lorem Ipsum?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."
    },
    {
      question: "kabhi use kare ho tak lodem?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      question: "kaha use hot h lorem?",
      answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature."
    },
    {
      question: "kaa milega lorem ipsum?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    },
    {
      question: "Lorem Ipsum dolor sit amet?",
      answer: "Yes, Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is safe to use for mockups and layouts."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FBFBFB] mx-auto my-10 py-6 px-20">
      <h2 className="text-2xl text-left font-bold font-heading mb-12 ">FREQUENTLY ASKED QUESTIONS(FAQS)</h2>
      <div className="space-y-4 font-body">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="border-t px-10 pt-4"
          >
            <button
              type="button"
              onClick={() => toggleFAQ(idx)}
              className="w-full text-left text-sm font-bold flex justify-between items-center"
              aria-expanded={openIndex === idx}
            >
              <span>{item.question}</span>
              <span className="text-2xl font-light">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="mt-2 text-gray-600 text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
