import React from 'react'
import Frame from "../images/Frame.png"

const Navbar = () => {
    return (
        <div className='flex  justify-around items-center p-4  font-sans'>
            <div className='flex items-center'>
                <div className='flex'>
                    <img className='mr-2' src={Frame} alt="Frame" />
                    <div className='text-2xl font-extrabold text-gray-800 mr-8'>   UIFRY</div>
                </div>
                <ul className='flex gap-6 text-lg text-gray-700'>
                    <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer'>Home</li>
                    <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer'>About Us</li>
                    <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer'>Pricing</li>
                    <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer'>Features</li>
                </ul>
            </div>
            <div>
                <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-300'>
                    Download
                </button>
            </div>
        </div>
    )
}

export default Navbar
