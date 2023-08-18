import React,{useState} from 'react'
import { TypeAnimation } from 'react-type-animation';
import {createPortal} from 'react-dom'



const PopUpBanners = ({handlePop}) => {

  const handleChange=()=>{
    handlePop()
  }
  
  return  createPortal(
    <>
        {/* <section className="flex px-4 w-full justify-center items-center mt-14">
    <article className="px-4 md:px-10 py-5 bg-white rounded-lg shadow-xl">
      <div className="flex gap-4 items-start">
      <div className="img w-[10rem] md:w-[8rem]">
        <img src="https://www.pngall.com/wp-content/uploads/8/Vector-Travel-PNG-Free-Download.png" alt="travel-image" className="w-full object-cover" />
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
        <div className="flex mt-10 justify-center items-center gap-6">
          <button className="px-8 lg:px-12 py-3 rounded-2xl bg-lime-500 text-white font-semibold text-xl">Yes</button>
          <button className="px-8 lg:px-12 py-3 rounded-2xl bg-lime-500 text-white font-semibold text-xl">No</button>
        </div>
      </div>

      </div>

    </article>

    </section> */}


    {popBanner && (<section className="flex px-4 w-full justify-center items-center mt-24">
    <article className="px-4 md:px-10 py-5 bg-white rounded-lg shadow-xl">
      <div className="flex gap-4 items-start">
      <div className="img w-[10rem] md:w-[9rem]">
        <img src="https://www.pngall.com/wp-content/uploads/8/Vector-Travel-PNG-Free-Download.png" alt="travel-image" className="w-full object-cover" />
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
        <div className="flex mt-10 justify-center items-center  ">
        <div className="rounded-2xl bg-gray-500 flex gap-4 px-4 py-2">
          <button onClick={handleChange} className="px-8 lg:px-12 py-3 rounded-2xl bg-lime-500 text-white font-semibold text-xl">Yes</button>
          <button className="px-4 lg:px-8 py-3 rounded-2xl  text-white font-semibold text-xl">No</button>
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