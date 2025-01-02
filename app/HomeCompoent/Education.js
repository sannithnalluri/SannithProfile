import React from 'react';
import { PiLineVerticalLight } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";


export default function Education() {
    return (
        <div className='text-white lg:px-20'>
            <h2 className="text-gray-600 text-2xl font-bold mb-6">[EDUCATION]</h2>
            <div className='mt-10'>
                <div className='ed flex'>
                        <div>
                            <FaCircle size={40} color='yellow' className='p-2 ml-1'/>
                            <PiLineVerticalLight size={50} color='red' className='p-2'/>
                        </div>      
                        <div>
                            <h2 className='lg:text-xl p-0'>Marri Laxman Reddy Institue of Technology and Management</h2>
                            <h4 className='text-sm mt-2 lg:text-md font-light p-0'>Btech in Computer Science Engneering in Aritifical Intellgence and Manchine Learing</h4>
                            <h4 className='text-sm mt-2 lg:text-md font-light  p-0'>Hyderabad, Telangana, India - 2025</h4>
                            
                        </div>              
                </div>
                <div className='ed flex'>
                        <div>
                            <FaCircle size={40} color='yellow' className='p-2 ml-1'/>
                            <PiLineVerticalLight size={50} color='red' className='p-2'/>
                        </div>      
                        <div>
                            <h2 className='text-xl p-0'>Telangana model Junior college</h2>
                            <h4 className='text-sm mt-2 lg:text-md font-light p-0'> Intermedaite in Maths,Physics,Chemistry </h4>
                            <h4 className='text-sm mt-2 lg:text-md font-light p-0'>Mancherial,Telangana ,India - 2021</h4>
                            
                        </div>              
                </div>
                <div className='ed flex'>
                        <div>
                            <FaCircle size={40} color='yellow' className='p-2 ml-1'/>
                        </div>      
                        <div>
                            <h2 className='text-xl p-0'>Marri Laxman Reddy Institue of Technology and Management</h2>
                            <h4 className='text-sm mt-2 lg:text-md font-light p-0'>High School-Science and Languages</h4>
                            <h4 className='text-sm mt-2 lg:text-md font-light  p-0'>Mancherial,Telangana ,India - 2019</h4>
                            
                        </div>              
                </div>

            </div>

        </div>
    )
}
