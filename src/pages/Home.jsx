import React from 'react'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import SecondaryButton from '../components/Buttons/SecondaryButton'

const Home = () => {
  return (
    <div className='text-[#0A0A0A]'>

    <div className="font-almarai font-light ">Embrace the Future, Where</div>
    <div className="font-almarai font-normal">Embrace the Future, Where</div>
    <div className="font-almarai font-bold">Embrace the Future, Where</div> 
    <div className="font-almarai font-extrabold">Embrace the Future, Where</div>

    <PrimaryButton/>
    <PrimaryButton/>
    <PrimaryButton/>
    <SecondaryButton/>
    </div>
  )
}

export default Home