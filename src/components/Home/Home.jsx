import React from 'react'
import Star from "../images/Star.png"
import BigText from "../images/BigText.png"
import Iphone1 from "../images/Iphone1.png"
import Iphone2 from "../images/Iphone2.png"
import { BiPlayCircle } from 'react-icons/bi'
import { HiArrowLongRight } from "react-icons/hi2";
import Spray from "../images/Spray.png"
import Patti from "../images/Patti.png"
import Ellipse from "../images/Ellipse.png"
import StarRed from "../images/StarRed.png"
import Cube1 from "../images/Cube1.png"
import Cube2 from "../images/Cube2.png"
import Bell from "../images/Bell.png"
import Image from "../images/Image.png"
import StarInRound from "../images/StarInRound.png"
import WhiteFrame from "../images/WhiteFrame.png"
import Visa from "../images/Visa.png"
import RB from "../images/RB.png"
import RT from "../images/RT.png"
import LB from "../images/LB.png"
import LT from "../images/LT.png"
import Center from "../images/Center.png"
import Comma from "../images/Comma.png"
import Comma1 from "../images/Comma1.png"
import Dps from "../images/Dps.png"
import BlkMob1 from "../images/BlkMob1.png"
import BlkMob2 from "../images/BlkMob2.png"
import BlkMob3 from "../images/BlkMob3.png"
import Frame from "../images/Frame.png"
import FrameMessage from "../images/FrameMessage.png"
import FrameCall from "../images/FrameCall.png"

