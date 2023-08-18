import React from 'react'
import {FaRegTimesCircle,FaWhatsapp,FaTelegram} from 'react-icons/fa'
import {BsMessenger} from 'react-icons/bs'
import {GiAirplaneDeparture} from 'react-icons/gi'
import {MdAttachEmail} from 'react-icons/md'


const ThirdFlight = () => {
  return (
    <section className='w-full my-20'>
    <div className="flex justify-center mx-4 md:mx-0 ">
    <div className="shadow-2xl bg-line lg:px-10 relative">
    <FaRegTimesCircle className="absolute text-2xl mt-1 mr-2 font-semibold top-0 right-0 text-black" />
    <div className=" py-10 relative ">
    <div className="flex justify-center w-full">
    <div className="px-6 mb-8 py-5 bg-line2">
      <span className="text-2xl uppercase font-semibold">3 Days Trip To Cape Town</span>
    </div>
    </div>

    {/* ///card */}
    <div className="px-4 py-4">
    <div className="flex gap-5 items-center px-2">
      <h1 className="text-2xl lg:text-4xl text-white  font-semibold">Day 1</h1>
      <span className="text-black font-semibold text-xl">12 December, 2023</span>
    </div>
    <div className="w-full flex gap-3 bg-yellow my-12">

    <div className="w-full col-span-1 flex flex-col justify-between">
    <div className="flex gap-4 md:gap-8 items-center">
      <span className="text-sm md:text-xl font-semibold text-black/90">07:30 am</span>
      <GiAirplaneDeparture  className='text-3xl md:text-5xl border-2 rounded-full p-1 lg:p-2 border-black '/>
    </div>
    <div className="flex gap-4 md:gap-8 items-center">
      <span className="text-sm md:text-xl font-semibold text-black/90">10:30 am</span>
      <GiAirplaneDeparture  className='text-3xl md:text-5xl border-2 rounded-full p-1 lg:p-2 border-black '/>
    </div>

    </div>
    {/*  */}
    <div className="w-full jh col-span-2">
    <h2 className="text-white text-base md:text-xl font-semibold capitalize">Departing from O.R Tambo International Airport</h2>
    <div className="w-full grid grid-cols-3 ">
    <div className="w col-span-2 ">
    <div className="grid grid-cols-2 lg:grid-cols-3 items-start gap-x-12 gap-y-4 mt-4">
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold">H1733</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1H 30M</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Ticket</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1263946393020</span>
    </div>
    </div>
    {/*  */}
    <div className="grid grid-cols-2  gap-4 items-start my-7">
    
    <div className="flex flex-col gap-1 ">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Class</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1 - Economy : 0 Stop(s)</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Equipment</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1 - Economy : 0 Stop(s)</span>
    </div>
    </div>

    <h2 className="text-base md:text-xl text-gray-700 mt-4 font-semibold">Landing At Cape Town International Airport</h2>


    </div>
    <div className="col-span-1 flex lg:border-l-2 lg:border-l-black ml-4 items-end justify-center">
      <img src="https://hmgtravel.co.za/wp-content/uploads/2017/04/flysafair-logo.jpg" alt="kdkdk" className="w-[3.8rem] md:w-[5rem] lg:w-[8rem] self-center object-cover" />
    </div>

    </div>
    {/*  */}


    </div>
    {/*  */}

    </div>
    {/*  */}
    <div className="w-full flex gap-3 bg-yellow my-8">

    <div className="w-full col-span-1 flex flex-col justify-between">
    <div className="flex gap-4 md:gap-8 items-center">
      <span className="text-sm md:text-xl font-semibold text-black/90">10:30 am</span>
      <GiAirplaneDeparture  className='text-3xl md:text-5xl border-2 rounded-full p-1 lg:p-2 border-black '/>
    </div>

    </div>
    {/*  */}
    <div className="w-full jh col-span-2">
    <h2 className="text-white text-base md:text-xl font-semibold capitalize">Departing from Cape Town International Airport</h2>
    <div className="w-full grid grid-cols-3 ">
    <div className="w col-span-2 ">
    <div className="grid grid-cols-2 lg:grid-cols-3 items-start gap-x-12 gap-y-4 mt-4">
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold">H1733</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1H 30M</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Ticket</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1263946393020</span>
    </div>
    </div>
    {/*  */}
    <div className="grid grid-cols-2  gap-4 items-start my-7">
    
    <div className="flex flex-col gap-1 ">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Class</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1 - Economy : 0 Stop(s)</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Equipment</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1 - Economy : 0 Stop(s)</span>
    </div>
    </div>

    </div>
    <div className="col-span-1 flex lg:border-l-2 lg:border-l-black ml-4 items-end justify-center">
      <img src="https://hmgtravel.co.za/wp-content/uploads/2017/04/flysafair-logo.jpg" alt="kdkdk" className="w-[3.8rem] md:w-[5rem] lg:w-[8rem] self-center object-cover" />
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
    
    {/* ///card */}
    <div className="px-4 py-4">
    <div className="flex gap-5 items-center">
      <h2 className="text-2xl lg:text-4xl text-white  font-semibold">Day 2</h2>
      <span className="text-black font-semibold text-xl">13 December, 2023</span>
    </div>
    <div className="w-full flex gap-3 bg-yellow my-8">

    <div className="w-full col-span-1 flex flex-col justify-between">
    <div className="flex gap-4 md:gap-8 items-center">
      <span className="text-sm md:text-xl font-semibold text-black/90">07:80 am</span>
      <GiAirplaneDeparture  className='text-3xl md:text-5xl border-2 rounded-full p-1 lg:p-2 border-black '/>
    </div> 
    

    </div>
    {/*  */}
    <div className="w-full jh col-span-2">
    <h2 className="text-white text-base md:text-xl font-semibold capitalize">Departing from O.R Tambo International Airport</h2>

    <div className="w-full grid grid-cols-3 ">
    <div className="w col-span-2 ">
    <div className="grid grid-cols-2 lg:grid-cols-3 items-start gap-x-12 gap-y-4 mt-4">
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold">H1733</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1H 30M</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Ticket</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1263946393020</span>
    </div>
    </div>
    {/*  */}
    <div className="grid grid-cols-2  gap-4 items-start my-7">
    
    <div className="flex flex-col gap-1 ">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Class</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1 - Economy : 0 Stop(s)</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Equipment</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1 - Economy : 0 Stop(s)</span>
    </div>
    </div>

    </div>
    <div className="col-span-1 flex lg:border-l-2 lg:border-l-black ml-4 items-end justify-center">
      <img src="https://www.centralsquare.co.za/wp-content/uploads/2019/09/MENLYN-MAINE_Property-Logos-with-Descriptor-1-500x500.jpg" alt="kdkdk" className="w-[3.8rem] md:w-[5rem] lg:w-[8rem] self-center object-cover " />
    </div>

    </div>
    {/*  */}
    {/* <h3 className="text-xl my-6 capitalize font-semibold text-black">Comments :<span className="text-base text-gray-600 font-semibold"> *Baggage Allowance: Adult 20k *Contact Airline</span></h3> */}



    </div>
    {/*  */}
    {/* <div className="w-full col-span-1 relative af"> */}

    {/* </div> */}

    </div>
    {/*  */}
    <div className="w-full flex gap-3 bg-yellow my-12">

    <div className="w-full col-span-1 flex flex-col justify-between">
    <div className="flex gap-4 md:gap-8 items-center">
      <span className="text-sm md:text-xl font-semibold text-black/90">07:80 am</span>
      <GiAirplaneDeparture  className='text-3xl md:text-5xl border-2 rounded-full p-1 lg:p-2 border-black '/>
    </div>
    <div className="flex gap-4 md:gap-8 items-center">
      <span className="text-sm md:text-xl font-semibold text-black/90">07:80 am</span>
      <GiAirplaneDeparture  className='text-3xl md:text-5xl border-2 rounded-full p-1 lg:p-2 border-black '/>
    </div> 

    </div>
    {/*  */}
    <div className="w-full jh col-span-2">
    <h2 className="text-white text-base md:text-xl font-semibold capitalize">Departing from O.R Tambo International Airport</h2>
    <div className="w-full grid grid-cols-3 ">
    <div className="w col-span-2 ">
    <div className="grid grid-cols-2 lg:grid-cols-3 items-start gap-x-12 gap-y-4 mt-4">
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold">H1733</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Confirmation</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1H 30M</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold text-black/80">Ticket</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1263946393020</span>
    </div>
    </div>
    {/*  */}
    <div className="grid grid-cols-2  gap-4 items-start my-7">
    
    <div className="flex flex-col gap-1 ">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Class</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1 - Economy : 0 Stop(s)</span>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-base font-semibold tracking-[1px] text-black/80">Equipment</h4>
      <span className="text-slate-700 font-bold text-sm md:text-base">1 - Economy : 0 Stop(s)</span>
    </div>
    </div>

    <h2 className="text-base md:text-xl text-gray-700 mt-4 font-semibold">Landing At Cape Town International Airport</h2>


    </div>
    <div className="col-span-1 flex lg:border-l-2 lg:border-l-black ml-4 items-end justify-center">
      <img src="https://hmgtravel.co.za/wp-content/uploads/2017/04/flysafair-logo.jpg" alt="kdkdk" className="w-[3.8rem] md:w-[5rem] lg:w-[8rem] self-center object-cover" />
    </div>

    </div>
    {/*  */}


    </div>
    {/*  */}


    </div>
    
    

    </div>
    {/*  */}

    </div>

    <div className="flex justify-center pb-6 items-center">
        <div className="">
            <button className="px-10 text-xl font-semibold rounded-xl bg-green-700 py-3 text-white">Continue Planning</button>
        </div>
    </div>

    <div className="mt-6 ">
    <h2 className="text-2xl text-center font-semibold">Share your Itinerary with your loved one(s)</h2>

    <div className="flex justify-center my-8">
      <div className="grid grid-cols-4 gap-7">
        <FaWhatsapp className='text-3xl text-green-400' />
        <MdAttachEmail className='text-3xl text-purple-400' />
        <FaTelegram className='text-3xl text-sky-400' />
        <BsMessenger className='text-3xl text-blue-400' />
      </div>
    </div>

    </div>

    </div>
    </div>


    </section>
    
  )
}

export default ThirdFlight