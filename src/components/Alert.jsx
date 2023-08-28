import React from 'react'

const Alert = ({handleAlert}) => {
  return (
    <>
    <section className="flex px-4 w-full justify-center items-center mt-24">
    <article className="px-4 md:px-10 py-10 bg-white rounded-lg shadow-2xl relative">
        <h1 className="text-2xl lg:text-3xl text-center fon-bold text-black">We have begun creating your well rounded itinerary</h1>

        <div className="mt-10 flex justify-center items-center">
        <div className="flex w-full flex-col gap-3 md:gap-8  md:flex-row">
            <button onClick={()=> handleAlert()} className=" bg-green-800 text-white text-base md:text-xl rounded-xl px-4 lg:px-6 py-2">Preview Itinerary</button>
            <button className="bg-green-800 text-white text-base md:text-xl rounded-xl px-4 lg:px-6 py-2">Continue Planning</button>
        </div>
        </div>
    

    </article>
    </section>
    </>
  )
}

export default Alert