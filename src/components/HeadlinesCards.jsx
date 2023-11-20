import React from 'react'
import lineimg1 from "../assets/linesimg1.avif"
import lineimg2 from "../assets/linesimg2.avif"
import lineimg3 from "../assets/lineimg3.avif"

const HeadlinesCards = () => {
  return (
    <div className='mx-auto p-4 md:py-12 grid md:grid-cols-3 gap-6'>
        {/* card*/}
        <div className='rounded-xl relative '>
            {/* overlay*/}
            <div className='absolute w-full h-full text-white bg-black/60 rounded-xl pl-2'>
                <p className='font-bold px-2 pt-4 text-2xl'>Mediterranean Salad</p>
                <p className='px-2'>With Juice & Lemon</p>
                <button className='ml-2 border-black bg-white text-black px-2 rounded-2xl py-1 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[170px] md:max-h-[210px] w-full object-cover rounded-xl'
             src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
          {/* card2*/}
          <div className='rounded-xl relative '>
            {/* overlay*/}
            <div className='absolute w-full h-full text-white bg-black/60 rounded-xl pl-2'>
                <p className='font-bold px-2 pt-4 text-2xl'>Avocado and Egg Toast</p>
                <p className='px-2'>Offer 5%</p>
                <button className='ml-2 border-black bg-white text-black px-2 rounded-2xl py-1 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[170px] md:max-h-[210px] w-full object-cover rounded-xl'
             src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
          {/* card3*/}
          <div className='rounded-xl relative'>
            {/* overlay*/}
            <div className='absolute w-full h-full text-white bg-black/60 rounded-xl pl-2'>
                <p className='font-bold px-2 pt-4 text-xl lg:text-2xl'>Roasted chicken thigh seasoned with dried herbs & dripping juice.</p>
                <p className='px-2'>Offer 10%</p>
                <button className='ml-2 border-black bg-white text-black px-2 rounded-2xl py-1 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[170px] md:max-h-[210px] w-full object-cover rounded-xl'
             src="https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGxlZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default HeadlinesCards