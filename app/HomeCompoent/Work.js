import React from 'react'
import { MdArrowOutward } from 'react-icons/md';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['500'],
});

export default function Work() {
  return (
    <div className='lg:px-20 lg:py-10'>
         <h2 className="text-gray-600 text-2xl font-bold mb-6">[Work]</h2>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 h-80'>
            <div className='col-span-1 bg-gray-500'></div>
            <div className='col-span-1 lg:col-span-2 bg-gray-500'></div>
        </div>
        <div className='lg:mt-5 grid grid-col-1 lg:grid-cols-3 gap-5 h-80'>
            <div className='lg:col-span-2 bg-gray-500'></div>
            <div className='col-span-1 bg-gray-500'></div>
        </div>

         <div className={`${robotoMono.className} bg-transparent mt-10 w-80 flex`}>
                    <button className="bg-white py-1 px-4 rounded text-lg" >See All Work</button>
                    <button className=" bg-white rounded text-black flex items-center justify-center ml-2">
                    <MdArrowOutward className={` bg-yellow-500 text-white p-2 rounded `} size={40}/>
                    </button>
        </div>
      
    </div>
  )
}
