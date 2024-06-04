import React from 'react'
import Star from "../images/Star.png"
import Spray from "../images/Spray.png"
import Iphone1 from "../images/Iphone1.png"
import Iphone2 from "../images/Iphone2.png"
import Ellipse from "../images/Ellipse.png"
import BigText from "../images/BigText.png"
import Patti from "../images/Patti.png"
import { HiArrowLongRight } from "react-icons/hi2";
import { BiPlayCircle } from 'react-icons/bi'

const Compartment1 = () => {
  return (
    <div>
       <img className='absolute left-16 w-10 top-10' src={Star} alt="Star" />
      <img className='absolute right-16 w-16 top-[-20px]' src={Star} alt="Star" />
      <img className='absolute left-80 w-10 top-[460px]' src={Star} alt="Star" />
      <img className='absolute right-[570px] w-12 top-[550px]' src={Star} alt="Star" />

      <img className='absolute z-[-10] left-0 md:left-80 w-[500px] top-0 md:top-[-30px]' src={Spray} alt="Star" />
      <img className='absolute z-[-10] right-8 md:right-52 w-[500px] top-[520px] md:top-72 h-[300px] md:h-[600px]' src={Spray} alt="Star" />

      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="mb-10 w-full lg:w-2/5 lg:ml-[-150px] mt-32 px-4 lg:px-0">
          <img src={BigText} alt="Heading" className="w-full" />
          <div className="text-gray-400 w-full lg:w-4/5 mt-10">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
          <div className="font-sans mt-10 flex items-center flex-row gap-5">
            <button className="bg-black text-white px-5 py-3 rounded-md hover:bg-red-500 transition duration-300 flex justify-center items-center gap-3">
              Get Started <span className="text-[20px]"><HiArrowLongRight /></span>
            </button>
            <button className="flex justify-center items-center hover:text-red-500 ">
              <span className="text-3xl"><BiPlayCircle /></span>Watch Video
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-80 h-80 mt-10 lg:mt-0">
          <img className="absolute top-2 md:top-[-30px] md:left-0 left-16 w-40 lg:w-96 z-30" src={Iphone2} alt="iPhone2" />
          <img className="absolute top-5 md:top-16 left-[33%] lg:left-[110px] z-20 w-[150px] lg:w-[550px]" src={Iphone1} alt="iPhone1" />
          <img className="absolute top-7 md:top-36 left-[44%] lg:left-[220px] z-10 w-40 lg:w-96" src={Iphone2} alt="iPhone3" />
          <img className="absolute top-[-30px] md:top-0 left-[40%] lg:left-[180px] w-48 lg:w-96 h-[200px] lg:h-[400px]" src={Ellipse} alt="Ellipse" />
          <img className="absolute top-[-20px] md:top-7 left-[35%] lg:left-[160px] w-48 lg:w-96 h-[200px] lg:h-[400px]" src={Ellipse} alt="Ellipse" />
          <img className="absolute top-[-10px] md:top-16 left-[30%] lg:left-[140px] w-48 lg:w-96 h-[200px] lg:h-[400px]" src={Ellipse} alt="Ellipse" />
        </div>
      </div>

      <div>
        <img className='ml-[-10px] md:ml-48 ' src={Patti} alt="" />
      </div>
    </div>
  )
}

export default Compartment1
