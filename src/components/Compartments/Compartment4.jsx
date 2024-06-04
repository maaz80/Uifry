{/* 4th Compartment */}
import React from 'react'
import StarInRound from "../images/StarInRound.png"
import WhiteFrame from "../images/WhiteFrame.png"
import Visa from "../images/Visa.png"
import Iphone2 from "../images/Iphone2.png"
import Spray from "../images/Spray.png"
import Ellipse from "../images/Ellipse.png"

const Compartment4 = () => {
  return (
    <div className=' flex  items-center justify-center relative mt-16 md:mt-72'>
    <div >
      <div className='bg-black text-white absolute z-50 w-56 md:w-72 h-32 md:h-40 rounded-2xl left-[105px] md:left-[330px] top-[80px] md:top-[115px] flex flex-col justify-between py-3 px-3'>
        <div className='flex justify-between'>
          <div className='flex text-[9px] md:text-[12px]'><img className='md:w-5  w-3 md:h-5  h-3' src={WhiteFrame} alt="" />Unifry</div>
          <img className='w-10 h-4' src={Visa} alt="" />
        </div>
        <div>
          <div className='mb-2'>0000 8888 2222 3333</div>
          <div className='text-[5px]'>VALID THRU <span className='text-[8px] ml-2'>07/24</span></div>
        </div>
      </div>
      <img className='absolute top-[-30px] left-10 md:left-60 w-72 md:w-96 z-30 transform rotate-[15deg]' src={Iphone2} alt="iPhone2" />
      <img className='absolute top-0 left-[60px] md:left-[250px] w-72 md:w-96 ' src={Ellipse} alt="Elipsis" />
      <img className='absolute top-7 left-[40px] md:left-[230px] w-72 md:w-96 ' src={Ellipse} alt="Elipsis" />
      <img className='absolute top-16 left-[20px] md:left-[210px] w-72 md:w-96 ' src={Ellipse} alt="Elipsis" />
      <img className='absolute z-[-10] left-[-70px] md:left-2 w-[600px] top-0 md:top-[-60px] h-[500px]' src={Spray} alt="Star" />
    </div>

    <div className='ml-4 md:ml-[900px] mt-96 md:mt-20'>
      <div>
        <div className='font-bold font-sans flex mt-10 text-2xl items-center md:text-3xl'><img className='mr-3 w-9 md:w-12' src={StarInRound} alt="StarRed" />Fully Customizable</div>
        <div className='text-gray-400 w-[97%] md:w-[86%] mt-5 text-lg md:text-xl'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
      </div>
    </div>
  </div>
  )
}

export default Compartment4
