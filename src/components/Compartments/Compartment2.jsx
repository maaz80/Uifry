{/* 2nd Compartment */}
import React from 'react'
import Spray from "../images/Spray.png"
import Iphone2 from "../images/Iphone2.png"
import Ellipse from "../images/Ellipse.png"
import StarRed from "../images/StarRed.png"
import Cube1 from "../images/Cube1.png"
import Cube2 from "../images/Cube2.png"

const Compartment2 = () => {
  return (
    <div className=' flex  items-center justify-center relative'>
    <div >
      <img className='absolute top-12 md:top-[-30px] left-10 md:left-60 w-72 md:w-96 z-30 transform rotate-[15deg]' src={Iphone2} alt="iPhone2" />
      <img className='absolute top-20 md:top-0 left-10 md:left-[250px] w-80  md:w-96 ' src={Ellipse} alt="iPhone3" />
      <img className='absolute top-28 md:top-7 left-8 md:left-[230px] w-80  md:w-96 ' src={Ellipse} alt="iPhone3" />
      <img className='absolute top-36 md:top-16 left-4 md:left-[210px] w-80  md:w-96 ' src={Ellipse} alt="iPhone3" />
      <img className='absolute z-[-10] left-[-100px] md:left-2 w-[600px] top-[-60px] h-[500px]' src={Spray} alt="Star" />
    </div>

    <div className=' md:ml-[900px] md:mt-0 mt-[520px]'>
      <div className='text-red-400 font-sans'>FEATURES</div>
      <h1 className='font-extrabold text-5xl'>Uifry Premium</h1>
      <div>
        <div className='font-bold font-sans flex mt-10'><img className='mr-3' src={StarRed} alt="StarRed" />Budjeting Intervals</div>
        <div className='text-gray-400 w-[98%] m-auto md:m-0  md:w-[70%] '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
      </div>
      <div>
        <div className='font-bold font-sans flex mt-10'><img className='mr-3' src={Cube1} alt="StarRed" />Budjeting Intervals</div>
        <div className='text-gray-400 w-[98%] m-auto md:m-0  md:w-[70%] '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
      </div>
      <div>
        <div className='font-bold font-sans flex mt-10'><img className='mr-3' src={Cube2} alt="StarRed" />Budjeting Intervals</div>
        <div className='text-gray-400 w-[98%] m-auto md:m-0  md:w-[70%] '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
      </div>
    </div>
  </div>
  )
}

export default Compartment2
