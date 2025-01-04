import React from 'react';
import { MdArrowOutward } from 'react-icons/md'; // Importing the outward arrow icon
import { Roboto_Mono } from 'next/font/google'; // Importing Roboto Mono font for consistent typography


const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['500'],
});

export default function About() {
    return (
        <div className="container px-5 md:px-20 grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Left Section */}
            <div className="col-span-1 md:col-span-3">
                {/* Section title */}
                <h2 className="text-gray-600 text-2xl font-bold mb-6">[ABOUT ME]</h2>
                {/* Call-to-action buttons container */}
                <div className={`${robotoMono.className} bg-transparent mt-20 w-80 flex`}>
                    {/* Primary button */}
                    <button className="bg-white py-1 px-4 rounded text-lg hidden lg:block">
                       <a href='#contact'> Let's Connect</a> 
                    </button>
                    {/* Secondary button with an icon */}
                    <button className="bg-white rounded text-black flex items-center justify-center ml-2 hidden lg:flex">
                        <a href='#contact'>
                        <MdArrowOutward className="bg-yellow-500 text-white p-2 rounded" size={40} />
                        </a>
                    </button>
                </div>

            </div>
            {/* Right Section */}
            <div className="col-span-1 md:col-span-3">
                {/* Description text */}
                <p className="text-white text-base leading-7">
                    I am a passionate full-stack developer dedicated to crafting innovative solutions and delivering
                    seamless user experiences. With expertise in web and app development, I combine creativity with
                    technical precision to bring ideas to life. Whether it's designing intuitive interfaces, building
                    robust backend systems, or exploring the possibilities of AI and cloud technologies, I thrive on
                    turning challenges into opportunities. Let's collaborate to create impactful digital experiences
                    that leave a lasting impression.
                </p>
            </div>
        </div>
    );
}
