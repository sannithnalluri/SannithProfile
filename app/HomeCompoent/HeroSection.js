import React from 'react';
import './HeroSection.css'; // Importing the CSS file for styling
import Image from 'next/image'; // Importing Next.js Image component for optimized image loading
import { Poppins, Roboto } from 'next/font/google'; // Importing Google Fonts for custom typography
import { MdArrowOutward } from 'react-icons/md'; // Importing an icon from react-icons
import Link from 'next/link'; // Importing Link for client-side navigation in Next.js


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
});


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500'],
});

// Defining the HeroSection functional component
export default function HeroSection() {
  return (
    <div className="container">
      <section className="hero-section m-0 lg:m-16">
        {/* Header section with two headings styled for visual separation */}
        <div className="flex justify-between">
          <h3 className="text-white">
            {/* Using span for brackets with red color */}
            <span className="text-red-500 p-1">[</span>Code Spark Innovation
            <span className="text-red-500 p-1">]</span>
          </h3>
          <h3 className="text-white mx-2">
            <span className="text-red-500 p-1">[</span>Idea into Reality
            <span className="text-red-500 p-1">]</span>
          </h3>
        </div>

        {/* Main headline with large text size and custom font */}
        <div className="heading text-white text-4xl lg:text-8xl ">
          <h1 className={`${poppins.className} relative top-1/3 mt-48 lg:mt-20`}>
            INNOVATE<br />
            {/* Highlighted text with orange color */}
            <span className="text-orange-500">FOR DESIGN</span><br />
            DELIVER
          </h1>
        </div>

        {/* Subtext paragraph with Roboto Mono font and limited width */}
        <p className={`${roboto.className} text-white lg:mt-10 max-w-lg
        lg:relative left-2/4 bottom-1/3 text-sm lg:text-lg
        `}>
          Every line of code drives innovation, every project tells a story of growth, and every challenge is an opportunity to transform ideas into reality.
        </p>

        {/* Call-to-action section with a link and button */}
        <div className={`${roboto.className} flex items-center  mt-2 lg:mt-10  cursor-pointer md:relative left-2/4 bottom-1/3`}>
          {/* Link to another page */}
          <Link href="#contact">
            <span className="text-black p-3 rounded underline bg-white">Let’s Connect</span>
          </Link>
          {/* Button with an outward arrow icon */}
          <button className="bg-white rounded text-black flex items-center justify-center ml-2 ">
            <MdArrowOutward className="bg-yellow-500 text-white p-2 rounded" size={42} />
          </button>
        </div>
      </section>
    </div>
  );
}
