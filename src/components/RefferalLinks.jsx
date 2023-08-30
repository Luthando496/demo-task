import React from 'react'
import {createPortal} from 'react-dom'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsPersonUp} from 'react-icons/bs'
import {IoMdAirplane} from 'react-icons/io'
import {MdCarRental,MdOutlineAttractions} from 'react-icons/md'
import {LuBedDouble} from 'react-icons/lu'
import {AiOutlineFileProtect,} from 'react-icons/ai'


const RefferalLinks = ({handleLinks}) => {

  const onClickButton = () => {
    handleLinks()
  }
  return createPortal(
    <>
    <section className="bg-white min-h-screen relative">
    <div className='fixed z-[1] top-0 left-0 w-full h-full bg-black/10'></div>

    <div className="absolute flex px-10 w-full md:justify-center items-center h-full">
    <article className="px-4 z-10 w-full md:px-10 py-5 bg-white rounded-2xl relative">
    <FaRegTimesCircle className="absolute top-0 right-0 mt-2 mr-3 text-2xl"  />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8   lg:grid-cols-5 items-center md:gap-4 mt-10">
      <div className="rounded-2xl px-2 md:px-0 bg-gray-500/30 flex justify-between py-2  w-[70%] mx-auto md:text-center md:flex md:flex-col cursor-pointer md:justify-center md:bg-white md:items-center" onClick={onClickButton}>
        <AiOutlineFileProtect className="text-2xl text-black lg:text-3xl md:text-4xl md:text-black" />
        <h2 className="md:text-2xl font-semibold">Travel <br className='hidden md:block ' />Insurance</h2>
      </div>
      <div className="rounded-2xl px-2 md:px-0 bg-gray-500/30 flex justify-between py-2  w-[70%] mx-auto md:text-center md:flex md:flex-col cursor-pointer md:justify-center md:bg-white md:items-center" onClick={onClickButton}>
        <LuBedDouble className="text-2xl text-black lg:text-3xl md:text-4xl md:text-black" />
        <h2 className="md:text-2xl font-semibold">Hotel </h2>
      </div>
      <div className="rounded-2xl px-2 md:px-0 bg-gray-500/30 flex justify-between py-2  w-[70%] mx-auto md:text-center md:flex md:flex-col cursor-pointer md:justify-center md:bg-white md:items-center" onClick={onClickButton}>
        <MdOutlineAttractions className="text-2xl text-black lg:text-3xl md:text-4xl md:text-black" />
        <h2 className="md:text-2xl font-semibold">Attractions </h2>
      </div>
      <div className="rounded-2xl px-2 md:px-0 bg-gray-500/30 flex justify-between py-2  w-[70%] mx-auto md:text-center md:flex md:flex-col cursor-pointer md:justify-center md:bg-white md:items-center" onClick={onClickButton}>
        <IoMdAirplane className="text-2xl text-black lg:text-3xl md:text-4xl md:text-black" />
        <h2 className="md:text-2xl font-semibold">Flights</h2>
      </div>
      <div className="rounded-2xl px-2 md:px-0 bg-gray-500/30 flex justify-between py-2  w-[70%] mx-auto md:text-center md:flex md:flex-col cursor-pointer md:justify-center md:bg-white md:items-center" onClick={onClickButton}>
        <MdCarRental className="text-2xl text-black lg:text-3xl md:text-4xl md:text-black" />
        <h2 className="md:text-2xl font-semibold">Car <br className='hidden md:block ' />Rental</h2>
      </div>
    </div>

    </article>

    </div>
    
    </section>
    </>,
    document.getElementById('links')
  )
}

export default RefferalLinks