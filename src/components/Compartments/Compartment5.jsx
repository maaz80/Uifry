{/* 5th Compartment */}
import React from 'react'
import Spray from "../images/Spray.png"
import Ellipse from "../images/Ellipse.png"
import RB from "../images/RB.png"
import RT from "../images/RT.png"
import LB from "../images/LB.png"
import LT from "../images/LT.png"
import Center from "../images/Center.png"
import Comma from "../images/Comma.png"
import Comma1 from "../images/Comma1.png"
import Dps from "../images/Dps.png"
import Star from "../images/Star.png"
import StarInRound from "../images/StarInRound.png"

const Compartment5 = () => {
  return (
<div className='text-center mt-16 md:mt-72'>
<div>
  <div className=' '>TESTIMONIALS</div>
  <div className='font-extrabold text-4xl flex-col flex'>What Our Users <span> Say About Us?</span></div>
</div>

<div className=' flex md:flex-row flex-col items-center justify-center relative mt-20'>
  <div >
    <img className='absolute left-10 md:left-20 w-10 top-[360px] md:top-[460px]' src={Star} alt="Star" />
    <img className='absolute right-[300px] md:right-[330px] w-12 top-[-230px] md:top-[-280px]' src={Star} alt="Star" />
    <img className='absolute top-0 left-[60px] md:left-[250px] w-72 md:w-96 ' src={Ellipse} alt="iPhone3" />
    <img className='absolute top-7 left-[40px] md:left-[230px] w-72 md:w-96 ' src={Ellipse} alt="iPhone3" />
    <img className='absolute top-16 left-[20px] md:left-[210px] w-72 md:w-96 ' src={Ellipse} alt="iPhone3" />
    <img className='absolute z-[-10] left-[-40px] md:left-20 w-[600px] top-[-40px] h-[500px]' src={Spray} alt="Star" />
    <img className='absolute z-[10] left-28 md:left-80 w-44 md:w-72 top-[100px] md:top-[120px] h-44 md:h-72' src={Center} alt="Star" />
    <div>
      <img className='relative z-[20] left-40 md:left-[472px] w-12 md:w-16 top-[140px] md:top-[183px] h-12 md:h-16' src={Comma} alt="Star" />
      <img className='absolute z-[20] left-[210px] md:left-[490px] w-6 md:w-7 top-[153px] md:top-[200px] h-5 md:h-7 ' src={Comma1} alt="Star" />

    </div>
    <div className=' md:w-96 w-72 md:h-96 h-72 relative left-[-30px] md:left-48 top-[-20px] md:top-[-50px] flex flex-col justify-between'>
      <div className='flex justify-between w-[65%] h-auto'>
        <img src={LT} alt="LT" />
        <img src={RT} alt="RT" />
      </div>

      <div className='flex justify-between w-[65%] h-auto ml-[-30px] md:ml-16'>
        <img src={LB} alt="LB" />
        <img src={RB} alt="RB" />
      </div>
    </div>
  </div>

  <div className='ml-4 md:ml-[500px] mt-10 md:mt-0'>
    <div>
      <div className='font-bold font-sans flex mt-10 text-2xl w-[99%] md:w-[80%] text-start'><img className='mr-3 md:w-10 w-8 md:h-10 h-8' src={StarInRound} alt="StarRed" />The Best Financial Accounting App Ever!</div>
      <div className='text-gray-400 w-[99%] md:w-[80%] mt-5 text-xl text-start'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
      <img className='mt-5' src={Dps} alt="" />
      <div className='font-extrabold mt-5 text-start'>Nick Jonus</div>
    </div>
  </div>
</div>
</div>
  )
}

export default Compartment5
