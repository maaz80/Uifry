{/* 7th  Compartment */}
import React from 'react'
import Spray from "../images/Spray.png"
import Ellipse from "../images/Ellipse.png"
import BlkMob1 from "../images/BlkMob1.png"
import BlkMob2 from "../images/BlkMob2.png"
import BlkMob3 from "../images/BlkMob3.png"
import { HiArrowLongRight } from "react-icons/hi2";

const Compartment7 = () => {
  return (
      <div className='w-[99%] md:w-[60%] m-auto mt-7 md:mt-20  p-7 bg-black rounded-md relative overflow-hidden'>
        <div className='flex  items-center justify-center'>
          <div className='mb-10 w-[100%] md:w-[80%] ml-0 md:ml-[10px] mt-[10px] md:mt-20'>
            <div className='font-extrabold text-3xl md:text-5xl text-white'>Ready to get started?</div>
            <div className='text-gray-400 w-[90%] mt-3 md:mt-10 text-[8px] md:text-[16px]'>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</div>
            <div className='font-sans mt-3 md:mt-10 flex gap-5'>
              <button className='bg-white text-black md:font-semibold text-[10px] md:text-[16px] w-36 md:px-5 px-1 py-0 rounded-md hover:bg-red-500 transition duration-300 flex justify-center items-center gap-3'>Download App <span className='text-[20px]'><HiArrowLongRight /></span></button>

            </div>
          </div>
          <div className=' w-96 h-52 md:h-96  '>
            <img className='absolute top-28 right-20 md:right-40 w-32 md:w-60 z-40 ' src={BlkMob1} alt="iPhone2" />
            <img className='absolute top-10 right-0 z-30 w-[130px] md:w-[250px] ' src={BlkMob2} alt="iPhone1" />
            <img className='absolute top-5 right-0 z-20 w-14 md:w-28' src={BlkMob3} alt="iPhone3" />
            <img className='absolute top-[-170px] md:top-[-150px] right-[-150px] w-72 md:w-96 h-[400px] invert' src={Ellipse} alt="Ellipse" />
            <img className='absolute top-[-150px] md:top-[-100px] right-[-150px] w-72 md:w-96 h-[400px] invert' src={Ellipse} alt="Ellipse" />
            <img className='absolute top-[-130px] md:top-[-70px] right-[-150px] w-72 md:w-96 h-[400px] invert' src={Ellipse} alt="Ellipse" />
            <img className='absolute z-[10] right-[-40px] md:right-[-20px] w-72 md:w-[300px] top-0 md:top-32 h-[400px]' src={Spray} alt="Star" />
          </div>
        </div>
      </div>
  )
}

export default Compartment7
