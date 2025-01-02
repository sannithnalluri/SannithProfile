'use client'
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";

export default function Testiomonals() {
const feedback =
[
    {
      "id": 1,
      "name": "John Doe",
      "designation": "Software Engineer",
      "company": "TechCorp",
      "profileImage": "https://example.com/profile1.jpg",
      "testimonial": "This service exceeded my expectations. The team was professional, and the results were outstanding. Highly recommended!"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "designation": "Project Manager",
      "company": "Innovate Inc.",
      "profileImage": "https://example.com/profile2.jpg",
      "testimonial": "Working with this team was a delight. Their innovative approach and attention to detail were impressive."
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "designation": "UI/UX Designer",
      "company": "Creative Studios",
      "profileImage": "https://example.com/profile3.jpg",
      "testimonial": "The design and functionality provided were top-notch. It truly transformed the way our users interact with our product."
    },
    {
      "id": 4,
      "name": "Michael Brown",
      "designation": "Entrepreneur",
      "company": "Startup Ventures",
      "profileImage": "https://example.com/profile4.jpg",
      "testimonial": "I was blown away by the quality and speed of delivery. The results were better than I imagined. Thank you!"
    }
  ]
  
const [userId,setUserId] = useState(1);
const user = feedback.find(user => user.id === userId);

  return (
    <div className=' lg:px-20 py-10'>
         <h2 className="text-gray-600 text-2xl font-bold mb-6">[Testiomonals]</h2>
         <div className='mt-40 grid grid-cols-6'>
         <div onClick={()=>{
            if(userId==1){
                return
            }
            setUserId(userId-1);

         }}
         
         className='col-span-1 cursor-pointer'>
            <FaArrowLeft className='' size={30} color='FE9D28' />
        </div>
        <div className='col-span-4'>
            <div className="flex items-center space-x-4">
              <img className="w-12 h-12 rounded-full object-cover" src={user?.profileImage} alt={user?.name} />
              <div className="flex-grow">
                <h3 className="text-gray-800 text-lg font-medium">{user?.name}</h3>
                <p className="text-gray-600 text-sm">{user?.designation}, {user?.company}</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-4">{user?.testimonial}</p>
          </div>

          <div onClick={()=>{
            if(userId===feedback.length){
                return
            }
            setUserId(userId+1);
          }}
          className='col-span-1 cursor-pointer'
          >
            <FaArrowRight className='nav' size={30} color='FE9D28'/>
          </div>

         </div>
        
        </div>
        

  )
}
