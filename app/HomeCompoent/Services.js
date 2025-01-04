'use client'
import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { Poppins } from 'next/font/google';


// Use the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'], // Medium and regular weights
  variable: '--font-poppins', // Variable to use in styles
});

export default function Services() {
  return (
    <div className={`container lg:px-20 px-4 lg:flex justify-between text-white ${poppins.variable}`}>
      <div className="lg:w-1/2">
        <h2 className="text-gray-600 text-2xl font-bold mb-6">[SERVICES]</h2>
        <h2 className="text-white text-4xl font-bold mb-6">EXPERTISE</h2>
        <p className="font-light text-sm">
          My comprehensive services include web and mobile app development, cloud integration, and advanced AI-driven solutions designed to streamline your operations and enhance user experiences. From creating intuitive UI/UX designs to building robust backend systems, we take a client-focused approach to ensure quality and satisfaction at every step. Whether you’re looking to launch a new product, optimize your business processes, or harness the power of emerging technologies, our team is dedicated to turning your vision into reality. Let’s collaborate to bring innovation and efficiency to your digital projects.
        </p>
      </div>
      <div className="lg:w-1/2">
        {/* Section 1 */}
        <div className="group service section p-4 flex items-center justify-between hover:bg-yellow-500 transition-all duration-300 rounded-md cursor-pointer">
      <div>
        <h1 className="text-2xl font-bold">UI/UX Designing</h1>
        <h4 className="text-sm mt-2">
        Designing intuitive and visually stunning interfaces that create seamless connections between users and technology, enhancing engagement and satisfaction.
        </h4>
      </div>
      <div>
        <button
          className="flex items-center bg-gray-800 text-gray-300 group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-md px-3 py-1 cursor-pointer"
        >
          <span className="text-sm">Discover</span>
          <GoArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
    <div className="group service section p-4 flex items-center justify-between hover:bg-yellow-500 transition-all duration-300 rounded-md cursor-pointer">
      <div>
        <h1 className="text-2xl font-bold">DEVELOPMENT</h1>
        <h4 className="text-sm mt-2">
        Building high-performing, scalable applications tailored to meet user needs with robust frontend and backend solutions.
        </h4>
      </div>
      <div>
        <button
          className="flex items-center bg-gray-800 text-gray-300 group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-md px-3 py-1 cursor-pointer"
        >
          <span className="text-sm">Discover</span>
          <GoArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
    <div className="group service section p-4 flex items-center justify-between hover:bg-yellow-500 transition-all duration-300 rounded-md cursor-pointer">
      <div>
        <h1 className="text-2xl font-bold">AI and Machine Learning Integration</h1>
        <h4 className="text-sm mt-2">
        Implementing AI-driven features like predictive analytics and personalized experiences to enhance functionality and efficiency.
        </h4>
      </div>
      <div>
        <button
          className="flex items-center bg-gray-800 text-gray-300 group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-md px-3 py-1 cursor-pointer"
        >
          <span className="text-sm">Discover</span>
          <GoArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
    <div className="group service section p-4 flex items-center justify-between hover:bg-yellow-500 transition-all duration-300 rounded-md cursor-pointer">
      <div>
        <h1 className="text-2xl font-bold">Analytics Integration</h1>
        <h4 className="text-sm mt-2">
        Integrating advanced analytics tools to provide real-time insights, track performance, and optimize business strategies effectively.
        </h4>
      </div>
      <div>
        <button
          className="flex items-center bg-gray-800 text-gray-300 group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-md px-3 py-1 cursor-pointer"
        >
          <span className="text-sm">Discover</span>
          <GoArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
        </div>
      </div>
  );
}
