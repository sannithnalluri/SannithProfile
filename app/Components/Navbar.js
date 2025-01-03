import Image from 'next/image'
import React from 'react';
import logo from '../Assets/logo.svg';
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className=' lg:flex justify-between'>
        <div className='w-48 lg:w-96 '>
            <Image src={logo}  alt='logo'/>
            <CiMenuBurger size={30}/>
        </div>
        <div>
          <ul className='nav hidden  lg:inline mt-40 lg:mt-0 lg:flex items-center justify-between w-full h-10 px-8 hover:cursor-pointer text-white '>
            <li className='px-3 hover:text-yellow-500'>Home</li>
            <li className='px-3 hover:text-yellow-500'>About</li>
            <li className='px-3 hover:text-yellow-500'>Services</li>
            <li className='px-3 hover:text-yellow-500'>Contact</li>
            {/* <li className='px-3 hover:text-yellow-500'>Articles</li> */}
          </ul>
        </div>
      
    </div>
  )
}
