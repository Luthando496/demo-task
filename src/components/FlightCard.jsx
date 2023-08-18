import React from 'react'
import {FaRegTimesCircle} from 'react-icons/fa'
import {GiAirplaneDeparture} from 'react-icons/gi'


const FlightCard = ({handleAlert}) => {


  return (
    <section className='w-full my-20'>
    <div className="mx-2 md:mx-14 mt-14 bg-line py-10 relative">
    <FaRegTimesCircle className="absolute text-2xl font-semibold top-1 right-2 text-black" />
    <div className="flex justify-center w-full">
    <div className="px-6 py-5 bg-line2">
      <span className="text-2xl uppercase font-semibold">3 Days Trip To Cape Town</span>
    </div>
    </div>

    {/* ///card */}
    <div className="w-[90%] mx-auto  py-8 my-4 ">
    <div className="flex gap-5 items-center">
      <h2 className="text-4xl text-white  font-semibold">Day 1</h2>
      <span className="text-black font-semibold text-xl">12 December, 2023</span>
    </div>
    <div className="w-full flex gap-3 bg-yellow my-8">

    <div className="w-full col-span-1 flex flex-col justify-between">
    <div className="flex gap-8 items-center">
      <span className="text-sm md:text-xl font-semibold text-black/90">07:80 am</span>
      <GiAirplaneDeparture size={50} className='text-xl lg:text-4xl border-2 rounded-full p-1 lg:p-2 border-black '/>
    </div> 
    <div className="flex gap-8 items-center">
      <span className="text-sm md:text-xl font-semibold text-black/90">07:80 am</span>
      <GiAirplaneDeparture size={50} className='text-xl lg:text-4xl border-2 rounded-full p-1 lg:p-2 border-black '/>
    </div> 

    </div>
    {/*  */}
    <div className="w-full jh col-span-2">
    <h2 className="text-white text-xl font-semibold capitalize">Departing from O.R Tambo International Airport</h2>
    <div className="w-full grid grid-cols-3 ">
    <div className="w col-span-2 border-r-2 border-r-black">
    <div className="grid grid-cols-2 lg:grid-cols-3 items-start gap-x-12 gap-y-4 mt-4">
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold">H1733</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold">1H 30M</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Ticket</h4>
      <span className="text-slate-700 font-bold">1263946393020</span>
    </div>
    </div>
    {/*  */}
    <div className="grid grid-cols-2 gap-4 items-start mt-4 border-r">
    
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Class</h4>
      <span className="text-slate-700 font-bold">1 - Economy : 0 Stop(s)</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Equipment</h4>
      <span className="text-slate-700 font-bold">1 - Economy : 0 Stop(s)</span>
    </div>
    </div>

    </div>
    <div className="col-span-1 flex  items-center">
      <img src="https://beta.ailleursbusiness.com/wp-content/uploads/2016/10/2000px-Avis_logo.svg_.png" alt="kdkdk" className="w-[4rem] lg:w-[8rem] self-center object-cover ml-4" />
    </div>

    </div>
    {/*  */}
    <h3 className="text-xl my-6 capitalize font-semibold text-black">Comments :<span className="text-base text-gray-600 font-semibold"> *Baggage Allowance: Adult 20k *Contact Airline</span></h3>

    <h2 className="text-xl text-gray-700 font-semibold">Landing At Cape Town International Airport</h2>


    </div>
    {/*  */}
    {/* <div className="w-full col-span-1 relative af"> */}

    {/* </div> */}

    </div>
    
    

    </div>
    {/*  */}
    
    {/* ///card */}
    <div className="w-[90%] mx-auto  py-8 my-4">
    <div className="flex gap-5 items-center">
      <h2 className="text-4xl text-white  font-semibold">Day 2</h2>
      <span className="text-black font-semibold text-xl">13 December, 2023</span>
    </div>
    <div className="w-full flex gap-3 bg-yellow my-8">

    <div className="w-full col-span-1 flex flex-col justify-between">
    <div className="flex gap-8 items-center">
      <span className="text-sm md:text-xl font-semibold text-black/90">07:80 am</span>
      <GiAirplaneDeparture size={50} className='text-xl lg:text-4xl border-2 rounded-full p-1 lg:p-2 border-black '/>
    </div> 
    <div className="flex gap-8 items-center">
      <span className="text-sm md:text-xl font-semibold text-black/90">07:80 am</span>
      <GiAirplaneDeparture size={50} className='text-xl lg:text-4xl border-2 rounded-full p-1 lg:p-2 border-black '/>
    </div> 

    </div>
    {/*  */}
    <div className="w-full jh col-span-2">
    <h2 className="text-white text-xl font-semibold capitalize">Departing from O.R Tambo International Airport</h2>
    <div className="w-full grid grid-cols-3 ">
    <div className="w col-span-2 border-r-2 border-r-black">
    <div className="grid grid-cols-2 lg:grid-cols-3 items-start gap-x-12 gap-y-4 mt-4">
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold">H1733</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold">1H 30M</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Ticket</h4>
      <span className="text-slate-700 font-bold">1263946393020</span>
    </div>
    </div>
    {/*  */}
    <div className="grid grid-cols-2 gap-4 items-start mt-4 border-r">
    
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Class</h4>
      <span className="text-slate-700 font-bold">1 - Economy : 0 Stop(s)</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Equipment</h4>
      <span className="text-slate-700 font-bold">1 - Economy : 0 Stop(s)</span>
    </div>
    </div>

    </div>
    <div className="col-span-1 flex  items-center">
      <img src="https://hmgtravel.co.za/wp-content/uploads/2017/04/flysafair-logo.jpg" alt="kdkdk" className="w-[4rem] lg:w-[8rem] self-center object-cover ml-4" />
    </div>

    </div>
    {/*  */}


    </div>
    {/*  */}
    {/* <div className="w-full col-span-1 relative af"> */}

    {/* </div> */}

    </div>
    
    

    </div>
    {/*  */}

    </div>

    <div className="flex justify-center items-center">
        <div className="">
            <button onClick={()=>handleAlert()} className="px-10 text-xl font-semibold rounded-xl bg-green-700 py-3 text-white">Continue Planning</button>
        </div>
    </div>

    </section>
    
  )
}

export default FlightCard