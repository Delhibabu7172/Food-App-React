import React from 'react'
import image1 from "../assets/bcgimg1.jpg"

const Hero = () => {
  return (
    <div className=' mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute text-white w-full h-full max-h-[500px] bg-black/70 flex flex-col justify-center'>
                <h1 className='pl-4 lg:ml-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-yellow-400'>Best</span></h1>
                <h1 className='pl-4 lg:ml-7  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods <span className='text-yellow-400'>Delivered <br/> Here...</span></h1>
            </div>        
               <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={image1} />
        </div>
    </div>
  )
}

export default Hero