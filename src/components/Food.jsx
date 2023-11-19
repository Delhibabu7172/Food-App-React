import React, { useState } from "react";
import {data} from "../data/Data.js"

const Food = () => {

const [foods,setFoods]=useState(data)

// filter type all three
const updatefilter=(category)=>{
    setFoods( data.filter((item)=>{
        return item.category === category
    }))
   }

   // filter price all three
const updateprice=(price)=>{
    setFoods( data.filter((item)=>{
        return item.price === price
    }))
   }

  return (
    <div className="bg-purple-100 mx-auto p-4">
      <h1 className="text-center text-orange-500 font-bold text-2xl md:text-3xl lg:text-4xl">
        Top Related Menu Items
      </h1>
      {/*Filter row*/}
      <div className="flex flex-col lg:flex-row justify-between">
        {/*Filter type*/}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-start flex-wrap mt-2 ">
            <button onClick={()=>setFoods(data)} className="mx-2 px-2 py-1 rounded-xl duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button onClick={()=>updatefilter("chicken")} className="mx-2 px-2 py-1 rounded-xl duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
            <button onClick={()=>updatefilter("burger")} className="mx-2 px-2 py-1 rounded-xl duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Burger
            </button>
            <button onClick={()=>updatefilter("pizza")} className="mx-2 px-2 py-1 rounded-xl duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button onClick={()=>updatefilter("salad")} className="mt-2 sm:mt-0 mx-2 px-2 py-1 rounded-xl duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Salad
            </button>
          </div>
        </div>
        {/*Filter price*/}
        <div>
          <p className="font-bold text-gray-700 ">Filter Price</p>
          <div className="flex justify-start flex-wrap mt-2">
            <button onClick={()=>updateprice("$")} className="mx-2 px-2 py-1 rounded-xl duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button onClick={()=>updateprice("$$")} className="mx-2 px-2 py-1 rounded-xl duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button onClick={()=>updateprice("$$$")} className="mx-2 px-2 py-1 rounded-xl duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button onClick={()=>updateprice("$$$$")} className="mx-2 px-2 py-1 rounded-xl duration-300 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display foods*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
         {foods.map(({id,image,price,name}) => {
            return<div key={id} className="border shadow-lg hover:scale-105 rounded-lg duration-300 ">
                <img className="w-full h-[180px] lg:h-[200px] object-cover rounded-t-lg"
                  src={image} alt="" />
                  <div className="flex justify-between px-2 py-4">
                    <p className="font-bold">{name}</p>
                    <p>
                        <span className="bg-orange-500 text-white p-1 rounded-full">{price}</span>
                    </p>
                  </div>
            </div>
         })}
      </div>
    </div>
  );
};

export default Food;
