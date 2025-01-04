'use client';
import Image from 'next/image';
import React from 'react';
import { FaMailchimp, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../Assets/logo.svg'
import { SiGmail } from "react-icons/si";


export default function Footer() {
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await fetch("https://sannithwebsite.netlify.app/api/Message",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message }),
                }
            )

            if (!response.ok) {
                throw new Error('Failed to send message');
            }
            setMessage('');
            setLoading(false);
        }
        catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    return (
    <div className='lg:flex justify-between py-10'>
        <div className=''>
            <Image src={logo} alt='logo' width={300} height={250}/>
            <h2>Connect Collebrate Create</h2>
            <textarea
                        className="p-4 rounded bg-transparent text-white placeholder-gray-400 border border-gray-600 w-full h-40"
                        placeholder="Write your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
            <div 
            onClick={handleSubmit}
            style={{
                color:loading?'gray':'white'
            }}
            className='bg-yellow-500 text-white p-4 w-fit rounded cursor-pointer'>
                Send feedback
            </div>
        </div>
    
    
        <footer className="text-white py-10">
            <div className="container mx-auto px-5">
                {/* Top Section: Links and Social Media */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                    {/* Links Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="hover:text-yellow-500">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-yellow-500">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="hover:text-yellow-500">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-yellow-500">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-3">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a
                                href="sannithnalluri@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <SiGmail size={24} />
                            </a>
                            <a
                                href="https://github.com/sannithnalluri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/the_sannith/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sannith-kumar-nalluri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaLinkedinIn size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Details Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-3">Contact Us</h4>
                        <p>
                            <span className="font-bold">Email:</span> sannithnalluri@gmail.com
                        </p>
                        <p>
                            <span className="font-bold">Phone:</span> +91 9398112724
                        </p>
                        <p>
                            <span className="font-bold">Address:</span> Hyderabad,Telangana,India
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Policy and Disclaimer */}
                <div className="border-t border-gray-700 pt-5 text-center">
                    <p className="text-sm text-gray-400">
                        © 2025 Sannith Kumar. All rights reserved.{' '}
                        <a href="/privacy" className="hover:text-yellow-500">
                            Privacy Policy
                        </a>{' '}
                        |{' '}
                        <a href="/terms" className="hover:text-yellow-500">
                            Terms of Service
                        </a>
                    </p>
                </div>
            </div>
        </footer>
        </div>
    );
}
