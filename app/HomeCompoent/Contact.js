'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import bg from '../Assets/logo.svg';

export default function Contact() {
    const [userForm, setUserForm] = useState({
        name: '',
        email: '',
        phone: '',
        orginationName: '',
    });

    return (
        <div className='container text-white lg:px-20 lg:py-96 text-center'>
            <h2 className='font-bold lg:text-2xl'>Let’s Get Started</h2>
            <h1 className='font-bold lg:text-7xl'>LET'S COLLABORATE</h1>

            <div
                style={{
                    background: '#1D1D1D',
                    textAlignL:'left'
                }}
                className='lg:flex justify-around py-5 px-5 rounded-lg mt-20'
            >
                <div className='heading lg:w-1/2 p-10'>
                    <h1 className='text-5xl mb-4'>Contact</h1>
                    <p className='text-sm p-5 mx-10'>
                        Have a project in mind? Let’s bring your vision to life! Reach out to discuss your ideas and get a personalized quote tailored to your needs.
                    </p>

                    <Image className='lg:mx-20' src={bg} alt='bgimage' width={250} height={200} />
                </div>
                <div className='form lg:w-1/2 text-left lg:ml-6 p-10'>
                <label>
                    <span className='text-gray-400 ml-4'>Email</span><br/>
                    <input
                        style={{
                            borderWidth: '1px',
                            borderColor: 'yellow',
                            borderStyle: 'solid',
                            margin:"1rem"
                        }}
                        className='p-2 px-10 rounded bg-white text-white placeholder-gray-500'
                        placeholder='example@gmail.com'
                        value={userForm.email}
                        onChange={(e) =>
                            setUserForm({ ...userForm, email: e.target.value })
                        }
                    />
                </label> 
                    <br/>
                    <label>
                    <span className='text-gray-400 ml-4'>Name</span><br/>
                    <input
                        style={{
                            borderWidth: '1px',
                            borderColor: 'yellow',
                            borderStyle: 'solid',
                            margin:"1rem"
                        }}
                        className='p-2 px-10 rounded bg-white text-white placeholder-gray-500'
                        placeholder='JoneDoe'
                        value={userForm.name}
                        onChange={(e) =>
                            setUserForm({ ...userForm, name: e.target.value })
                        }
                    />
                </label> 
                    <br/>
                    <label>
                    <span className='text-gray-400 ml-4'>Phone</span><br/>
                    <input
                        style={{
                            borderWidth: '1px',
                            borderColor: 'yellow',
                            borderStyle: 'solid',
                            margin:"1rem"
                        }}
                        className='p-2 px-10 rounded bg-white text-white placeholder-gray-500'
                        placeholder='+91 9XXXXXXX93'
                        value={userForm.phone}
                        onChange={(e) =>
                            setUserForm({ ...userForm, phone: e.target.value })
                        }
                    />
                </label> 
                    <br/>
                    <label>
                    <span className='text-gray-400 ml-4'>orgination Name</span><br/>
                    <input
                        style={{
                            borderWidth: '1px',
                            borderColor: 'yellow',
                            borderStyle: 'solid',
                            margin:"1rem"
                        }}
                        className='p-2 px-10 rounded bg-white text-white placeholder-gray-500'
                        placeholder='eg..Google Organization'
                        value={userForm.orginationName}
                        onChange={(e) =>
                            setUserForm({ ...userForm, orginationName: e.target.value })
                        }
                    />
                </label> 
                    <br/>
                   
                   <div className='px-4 py-2 cursor-pointer bg-yellow-500 rounded w-fit ml-4'>
                    Send Now
                   </div>
                </div>
            </div>
        </div>
    );
}
