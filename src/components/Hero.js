import React from 'react'
import Gallery from './Gallery'

const Hero = () => {
  return (
    <div class='ml-[70px] mt-28 text-[#ffffff]'>
        <div class='text-[30px] fontClassical'>Hello, it’s Iman.</div>
        <div class='text-[19px] mt-4 '>If you’re looking for a freelance designer to help bring an idea to life and you’re on tight timeline-let’s jam.</div>
        <div class='text-[22px] mt-12'>Work Gallery</div>
        <Gallery />

        <div class='text-[19px] mt-12'>Thanks for looking around.</div>
        <div class='text-[19px] py-4 '>Stay in touch,</div>
    </div>
  )
}

export default Hero