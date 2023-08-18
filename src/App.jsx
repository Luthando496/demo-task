import React from 'react'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsPersonUp} from 'react-icons/bs'
import {IoMdAirplane} from 'react-icons/io'
import {BiBed} from 'react-icons/bi'
import {AiOutlineFileProtect,AiOutlineCar} from 'react-icons/ai'
import Alert from './components/Alert'
import FlightCard from './components/FlightCard'
import RefferalLinks from './components/RefferalLinks'
import PopUpBanners from './components/PopUpBanners'
import SecondFlight from './components/SecondFlight'
import ThirdFlight from './components/ThirdFlight'
import MainFlight from './components/MainFlight'


const App = () => {
  return (
    <>
    <Alert />
    <RefferalLinks />
    <PopUpBanners />
    <ThirdFlight />
    <MainFlight />

    </>
  )
}

export default App