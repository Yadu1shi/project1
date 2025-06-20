'use client';
import React from 'react';

export default function Form1() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 sm:px-8 md:px-16 py-16">
      <form className="flex flex-col items-center gap-8 p-8 bg-white w-full max-w-[1200px]">
        <h2 className="text-center text-3xl font-bold mb-4 uppercase font-heading text-text">
          Request a Quote
        </h2>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="name" className="mb-1 text-[12px] text-text">Name</label>
            <input
              type="text"
              id="name"
              className="bg-gray-100 border border-gray-300 text-gray-700 rounded px-4 py-2"
              required
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="email" className="mb-1 text-[12px] text-text">E-mail</label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-700 rounded px-4 py-2"
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="projectName" className="mb-1 text-[12px] text-text">Project Name</label>
            <input
              type="text"
              id="projectName"
              className="bg-gray-100 border border-gray-300 text-gray-700 rounded px-4 py-2"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="timeFrame" className="mb-1 text-[12px] text-text">
              Time frame<span className="text-red-500">*</span>
            </label>
            <select
              id="timeFrame"
              className="bg-gray-100 border border-gray-300 text-gray-700 rounded px-4 py-2"
              required
            >
              <option value="">Select</option>
              <option value="1_week">1 Week</option>
              <option value="2_weeks">2 Weeks</option>
              <option value="1_month">1 Month</option>
              <option value="2_months">2 Months</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="size" className="mb-1 text-[12px] text-text">
              Size<span className="text-red-500">*</span>
            </label>
            <select
              id="size"
              className="bg-gray-100 border border-gray-300 text-gray-700 rounded px-4 py-2"
              required
            >
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="quantity" className="mb-1 text-[12px] text-text">
              Quantity<span className="text-red-500">*</span>
            </label>
            <select
              id="quantity"
              className="bg-gray-100 border border-gray-300 text-gray-700 rounded px-4 py-2"
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>

        {/* Describe Project */}
        <div className="w-full">
          <label htmlFor="describe" className="mb-2 block text-[12px] text-text">
            Please describe your project<span className="text-red-500">*</span>
          </label>
          <textarea
            id="describe"
            rows="5"
            className="w-full bg-gray-100 border border-gray-300 text-gray-700 rounded px-4 py-2 resize-none text-sm"
            placeholder="Choose a project type"
            required
          />
        </div>

        {/* Terms */}
        <p className="text-sm text-center text-text mt-4">
          By submitting this form, you agree to our&nbsp;
          <a
            href="/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Terms of Service
          </a>
          &nbsp;and&nbsp;
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Privacy Policy
          </a>
        </p>

        {/* Submit */}
        <button
          type="submit"
          className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded text-base font-bold mt-6 transition-all duration-300"
        >
          Lorem Ipsum →
        </button>
      </form>
    </div>
  );
}
