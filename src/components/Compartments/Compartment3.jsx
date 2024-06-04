{/* 3rd Compartment */}
import React from 'react'
import Star from "../images/Star.png"
import Bell from "../images/Bell.png"
import Image from "../images/Image.png"
import Iphone1 from "../images/Iphone1.png"
import Spray from "../images/Spray.png"
import Ellipse from "../images/Ellipse.png"

const Compartment3 = () => {
  return (
 <div className=' flex  items-center justify-center relative mt-28 md:mt-40'>

 <div className='md:ml-60 ml-2 md:mt-0 mt-[460px]'>
   <div className='text-red-400 font-sans'>ADVANTAGES</div>
   <h1 className='font-extrabold text-4xl md:text-5xl'>Why Choose Uifry?</h1>
   <div>
     <div className='font-bold font-sans flex items-center mt-10 text-xl md:text-3xl '><img className='mr-1 md:mr-3 w-7 md:w-12' src={Bell} alt="StarRed" />Clever Notifications</div>
     <div className='text-gray-400 w-[95%] md:w-[40%] mt-5 text-xl'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
   </div>

 </div>
 <div >
   <div className=' bg-white shadow-xl w-44 h-14 rounded-md  absolute z-50 right-6 md:right-56 top-40 md:top-60 flex justify-between p-1 item-center'>
     <img className='w-10 h-10 mt-1' src={Image} alt="Image" />
     <div className='ml-[-40px]'>
       <div className='font-bold'>$340</div>
       <div className='text-[10px]'>From Adam</div>
     </div>
     <div className='text-red-500 text-[8px]'>On Hold</div>
   </div>
   <img className='absolute left-[276px] md:left-[600px] w-10 top-[422px] md:top-[460px]' src={Star} alt="Star" />
   <img className='absolute right-[10px] w-12 top-[-60px]' src={Star} alt="Star" />
   <img className='absolute top-[-30px] right-14 md:right-60 w-72 md:w-96 z-30 transform rotate-[15deg]' src={Iphone1} alt="iPhone2" />
   <img className='absolute top-0 right-10  md:right-[210px] w-72  md:w-96 ' src={Ellipse} alt="iPhone3" />
   <img className='absolute top-7 right-14  md:right-[230px] w-72  md:w-96 ' src={Ellipse} alt="iPhone3" />
   <img className='absolute top-16 right-16  md:right-[250px] w-72  md:w-96 ' src={Ellipse} alt="iPhone3" />
   <img className='absolute z-[-10] right-[3px] md:right-2  w-[600px] top-[-120px] md:top-[-60px] h-[500px]' src={Spray} alt="Star" />
 </div>
</div>

  )
}

export default Compartment3
