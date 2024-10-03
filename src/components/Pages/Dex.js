import React from 'react'
import header from '../../assets/dex/header.jpg'
import swap1 from '../../assets/dex/swap1.jpg'
import swap2 from '../../assets/dex/swap2.jpg'
import swap3 from '../../assets/dex/swap3.jpg'
import sre from '../../assets/SRE.png'
import Daily from '../../assets/daily.png';
import pred from '../../assets/prediction.jpg'
import Rush from '../../assets/rush.png'
import Thanks from './Thanks'

const Dex = () => {
  return (
    <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>
      <div class='md:text-[14px] text-[7px] font-medium'>Project</div>
      <div class='md:text-[54px] text-[20px] font-medium'>iNDEXX <div class='-mt-3'>DECENTRALIZED EXCHANGE</div></div>
      <div class='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light md:w-[800px] w-[250px]'>Designed and implemented the user interface of the indexx Decentralized Exchange using
      ReactJS, Figma and Tailwind CSS. </div>
      <div class='md:mx-12 mx-2'><img class='w-full h-full' alt='bank' src={header} />
      <img class='w-full h-full' alt='bank' src={swap1} />
      <img class='w-full h-full' alt='bank' src={swap2} />
      <img class='w-full h-full' alt='bank' src={swap3} /></div>
      <div class='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work </div>
      <div class='inline-flex md:h-[300px]'>
        <a href='/Fortune-Daily' class='lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Daily} /></a>
        <a href='/DPS' class='ml-8 lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={sre} /></a>
        <a href='/predition' class='ml-8 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={pred} /></a>
        <a href='/Fortune-Rush' class='ml-8 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Rush} /></a>
      </div>
      <Thanks />
    </div>
  )
}

export default Dex