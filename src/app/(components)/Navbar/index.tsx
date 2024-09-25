"use client";

import { Bell, Menu, Settings, Sun } from "lucide-react";
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full mb-7 '>

      {/* LEFT SIDE */}
      <div className='flex items-center w-0.5 gap-5'>
        <button className="px-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={() => {}}>
          <Menu className="w-4 h-4 " />
        </button>
       
        <div className="relative">g
          <input
            type="search"
            placeholder="Start type to search groups & products" 
            className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center w-0.5 flex-shrink-0 gap-5 bg-blue-100">
        <button onClick={() => {}}>
          <Sun className="cursor-pointer text-gray-500" size={24} />
        </button>
        
        <div className="relative">
          <Bell className="cursor-pointer text-gray-500" size={24} />
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
            3
          </span>
        </div>

        <hr className="h-7 border border-gray-300 mx-3" />

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 bg-gray-200">image</div>
          <span className="font-semibold">Ed Roh</span>
        </div>

        {/* Use an anchor or next/link */}
        <a href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;