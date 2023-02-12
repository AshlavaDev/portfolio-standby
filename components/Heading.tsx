import React from 'react';

type Props = {}

export default function Heading({}: Props) {
  return (
    <div className='relative'>
      <div className="absolute inset-0 bg-neon-white rounded-lg blur"></div>
      <div className='relative flex flex-col items-center p-10 md:p-20 border-4 rounded-lg border-solid border-neon-white animate-lights motion-safe:animate-lights bg-deep-blue'>
        <h1 className='text-6xl md:text-8xl font-neon text-neon-white py-4 text-center'>Ashley Morgan</h1>
        <h3 className='animate-pulse text-2xl md:text-4xl font-subheading text-neon-white py-2 text-center'>Portfolio Coming Soon</h3>
      </div>
    </div>
  )
}