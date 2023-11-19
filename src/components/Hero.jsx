import React from 'react'
import image1 from "../assets/bcgimg1.jpg"

const Hero = () => {
  return (
    <div className=' mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute text-white w-full h-full max-h-[500px] bg-black/70 flex flex-col justify-center'>
                <h1 className='pl-4  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-400'>Best</span></h1>
                <h1 className='pl-4  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods <span className='text-orange-400'>Delivered <br/> Here...</span></h1>
            </div>        
               <img className='w-full max-h-[500px] object-cover' src={image1} alt="" />
        </div>
    </div>
  )
}

export default Hero