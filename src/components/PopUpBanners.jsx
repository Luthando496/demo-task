import React,{useState} from 'react'
import { TypeAnimation } from 'react-type-animation';
import {createPortal} from 'react-dom'



const PopUpBanners = ({handlePop}) => {

  const handleChange=()=>{
    handlePop()
  }
  
  return  createPortal(
    <>
    {popBanner && (
    <section className="w-full min-h-screen  bg-white relative">
      <div className='fixed z-[1] top-0 left-0 w-full h-full overlay-bg'></div>
      <div className='absolute h-full flex  px-4 w-full justify-center items-center'>
        <article className="px-10 z-10 my-4 md:px-10 py-5 bg-white rounded-2xl xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="img w-full  flex justify-center md:w-[12rem]">
            <img src="https://www.pngall.com/wp-content/uploads/8/Vector-Travel-PNG-Free-Download.png" alt="travel-image" className="w-full h-[13rem] lg:h-auto object-contain  lg:object-cover" />
          </div>

          <div className="text-article px-2 text-center">
            <h2 className="text-xl leading-[1.5] md:text-3xl font-semibold md:font-bold">
              Would you also like to <br />  book  these  services <br className='' />  <TypeAnimation
      sequence={[
        'Flight Tickets',
        900,
        'travel insurance', //  Continuing previous Text
        900,
        'accommodation', //  Continuing previous Text
        900,
        'activities',
        900,
        'car rental',
        900,
      ]}
      className='text-xl md:text-3xl font-semibold md:font-bold text-green-1'
      
      repeat={Infinity}
    /><br className='' />  While we automatically<br className='' /> create <br className='' />  a <span className="text-green-1">well-rounded-itinerary<br className='' /></span> for you.
            </h2>
            <div className="flex mt-10 lg:justify-center lg:items-center  ">
            <div className="flex-col w-full lg:w-none lg:flex-row lg:bg-gray-1 flex gap-4 px-4 py-2">
              <button onClick={handleChange} className="px-8 lg:px-16 py-3 hover:bg-gray-500 duration-300 rounded-2xl bg-green-1 text-white font-semibold text-xl">Yes</button>
              <button className="px-8 lg:px-16 py-3 hover:bg-gray-500 duration-300 rounded-2xl bg-green-1 text-white font-semibold text-xl">No</button>
            </div>
              
            </div>
          </div>

          </div>

        </article>
      </div>


    </section>)}
    </>,
    document.getElementById('popBanner')
  )
}

export default PopUpBanners