const Home = () => {
  return (
    <div className='relative'>
      <img className='absolute left-16 w-10 top-10' src={Star} alt="Star" />
      <img className='absolute right-16 w-16 top-[-20px]' src={Star} alt="Star" />
      <img className='absolute left-80 w-10 top-[460px]' src={Star} alt="Star" />
      <img className='absolute right-[570px] w-12 top-[550px]' src={Star} alt="Star" />

      <img className='absolute z-[-10] left-80 w-[500px] top-[-30px]' src={Spray} alt="Star" />
      <img className='absolute z-[-10] right-52 w-[500px] top-72 h-[600px]' src={Spray} alt="Star" />

      <div className='flex  items-center justify-center'>
        <div className='mb-10 w-[40%] ml-[-150px] mt-32'>
          <img src={BigText} alt="Heading" />
          <div className='text-gray-400 w-[90%] mt-10'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
          <div className='font-sans mt-10 flex gap-5'>
            <button className='bg-black text-white px-5 py-3 rounded-md hover:bg-red-500 transition duration-300 flex justify-center items-center gap-3'>Get Started <span className='text-[20px]'><HiArrowLongRight /></span></button>
            <button className='flex justify-center items-center hover:text-red-500'><span className='text-3xl'><BiPlayCircle /></span>Watch Video</button>
          </div>
        </div>
        <div className='relative w-80 h-80'>
          <img className='absolute top-[-30px] left-0 w-96 z-30' src={Iphone2} alt="iPhone2" />
          <img className='absolute top-16 left-[110px] z-20 w-[550px] ' src={Iphone1} alt="iPhone1" />
          <img className='absolute top-36 left-[220px] z-10  w-96 ' src={Iphone2} alt="iPhone3" />
          <img className='absolute top-0 left-[180px]  w-96 h-[400px] ' src={Ellipse} alt="iPhone3" />
          <img className='absolute top-7 left-[160px]  w-96 h-[400px] ' src={Ellipse} alt="iPhone3" />
          <img className='absolute top-16 left-[140px]  w-96 h-[400px] ' src={Ellipse} alt="iPhone3" />
        </div>
      </div>

      <div>
        <img className='ml-48' src={Patti} alt="" />
      </div>

      {/* 2nd Compartment */}
      <div className=' flex  items-center justify-center relative'>
        <div >
          <img className='absolute top-[-30px] left-60 w-96 z-30 transform rotate-[15deg]' src={Iphone2} alt="iPhone2" />
          <img className='absolute top-0 left-[250px]  w-96 ' src={Ellipse} alt="iPhone3" />
          <img className='absolute top-7 left-[230px]  w-96 ' src={Ellipse} alt="iPhone3" />
          <img className='absolute top-16 left-[210px]  w-96 ' src={Ellipse} alt="iPhone3" />
          <img className='absolute z-[-10] left-2 w-[600px] top-[-60px] h-[500px]' src={Spray} alt="Star" />
        </div>

        <div className=' ml-[900px]'>
          <div className='text-red-400 font-sans'>FEATURES</div>
          <h1 className='font-extrabold text-5xl'>Uifry Premium</h1>
          <div>
            <div className='font-bold font-sans flex mt-10'><img className='mr-3' src={StarRed} alt="StarRed" />Budjeting Intervals</div>
            <div className='text-gray-400 w-[70%] '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
          </div>
          <div>
            <div className='font-bold font-sans flex mt-10'><img className='mr-3' src={Cube1} alt="StarRed" />Budjeting Intervals</div>
            <div className='text-gray-400 w-[70%] '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
          </div>
          <div>
            <div className='font-bold font-sans flex mt-10'><img className='mr-3' src={Cube2} alt="StarRed" />Budjeting Intervals</div>
            <div className='text-gray-400 w-[70%] '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
          </div>
        </div>
      </div>

      {/* 3rd Compartment */}
      <div className=' flex  items-center justify-center relative mt-40'>

        <div className='ml-60'>
          <div className='text-red-400 font-sans'>ADVANTAGES</div>
          <h1 className='font-extrabold text-5xl'>Why Choose Uifry?</h1>
          <div>
            <div className='font-bold font-sans flex mt-10 text-3xl'><img className='mr-3' src={Bell} alt="StarRed" />Clever Notifications</div>
            <div className='text-gray-400 w-[40%] mt-5 text-xl'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
          </div>

        </div>
        <div >
          <div className=' bg-white shadow-xl w-44 h-14 rounded-md  absolute z-50 right-56 top-60 flex justify-between p-1 item-center'>
            <img className='w-10 h-10 mt-1' src={Image} alt="Image" />
            <div className='ml-[-40px]'>
              <div className='font-bold'>$340</div>
              <div className='text-[10px]'>From Adam</div>
            </div>
            <div className='text-red-500 text-[8px]'>On Hold</div>
          </div>
          <img className='absolute left-[600px] w-10 top-[460px]' src={Star} alt="Star" />
          <img className='absolute right-[10px] w-12 top-[-60px]' src={Star} alt="Star" />
          <img className='absolute top-[-30px] right-60 w-96 z-30 transform rotate-[15deg]' src={Iphone1} alt="iPhone2" />
          <img className='absolute top-0 right-[210px]  w-96 ' src={Ellipse} alt="iPhone3" />
          <img className='absolute top-7 right-[230px]  w-96 ' src={Ellipse} alt="iPhone3" />
          <img className='absolute top-16 right-[250px]  w-96 ' src={Ellipse} alt="iPhone3" />
          <img className='absolute z-[-10] right-2 w-[600px] top-[-60px] h-[500px]' src={Spray} alt="Star" />
        </div>
      </div>

      {/* 4th Compartment */}
      <div className=' flex  items-center justify-center relative mt-72'>
        <div >
          <div className='bg-black text-white absolute z-50 w-72 h-40 rounded-2xl left-[330px] top-[115px] flex flex-col justify-between py-3 px-3'>
            <div className='flex justify-between'>
              <div className='flex'><img src={WhiteFrame} alt="" />Unifry</div>
              <img className='w-10 h-4' src={Visa} alt="" />
            </div>
            <div>
              <div className='mb-2'>0000 8888 2222 3333</div>
              <div className='text-[5px]'>VALID THRU <span className='text-[8px]'>07/24</span></div>
            </div>
          </div>
          <img className='absolute top-[-30px] left-60 w-96 z-30 transform rotate-[15deg]' src={Iphone2} alt="iPhone2" />
          <img className='absolute top-0 left-[250px]  w-96 ' src={Ellipse} alt="iPhone3" />
          <img className='absolute top-7 left-[230px]  w-96 ' src={Ellipse} alt="iPhone3" />
          <img className='absolute top-16 left-[210px]  w-96 ' src={Ellipse} alt="iPhone3" />
          <img className='absolute z-[-10] left-2 w-[600px] top-[-60px] h-[500px]' src={Spray} alt="Star" />
        </div>

        <div className=' ml-[900px] mt-20'>
          <div>
            <div className='font-bold font-sans flex mt-10 text-3xl'><img className='mr-3' src={StarInRound} alt="StarRed" />Fully Customizable</div>
            <div className='text-gray-400 w-[86%] mt-5 text-xl'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
          </div>
        </div>
      </div>

      {/* 5th Compartment */}
      <div className='text-center mt-72'>
        <div>
          <div className=' '>TESTIMONIALS</div>
          <div className='font-extrabold text-4xl flex-col flex'>What Our Users <span> Say About Us?</span></div>
        </div>

        <div className=' flex  items-center justify-center relative mt-20'>
          <div >
            <img className='absolute left-20 w-10 top-[460px]' src={Star} alt="Star" />
            <img className='absolute right-[330px] w-12 top-[-280px]' src={Star} alt="Star" />
            <img className='absolute top-0 left-[250px]  w-96 ' src={Ellipse} alt="iPhone3" />
            <img className='absolute top-7 left-[230px]  w-96 ' src={Ellipse} alt="iPhone3" />
            <img className='absolute top-16 left-[210px]  w-96 ' src={Ellipse} alt="iPhone3" />
            <img className='absolute z-[-10] left-20 w-[600px] top-[-40px] h-[500px]' src={Spray} alt="Star" />
            <img className='absolute z-[10] left-80 w-72 top-[120px] h-72' src={Center} alt="Star" />
            <div>
              <img className='relative z-[20] left-[472px] w-16 top-[183px] h-16' src={Comma} alt="Star" />
              <img className='absolute z-[20] left-[490px] w-7 top-[200px] h-7' src={Comma1} alt="Star" />

            </div>
            <div className=' w-96 h-96 relative left-48 top-[-50px] flex flex-col justify-between'>
              <div className='flex justify-between w-[65%] h-auto'>
                <img src={LT} alt="LT" />
                <img src={RT} alt="RT" />
              </div>

              <div className='flex justify-between w-[65%] h-auto ml-16'>
                <img src={LB} alt="LB" />
                <img src={RB} alt="RB" />
              </div>
            </div>
          </div>

          <div className=' ml-[500px] '>
            <div>
              <div className='font-bold font-sans flex mt-10 text-2xl w-[80%] text-start'><img className='mr-3 w-10 h-10' src={StarInRound} alt="StarRed" />The Best Financial Accounting App Ever!</div>
              <div className='text-gray-400 w-[80%] mt-5 text-xl text-start'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
              <img className='mt-5' src={Dps} alt="" />
              <div className='font-extrabold mt-5 text-start'>Nick Jonus</div>
            </div>
          </div>
        </div>
      </div>

      {/* 6th FAQ Compartment */}
      <div className='w-[60%] m-auto mt-20  p-7 '>
        <div className='ml-2 relative'>
          <div className='text-red-500'>FAQ</div>
          <div className='font-extrabold text-3xl w-72'>Frequently Asked Questions</div>
          <img className='absolute right-[280px] w-12 top-12' src={Star} alt="Star" />
          <img className='absolute left-[-180px] w-10 top-[700px]' src={Star} alt="Star" />
      <img className='absolute right-[-180px] w-16 top-[650px]' src={Star} alt="Star" />
        </div>

        {/* Texts */}
        <div className='flex m-auto w-[98%] gap-4 mt-5'>
          <div className='bg-red-500 w-[48%] rounded-md text-white p-5'>
            <div className='font-bold text-xl '>The best financial accounting app ever!</div>
            <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div className=' w-[48%] rounded-md  p-5'>
            <div className='font-bold text-xl '>The best financial accounting app ever!</div>
            <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div>
          </div>
        </div>
        {/* Texts */}
        <div className='flex m-auto w-[98%] gap-4 mt-5'>
          <div className=' w-[48%] rounded-md  p-5'>
            <div className='font-bold text-xl '>The best financial accounting app ever!</div>
            <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div className='bg-red-500 w-[48%] rounded-md text-white p-5'>
            <div className='font-bold text-xl '>The best financial accounting app ever!</div>
            <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div>
          </div>
        </div>
        {/* Texts */}
        <div className='flex m-auto w-[98%] gap-4 mt-5'>
          <div className='bg-red-500 w-[48%] rounded-md text-white p-5'>
            <div className='font-bold text-xl '>The best financial accounting app ever!</div>
            <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div className=' w-[48%] rounded-md  p-5'>
            <div className='font-bold text-xl '>The best financial accounting app ever!</div>
            <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div>
          </div>
        </div>
      </div>
       
          {/* 7th  Compartment */}
      <div className='w-[60%] m-auto mt-20  p-7 bg-black rounded-md relative overflow-hidden'>
      <div className='flex  items-center justify-center'>
        <div className='mb-10 w-[80%] ml-[10px] mt-20'>
          <div className='font-extrabold text-5xl text-white'>Ready to get started?</div>
          <div className='text-gray-400 w-[90%] mt-10'>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</div>
          <div className='font-sans mt-10 flex gap-5'>
            <button className='bg-white text-black font-semibold px-5 py-3 rounded-md hover:bg-red-500 transition duration-300 flex justify-center items-center gap-3'>Download App <span className='text-[20px]'><HiArrowLongRight /></span></button>
           
          </div>
        </div>
        <div className=' w-96 h-96 '>
          <img className='absolute top-28 right-40 w-60 z-40 ' src={BlkMob1} alt="iPhone2" />
          <img className='absolute top-10 right-0 z-30 w-[250px] ' src={BlkMob2} alt="iPhone1" />
          <img className='absolute top-5 right-0 z-20 w-28' src={BlkMob3} alt="iPhone3" />
          <img className='absolute top-[-150px] right-[-150px] w-96 h-[400px] invert' src={Ellipse} alt="Ellipse" />
          <img className='absolute top-[-100px] right-[-150px] w-96 h-[400px] invert' src={Ellipse} alt="Ellipse" />
          <img className='absolute top-[-70px] right-[-150px] w-96 h-[400px] invert' src={Ellipse} alt="Ellipse" />
          <img className='absolute z-[10] right-[-20px] w-[300px] top-32 h-[400px]' src={Spray} alt="Star" />
        </div>
      </div>
      </div>

      {/* Footer */}
      <div className='w-[60%]  m-auto font-sans mt-20 flex justify-around'>
        <ul className='flex flex-col gap-3'>
        <li className='font-bold flex items-center text-xl'><img src={Frame} alt="Frame" />Uifry</li>
        <li className='flex items-center hover:text-red-500 transition duration-300  cursor-pointer'><img src={FrameMessage} alt="" />Help@FryBix.com</li>
        <li className='flex items-center hover:text-red-500 transition duration-300  cursor-pointer'><img src={FrameCall} alt="" />+1234 456 678 89</li>
        </ul>

        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-2xl'>Links</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>Home</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>About Us</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>Bookings</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>Blog</li>
        </ul>
        
        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-2xl'>Legal</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>Terms of Use</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>Privacy Policy</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>Cookie Policy</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-2xl'>Products</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>Take Tour</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>Live Chat</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>Reviews</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-2xl'>Newspaper</li>
          <li className='hover:text-red-500 transition duration-300  cursor-pointer'>Stay Upto Date</li>
          <li className='flex'>
            <input className='rounded-md border border-gray-300' type="email" />
            <button className='bg-black text-white font-semibold px-5 py-3 rounded-md hover:bg-red-500 transition duration-300 flex justify-center items-center gap-3'>Submit</button>
          </li>
        </ul>
      </div>
<div className='text-center mt-20 border-t w-[70%] m-auto pt-7'>Copyright 2022 uifry.com all rights reserved</div>

    </div>
  )
}

export default Home
