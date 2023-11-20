import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu,AiFillTag,AiOutlineSearch } from "react-icons/ai";
import {BsFillCartFill,BsFillSaveFill} from "react-icons/bs"
import { FaUserFriends,FaWallet } from "react-icons/fa";
import {MdFavorite,MdHelp} from "react-icons/md"
import {TbTruckDelivery} from "react-icons/tb"

const Navbar = () => {

const [nav,setnav]=useState(false)

  return (
    <div className="bg-black text-white flex justify-between p-4">
      <div className="flex justify-center items-center gap-2">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={()=>{setnav(!nav)}}/>
        </div>
        <h1 className="my-auto text-xl sm-text-2xl lg:text-3xl">
          BEST <span className="text-yellow-300  font-bold">FOODS</span>
        </h1>
        <div className=" hidden lg:flex ml-3 bg-white text-black rounded-2xl text-[14px] font-medium">
          <p className=" rounded-2xl py-2 px-1">Delivery</p>
          <p className="py-2 px-1 rounded-2xl bg-yellow-300">Pickup</p>
        </div>
      </div>

      <div className="flex">
        <div className="text-black  flex w-[170px] sm-w-[300px] lg:w-[400px] border-none bg-gray-200  px-2 py-2 rounded-full items-center ">
          <AiOutlineSearch
            className="my-auto cursor-pointer mr-2 text-black"
            size={18}
          />
          <input
            className="bg-gray-200 border-none outline-none w-[100px]"
            type="text"
            placeholder="Search Foods..."
          />
        </div>
        <button className="bg-white ml-2 text-black rounded-full hidden md:flex items-center py-2 px-2">
            <BsFillCartFill className="mr-2" size={20}/>cart
        </button>
      </div>


      {/*  mobile view*/}
      {nav ? (<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>) :("")}
      
      {/*  silde drawer view*/}
      <div className={
        nav ? "fixed top-0  left-0 z-10 w-[300px] h-screen bg-white text-black duration-300" :
        "fixed top-0  left-[-100%] w-[300px] h-screen bg-white text-black duration-300"
      }>
            <div className="bg-black text-white"> 
            <h1 className="my-auto sm-text-2xl lg:text-3xl p-4">
              BEST <span className="text-yellow-300  font-bold">FOODS</span>
            </h1>
            <AiOutlineClose onClick={()=>setnav(!nav)} className="absolute top-5 cursor-pointer right-4"  size={20}/>
            </div>
      <nav >
        <ul className="flex flex-col text-gray-800 ml-3" >
          <li className="flex mt-5"><TbTruckDelivery className="mx-3 my-2" size={20}/><a className="my-auto" href="/">Home</a></li>
          <li className="flex"><MdFavorite className="mx-3 my-2" size={20}/><a className="my-auto" href="/">Favorities</a></li>
          <li className="flex"><FaWallet className="mx-3 my-2" size={20}/><a className="my-auto" href="/">Wallet</a></li>
          <li className="flex"><MdHelp className="mx-3 my-2" size={20}/><a className="my-auto" href="/">Help</a></li>
          <li className="flex"><AiFillTag className="mx-3 my-2" size={20}/><a className="my-auto" href="/">Promotions</a></li>
          <li className="flex"><BsFillSaveFill className="mx-3 my-2" size={20}/><a className="my-auto" href="/">Best Ones</a></li>
          <li className="flex"><FaUserFriends className="mx-3 my-2" size={20}/><a className="my-auto" href="/">Invite Friends</a></li>
        </ul>
      </nav>
      </div>
   
    </div>
  );
};

export default Navbar;
