import React from 'react'

const Alert = ({handleAlert}) => {
  return (
    <>
    <section className="bg-white min-h-screen w-full">
    <div className='fixed z-[1] top-0 left-0 w-full h-full bg-black/10'></div>
    <div className="absolute flex px-4 w-full justify-center items-center h-full">
    <article className="px-4 z-10 md:px-10 py-10 bg-white rounded-lg shadow-2xl relative">
        <h1 className="text-2xl lg:text-3xl text-center fon-bold text-black">We have begun creating your well rounded itinerary</h1>

        <div className="mt-10 flex justify-center items-center">
        <div className="flex  flex-col gap-3 md:gap-8 md:w-auto md:flex-row">
            <button onClick={()=> handleAlert()} className=" bg-green-800 text-white hover:bg-gray-500 duration-300 text-[14px] md:text-xl rounded-xl px-2 lg:px-6 py-2">Preview Itinerary</button>
            <button className="bg-green-800 text-white hover:bg-gray-500 duration-300 text-[14px] md:text-xl rounded-xl px-2 lg:px-6 py-2">Continue Planning</button>
        </div>
        </div>
    

    </article>

    </div>
    </section>
    </>
  )
}

export default Alert