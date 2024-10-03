import React from 'react'
import main from '../../assets/Rush/main.png'
import howtoplay from '../../assets/Rush/howtoplay.png'
import profile from '../../assets/Rush/profile.png'
import sre from '../../assets/SRE.png'
import Daily from '../../assets/daily.png';
import dex from '../../assets/dex.jpg'
import pred from '../../assets/prediction.jpg'
import Thanks from './Thanks'

const Rush = () => {
  return (
    <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>
      <div class='md:text-[14px] text-[7px] font-medium'>Project</div>
      <div class='md:text-[54px] text-[20px] font-medium'>FORTUNE RUSH</div>
      <div class='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light md:w-[800px] w-[250px]'>Took charge of designing and building the front-end for the expansive "Fortune Rush" project utilizing Figma, ReactJS and TailwindCSS, creating an
        impressive and user-friendly interface from scratch.  </div>
      <div class='md:mx-12 mx-2'>
        <img class='w-full h-full mb-9' alt='bank' src={main} />
        <img class='w-full h-full mb-9' alt='bank' src={howtoplay} />
        <img class='w-full h-full mb-9' alt='bank' src={profile} />
      </div>
      <div class='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work </div>
      <div class='inline-flex md:h-[300px]'>
        <a href='/Fortune-Daily' class='lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Daily} /></a>
        <a href='/DPS' class='ml-8 lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={sre} /></a>
        <a href='/Decentralized-Exchange' class='ml-8 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={dex} /></a>
        <a href='/prediction' class='ml-8 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={pred} /></a>
      </div>
      <Thanks />
    </div>
  )
}

export default Rush