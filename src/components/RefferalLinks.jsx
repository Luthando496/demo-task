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
    <article className="px-4 md:px-10 py-5 bg-white rounded-lg shadow-2xl relative">
    <FaRegTimesCircle className="absolute top-0 right-0 mt-2 mr-3 text-2xl"  />
    <div className="grid grid-cols-3  lg:grid-cols-5 items-center gap-4 mt-10">
      <div className="w-full text-center flex flex-col cursor-pointer justify-center items-center" onClick={onClickButton}>
        <AiOutlineFileProtect className="text-3xl md:text-4xl text-gray-500" />
        <h2 className="md:text-2xl font-semibold">Travel <br className='' />Insurance</h2>
      </div>
      <div className="w-full text-center flex flex-col cursor-pointer justify-center items-center" onClick={onClickButton}>
        <BiBed className="text-3xl md:text-4xl text-gray-500" />
        <h2 className="md:text-2xl font-semibold">Hotel </h2>
      </div>
      <div className="w-full text-center flex flex-col cursor-pointer justify-center items-center" onClick={onClickButton}>
        <BsPersonUp className="text-3xl md:text-4xl text-gray-500" />
        <h2 className="md:text-2xl font-semibold">Attractions </h2>
      </div>
      <div className="w-full text-center flex flex-col cursor-pointer justify-center items-center" onClick={onClickButton}>
        <IoMdAirplane className="text-3xl md:text-4xl text-gray-500" />
        <h2 className="md:text-2xl font-semibold">Flights</h2>
      </div>
      <div className="w-full text-center flex flex-col cursor-pointer justify-center items-center" onClick={onClickButton}>
        <AiOutlineCar className="text-3xl md:text-4xl text-gray-500" />
        <h2 className="md:text-2xl font-semibold">Car <br className='' />Rental</h2>
      </div>
    </div>

    </article>
    </section>
    </>,
    document.getElementById('links')
  )
}

export default RefferalLinks