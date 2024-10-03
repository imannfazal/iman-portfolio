import React from 'react'
import Gallery from './Gallery'

const Hero = () => {
  return (
    <div class='md:mx-[70px] mx-3 md:mt-28 mt-5 pb-20 text-[#ffffff]'>
        <div class='md:text-[30px] text-[18px] fontClassical'>Hello, it’s Iman.</div>
        <div class='md:text-[19px] mt-4 text-[13px]'>If you’re looking for a freelance designer to help bring an idea to life and you’re on tight timeline-let’s jam.</div>
        <div class='md:text-[22px] mt-12'>Work Gallery</div>
        <Gallery />

        <div class='md:text-[17px] text-[13px] mt-20'>Thanks for looking around.</div>
        <div class='md:text-[17px] text-[13px] pt-6 pb-2 '>Stay in touch,</div>
        <a class='text-[#fffff] md:text-[19px] text-[15px] font-bold' href="mailto:imannfazal@gmail.com">imannfazal@gmail.com</a>

    </div>
  )
}

export default Hero