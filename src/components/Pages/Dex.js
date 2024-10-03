import React from 'react'
import header from '../../assets/dex/header.jpg'
import swap1 from '../../assets/dex/swap1.jpg'
import swap2 from '../../assets/dex/swap2.jpg'
import swap3 from '../../assets/dex/swap3.jpg'
import sre from '../../assets/SRE.png'
import Daily from '../../assets/daily.png';
import pred from '../../assets/prediction.jpg'
import Rush from '../../assets/rush.png'

const Dex = () => {
  return (
    <div className='mx-20 py-20 text-[#ffffff]'>
      <div class='text-[14px] font-medium'>Project</div>
      <div class='text-[54px] font-medium'>iNDEXX <div class='-mt-3'>DECENTRALIZED EXCHANGE</div></div>
      <div class='mb-12 mt-7 text-[18px] font-light w-[800px]'>Designed and implemented the user interface of the indexx Decentralized Exchange using
      ReactJS, Figma and Tailwind CSS. </div>
      <div class='mx-12'><img class='w-full h-full' alt='bank' src={header} />
      <img class='w-full h-full' alt='bank' src={swap1} />
      <img class='w-full h-full' alt='bank' src={swap2} />
      <img class='w-full h-full' alt='bank' src={swap3} /></div>
      <div class='mt-12 mb-7 text-[18px] font-light w-[800px]'>More work </div>
      <div class='inline-flex h-[300px]'>
        <a href='/Fortune-Daily' class='lift cursor-pointer '><img alt='bank' className='w-[320px] h-[260px]' src={Daily} /></a>
        <a href='/DPS' class='ml-8 lift cursor-pointer '><img alt='bank' className='w-[320px] h-[260px]' src={sre} /></a>
        <a href='/predition' class='ml-8 lift cursor-pointer'><img alt='bank' className='w-[320px] h-[260px]' src={pred} /></a>
        <a href='/Fortune-Rush' class='ml-8 lift cursor-pointer'><img alt='bank' className='w-[320px] h-[260px]' src={Rush} /></a>
      </div>
      <div class='text-[19px] mt-12 font-light'>Thanks for looking around.</div>
      <div class='text-[19px] pt-6 pb-2 font-light'>Stay in touch,</div>
      <a class='text-[#fffff] text-[20px]' href="mailto:imannfazal@gmail.com">imannfazal@gmail.com</a>
    </div>
  )
}

export default Dex