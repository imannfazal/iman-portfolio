import React from 'react'
import bank1 from '../../assets/bank/bank-1.jpg'
import bank2 from '../../assets/bank/bank-2.jpg'
import bank3 from '../../assets/bank/bank-3.jpg'
import bank4 from '../../assets/bank/bank-4.jpg'
import sre from '../../assets/SRE.png'
import Daily from '../../assets/daily.png';
import dex from '../../assets/dex.jpg'
import Rush from '../../assets/rush.png'

const Bank = () => {
  return (
    <div className='mx-20 py-20 text-[#ffffff]'>
      <div class='text-[14px] font-medium'>Project</div>
      <div class='text-[54px] font-medium'>iNDEXX BANK</div>
      <div class='mb-12 mt-7 text-[18px] font-light w-[800px]'>Designed the user interface using Figma and then developed a user-friendly frontend for the indexx Bank by utilizing ReactJS and Tailwind CSS.</div>
      <img class='w-full h-full mb-9' alt='bank' src={bank1} />
      <img class='w-full h-full mb-9' alt='bank' src={bank2} />
      <img class='w-full h-full mb-9' alt='bank' src={bank3} />
      <img class='w-full h-full' alt='bank' src={bank4} />
      <div class='mt-12 mb-7 text-[18px] font-light w-[800px]'>More work </div>
      <div class='inline-flex h-[300px]'>
        <a href='/Fortune-Daily' class='lift cursor-pointer '><img className='w-[320px] h-[260px]' src={Daily} /></a>
        <a href='/DPS' class='ml-8 lift cursor-pointer '><img className='w-[320px] h-[260px]' src={sre} /></a>
        <div class='ml-8 lift cursor-pointer'><img className='w-[320px] h-[260px]' src={dex} /></div>
        <div class='ml-8 lift cursor-pointer'><img className='w-[320px] h-[260px]' src={Rush} /></div>
      </div>
      <div class='text-[19px] mt-12 font-light'>Thanks for looking around.</div>
      <div class='text-[19px] pt-6 pb-2 font-light'>Stay in touch,</div>
      <a class='text-[#fffff] text-[20px]' href="mailto:imannfazal@gmail.com">imannfazal@gmail.com</a>
      </div>
  )
}

export default Bank