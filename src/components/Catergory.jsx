import React from 'react'
import {categories} from "../data/Data"

const Catergory = () => {
    
  return (
    <div >
             <h1 className='text-center text-orange-500 font-bold text-2xl md:text-3xl lg:text-4xl mt-5'>Top Related Menu Items</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6 p-0 sm:p-4'>
      {categories.map(({id,name,image}) => {
            return <div key={id} className='border bg-purple-200 flex justify-center items-center rounded-xl'>
             <h1 className='font-bold text-xs lg:text-base mx-2 lg:mr-8'>{name}</h1>
               <img src={image} alt="" className='w-20' />
            </div>
        })}
      </div>
    </div>
  )
}

export default Catergory