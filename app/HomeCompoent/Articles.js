import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function Articles() {
    return (
        <div className='mt-10 lg:px-20 h-60'>
            <h2 className="text-gray-600 text-2xl font-bold mb-6 ">[LATEST ARTICLES]</h2>

            <div className='mt-10 grid grid-cols-3 grid-rows-3 gap-5'>
                <div className='col-span-1 row-span-3 bg-gray-500 rounded w-80 h-60'>

                </div>
                <div className='col-span-1 row-span-1 rounded w-80 '></div>
                <div className='col-span-1 row-span-2 bg-gray-500 rounded w-80 '></div>
                <div className='col-span-1 row-span-3 bg-gray-500 rounded w-80  h-60'></div>
            </div>

            <div className='bg-transparent  relative left-1/3 ml-20 mt-20 w-80 flex'>
                {/* Primary button */}
                <button className="bg-white py-1 px-4 rounded text-lg hidden lg:block">
                    See All Articles
                </button>
                {/* Secondary button with an icon */}
                <button className="bg-white rounded text-black flex items-center justify-center ml-2 hidden lg:flex">
                    <MdArrowOutward className="bg-yellow-500 text-white p-2 rounded" size={40} />
                </button>
            </div>


        </div>
    )
}
