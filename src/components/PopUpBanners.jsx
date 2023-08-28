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
    <section className="flex px-4 w-full justify-center items-center mt-24">
    <article className="px:10  md:px-10 py-5 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col gap-4 items-center">
      <div className="img w-full  flex justify-center md:w-[9rem]">
        <img src="https://www.pngall.com/wp-content/uploads/8/Vector-Travel-PNG-Free-Download.png" alt="travel-image" className="w-full h-[16rem] lg:h-auto object-fill  lg:object-cover" />
      </div>

      <div className="text-article">
        <h2 className="text-xl md:text-3xl font-semibold md:font-bold">
          Would you also like to book <br className='hidden md:block' /> these services <TypeAnimation
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
  className='text-xl md:text-3xl font-semibold md:font-bold text-lime-500'
  
  repeat={Infinity}
/>
        </h2>
        <div className="flex mt-10 lg:justify-center lg:items-center  ">
        <div className="lg:rounded-2xl flex-col w-full lg:w-none lg:flex-row lg:bg-gray-500 flex gap-4 px-4 py-2">
          <button onClick={handleChange} className="px-8 lg:px-16 py-3 rounded-2xl bg-lime-500 text-white font-semibold text-xl">Yes</button>
          <button className="px-8 lg:px-10 py-3 rounded-2xl bg-gray-500 lg:bg-w-none  text-white font-semibold text-xl">No</button>
        </div>
          
        </div>
      </div>

      </div>

    </article>

    </section>)}
    </>,
    document.getElementById('popBanner')
  )
}

export default PopUpBanners