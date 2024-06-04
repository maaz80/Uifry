{/* 6th FAQ Compartment */}
import React from 'react'
import Star from "../images/Star.png"

const Compartment6 = () => {
  return (
     <div className='w-[100%] md:w-[60%] m-auto mt-5 md:mt-20 p-2 md:p-7 '>
     <div className='ml-2 relative'>
       <div className='text-red-500'>FAQ</div>
       <div className='font-extrabold text-3xl w-72'>Frequently Asked Questions</div>
       <img className='absolute right-[280px] w-12 top-12' src={Star} alt="Star" />
       <img className='absolute left-[-180px] w-10 top-[700px]' src={Star} alt="Star" />
       <img className='absolute right-[8px] md:right-[-180px] w-16 top-[-58px] md:top-[650px]' src={Star} alt="Star" />
     </div>

     {/* Texts */}
     <div className='flex flex-col md:flex-row m-auto w-[98%] gap-4 mt-5'>
       <div className='bg-red-500 w-[98%] rounded-md text-white p-5'>
         <div className='font-bold text-xl '>The best financial accounting app ever!</div>
         <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
       </div>
       <div className=' w-[98%] rounded-md  p-5'>
         <div className='font-bold text-xl '>The best financial accounting app ever!</div>
         <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
       </div>
       <div>
       </div>
     </div>
     {/* Texts */}
     <div className='flex flex-col md:flex-row m-auto w-[98%] gap-4 mt-5'>
       <div className=' w-[98%] rounded-md  p-5'>
         <div className='font-bold text-xl '>The best financial accounting app ever!</div>
         <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
       </div>
       <div className='bg-red-500 w-[98%] rounded-md text-white p-5'>
         <div className='font-bold text-xl '>The best financial accounting app ever!</div>
         <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
       </div>
       <div>
       </div>
     </div>
     {/* Texts */}
     <div className='flex flex-col md:flex-row m-auto w-[98%] gap-4 mt-5'>
       <div className='bg-red-500 w-[98%] rounded-md text-white p-5'>
         <div className='font-bold text-xl '>The best financial accounting app ever!</div>
         <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
       </div>
       <div className=' w-[98%] rounded-md  p-5'>
         <div className='font-bold text-xl '>The best financial accounting app ever!</div>
         <div className='font-light'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
       </div>
       <div>
       </div>
     </div>
   </div>

  )
}

export default Compartment6
