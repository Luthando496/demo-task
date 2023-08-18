import React,{useState} from 'react'
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
  const [popBanner,setPop] = useState(true)
  const [links,setLinks] = useState(false)
  const [itPop,setItPop] = useState(false)
  const [alert,setAlert] = useState(false)
  const [flight,setFlight] = useState(false)
  const [main,setMain] = useState(false)
  const [last,setLast] = useState(false)

  const handlePop=()=>{
    setPop(!popBanner)
    setLinks(!links)
  }

  const handleLinks=()=>{
    setLinks(!links)
    setItPop(!itPop)
  }

  const handleAlert=()=>{
    setItPop(!itPop)
    setAlert(!alert)
  }
  const handleFlight=()=>{
  setAlert(!alert)
    setFlight(!flight)
  }

  const handleMain=()=>{
    setFlight(!flight)
    setMain(!main)
  }
  const handleLast=()=>{
    setMain(!main)
    setLast(!last)
  }

  return (
    <>
    {popBanner && <PopUpBanners handlePop={handlePop} />}
    {links && <RefferalLinks handleLinks={handleLinks} />}
    {itPop && <Alert handleAlert={handleAlert} />}
    {alert && <FlightCard handleAlert={handleFlight} />}
    {flight && <ThirdFlight handleMain={handleMain} />}
    {main && <MainFlight handleLast={handleLast} />}


    </>
  )
}

export default App