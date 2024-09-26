import React from 'react'
import Gallery from './Gallery'

const Hero = () => {
  return (
    <div class=' mt-28 text-[#ffffff]'>
        <div class='ml-[90px] text-[33px]'>Hello, it’s Iman.</div>
        <div class='ml-[90px] text-[25px] mt-4 '>If you’re looking for a freelance designer to help bring an idea to life and you’re on tight timeline-let’s jam.</div>
        <div class='ml-[90px] text-[25px] mt-12'>Work Gallery</div>
        <Gallery />

        <div class='ml-[90px] text-[25px] mt-12'>Thanks for looking around.</div>
        <div class='ml-[90px] text-[25px] mt-4'>Stay in touch,</div>
    </div>
  )
}

export default Hero