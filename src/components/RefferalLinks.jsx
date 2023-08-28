import React from 'react'
import {createPortal} from 'react-dom'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsPersonUp} from 'react-icons/bs'
import {IoMdAirplane} from 'react-icons/io'
import {BiBed} from 'react-icons/bi'
import {AiOutlineFileProtect,AiOutlineCar} from 'react-icons/ai'


const RefferalLinks = ({handleLinks}) => {

  const onClickButton = () => {
    handleLinks()
  }
  return createPortal(
    <>
    <section className="flex px-4 w-full justify-center items-center mt-24">
    <article className="px-4 w-full md:px-10 py-5 bg-white rounded-lg shadow-2xl relative">
    <FaRegTimesCircle className="absolute top-0 right-0 mt-2 mr-3 text-2xl"  />
    <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 items-center gap-4 mt-10">
      <div className="rounded-2xl px-2 md:px-0 bg-gray-500/30 flex justify-between py-2  w-full md:text-center md:flex md:flex-col cursor-pointer md:justify-center md:bg-white md:items-center" onClick={onClickButton}>
        <AiOutlineFileProtect className="text-xl text-black lg:text-3xl md:text-4xl md:text-gray-500" />
        <h2 className="md:text-2xl font-semibold">Travel <br className='hidden md:block ' />Insurance</h2>
      </div>
      <div className="rounded-2xl px-2 md:px-0 bg-gray-500/30 flex justify-between py-2  w-full md:text-center md:flex md:flex-col cursor-pointer md:justify-center md:bg-white md:items-center" onClick={onClickButton}>
        <BiBed className="text-xl text-black lg:text-3xl md:text-4xl md:text-gray-500" />
        <h2 className="md:text-2xl font-semibold">Hotel </h2>
      </div>
      <div className="rounded-2xl px-2 md:px-0 bg-gray-500/30 flex justify-between py-2  w-full md:text-center md:flex md:flex-col cursor-pointer md:justify-center md:bg-white md:items-center" onClick={onClickButton}>
        <BsPersonUp className="text-xl text-black lg:text-3xl md:text-4xl md:text-gray-500" />
        <h2 className="md:text-2xl font-semibold">Attractions </h2>
      </div>
      <div className="rounded-2xl px-2 md:px-0 bg-gray-500/30 flex justify-between py-2  w-full md:text-center md:flex md:flex-col cursor-pointer md:justify-center md:bg-white md:items-center" onClick={onClickButton}>
        <IoMdAirplane className="text-xl text-black lg:text-3xl md:text-4xl md:text-gray-500" />
        <h2 className="md:text-2xl font-semibold">Flights</h2>
      </div>
      <div className="rounded-2xl px-2 md:px-0 bg-gray-500/30 flex justify-between py-2  w-full md:text-center md:flex md:flex-col cursor-pointer md:justify-center md:bg-white md:items-center" onClick={onClickButton}>
        <AiOutlineCar className="text-xl text-black lg:text-3xl md:text-4xl md:text-gray-500" />
        <h2 className="md:text-2xl font-semibold">Car <br className='hidden md:block ' />Rental</h2>
      </div>
    </div>

    </article>
    </section>
    </>,
    document.getElementById('links')
  )
}

export default RefferalLinks