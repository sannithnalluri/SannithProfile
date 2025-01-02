import React from 'react'

export default function Features() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-8 py-16'>
      <div
        style={{
          background: "#111111",
        }}
        className='w-60 h-auto rounded'>
        <div style={{
          background: '#1D1D1D',
          height: 40,
          color: '#FFFFFF',
          fontWeight: 'light',
          fontSize: 16,
          paddingTop: 10,
          paddingLeft: 10,
          display: 'flex',
          justifyContent: 'center',
        }}>
          Year's Experiences
        </div>
        <h1 className='text-white text-5xl p-8 bg-transparent font-bold text-center'>1.5+</h1>
      </div>
      <div
        style={{
          background: "#111111",
        }}
        className='w-60 h-auto rounded'>
        <h1 className='text-white text-5xl p-8 bg-transparent font-bold text-center'>12+</h1>
        <div style={{
          background: '#1D1D1D',
          height: 40,
          color: '#FFFFFF',
          fontWeight: 'light',
          fontSize: 16,
          paddingTop: 10,
          paddingLeft: 10,
          display: 'flex',
          justifyContent: 'center',
        }}>
          Total Projects
        </div>
      </div>
      <div
        style={{
          background: "#111111",
        }}
        className='w-60 h-auto rounded'>
        <div style={{
          background: '#1D1D1D',
          height: 40,
          color: '#FFFFFF',
          fontWeight: 'light',
          fontSize: 16,
          paddingTop: 10,
          paddingLeft: 10,
          display: 'flex',
          justifyContent: 'center',
        }}>
          Total Clients
        </div>
        <h1 className='text-white text-5xl p-8 bg-transparent font-bold text-center'>15+</h1>
      </div>
      <div
        style={{
          background: "#111111",
        }}
        className='w-60 h-auto rounded'>
        <h1 className='text-white text-5xl p-8 bg-transparent font-bold text-center'>48%</h1>
        <div style={{
          background: '#1D1D1D',
          height: 40,
          color: '#FFFFFF',
          fontWeight: 'light',
          fontSize: 16,
          paddingTop: 10,
          paddingLeft: 10,
          display: 'flex',
          justifyContent: 'center',
          width: '101%',
        }}>
          Revenue Boost
        </div>
      </div>
    </div>
  )
}
