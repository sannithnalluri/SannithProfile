import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';
import hyerride from '../Assets/hyperride.png';
import naadiventures from '../Assets/naandiventues.png';
import statfiy from '../Assets/startify.png';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['500'],
});

export default function Work() {
  const [projectId, setProjectId] = useState(1);

  const ProjectData = [
    {
      id: 1,
      name: 'Hyperride',
      image: hyerride,
      description: 'Hyperride is a car rental platform built with Next.js and Tailwind CSS...',
      link: 'https://github.com/hyperride-team/hyperride-frontend',
      icon: <MdArrowOutward className="text-red-500 mr-2" />,
    },
    {
      id: 2,
      name: 'Naandiventures',
      image: naadiventures,
      description: 'Naandiventures is an online platform for small businesses...',
      link: 'https://github.com/Naandiventures/naandiventures-frontend',
      icon: <MdArrowOutward className="text-red-500 mr-2" />,
    },
    {
      id: 3,
      name: 'Startify',
      image: statfiy,
      description: 'Startify is a platform for freelance software developers...',
      link: 'https://github.com/startify-team/startify-frontend',
      icon: <MdArrowOutward className="text-red-500 mr-2" />,
    },
  ];

  const project = ProjectData.filter(item => item.id === projectId)[0];

  return (
    <div className="lg:px-20 lg:py-10">
      <h2 className="text-gray-600 text-2xl font-bold mb-6">[Work]</h2>
      <div className="grid grid-cols-12">
        <div className="col-span-1 pt-40">
          <FaCircleArrowLeft
            onClick={() => {
              if (projectId === 1) return;
              setProjectId(projectId - 1);
            }}
            size={30}
            color="yellow "
          />
        </div>
        <div className="col-span-10 w-full">
          {project && (
            <div
              key={project.id}
              className="px-4 py-6 border-b-2 border-gray-200"
            >
              <div className="">
                <Image
                  className="rounded-lg"
                  alt={project.name}
                  src={project.image}
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div 
              style={{
                background:"#1D1D1D"
              }}
              className="rounded p-4 ml-4 mt-4">
                <h3 className="text-white text-lg ">{project.name}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <div className='flex'>
                <a
                  href={project.link}
                  className="flex items-center text-blue-500 hover:text-blue-600 p-2"
                >
                  <h2 className='cursor-pointer bg-white  p-2 rounded'>View Details</h2>
                </a>
                  </div>
               
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1 pt-40">
          <FaCircleArrowRight
            onClick={() => {
              if (projectId === ProjectData.length) return;
              setProjectId(projectId + 1);
            }}
            size={30}
            color="yellow"
          />
        </div>
      </div>
    </div>
  );
}
