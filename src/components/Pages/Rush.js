import React from 'react'
import main from '../../assets/Rush/main.png'
import howtoplay from '../../assets/Rush/howtoplay.png'
import profile from '../../assets/Rush/profile.png'
import sre from '../../assets/SRE.png'
import Daily from '../../assets/daily.png';
import dex from '../../assets/dex.jpg'
import pred from '../../assets/prediction.jpg'

const Rush = () => {
  return (
    <div className='mx-20 py-20 text-[#ffffff]'>
      <div class='text-[14px] font-medium'>Project</div>
      <div class='text-[54px] font-medium'>FORTUNE RUSH</div>
      <div class='mb-12 mt-7 text-[18px] font-light w-[800px]'>Took charge of designing and building the front-end for the expansive "Fortune Rush" project utilizing Figma, ReactJS and TailwindCSS, creating an
        impressive and user-friendly interface from scratch.  </div>
      <div class='mx-12'>
        <img class='w-full h-full mb-9' alt='bank' src={main} />
        <img class='w-full h-full mb-9' alt='bank' src={howtoplay} />
        <img class='w-full h-full mb-9' alt='bank' src={profile} />
      </div>
      <div class='mt-12 mb-7 text-[18px] font-light w-[800px]'>More work </div>
      <div class='inline-flex h-[300px]'>
        <a href='/Fortune-Daily' class='lift cursor-pointer '><img alt='bank' className='w-[320px] h-[260px]' src={Daily} /></a>
        <a href='/DPS' class='ml-8 lift cursor-pointer '><img alt='bank' className='w-[320px] h-[260px]' src={sre} /></a>
        <a href='/Decentralized-Exchange' class='ml-8 lift cursor-pointer'><img alt='bank' className='w-[320px] h-[260px]' src={dex} /></a>
        <a href='/prediction' class='ml-8 lift cursor-pointer'><img alt='bank' className='w-[320px] h-[260px]' src={pred} /></a>
      </div>
      <div class='text-[19px] mt-12 font-light'>Thanks for looking around.</div>
      <div class='text-[19px] pt-6 pb-2 font-light'>Stay in touch,</div>
      <a class='text-[#fffff] text-[20px]' href="mailto:imannfazal@gmail.com">imannfazal@gmail.com</a>
    </div>
  )
}

export default Rush