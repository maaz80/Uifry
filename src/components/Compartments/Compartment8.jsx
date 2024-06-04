import React from 'react'
import Frame from "../images/Frame.png"
import FrameMessage from "../images/FrameMessage.png"
import FrameCall from "../images/FrameCall.png"

const Compartment8 = () => {
  return (
    <div>
       {/* Footer  8th Compartment*/}
       <div className='w-[100%] md:w-[60%]  m-auto font-sans mt-20 flex justify-around'>
        <ul className='flex flex-col gap-3'>
          <li className='font-bold flex items-center text-xl'><img className='w-5 md:w-10' src={Frame} alt="Frame" />Uifry</li>
          <li className='flex items-center hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'><img className='w-5 md:w-10' src={FrameMessage} alt="" />Help@FryBix.com</li>
          <li className='flex items-center hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'><img className='w-5 md:w-10' src={FrameCall} alt="" />+1234 456 678 89</li>
        </ul>

        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-[14px] md:text-2xl'>Links</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>Home</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>About Us</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>Bookings</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>Blog</li>
        </ul>

        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-[14px] md:text-2xl'>Legal</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>Terms of Use</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>Privacy Policy</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>Cookie Policy</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-[14px] md:text-2xl'>Products</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>Take Tour</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>Live Chat</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>Reviews</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-[14px] md:text-2xl'>Newspaper</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer text-[7px] md:text-base'>Stay Upto Date</li>
          <li className='flex'>
            <input className='rounded-md border border-gray-300 w-16 md:w-52 md:mr-2 mr-0' type="email" />
            <button className='bg-black text-white  px-1 py-0 md:px-5 md:py-3 rounded-md hover:bg-red-500 transition duration-300 flex justify-center items-center gap-3 text-[10px]'>Submit</button>
          </li>
        </ul>
      </div>
      <div className='text-center mt-20 border-t w-[70%] m-auto pt-1 text-[12px] md:text-[20px] md:pt-7'>Copyright 2022 uifry.com all rights reserved</div>
    </div>
  )
}

export default Compartment8
