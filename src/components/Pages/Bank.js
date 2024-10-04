import React from 'react'
import dashboard from '../../assets/bank/dashboard.png'
import page2 from '../../assets/bank/page2.png'
import borrow from '../../assets/bank/borrow.png'
import borrow2 from '../../assets/bank/borrow2.png'
import page4 from '../../assets/bank/page4.png'
import page5 from '../../assets/bank/page5.png'
import sre from '../../assets/SRE.png'
import Daily from '../../assets/daily.png';
import dex from '../../assets/dex.jpg'
import Rush from '../../assets/rush.png'
import Thanks from './Thanks'
import Scroll from './Scroll'

const Bank = () => {
  return (
    <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>
      <div class='md:text-[14px] text-[7px] font-medium'>Project</div>
      <div class='md:text-[54px] text-[20px] font-medium'>iNDEXX BANK</div>
      <div class='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light md:w-[800px] w-[250px]'>Designed the user interface using Figma and then developed a user-friendly frontend for the indexx Bank by utilizing ReactJS and Tailwind CSS.</div>
      <div class='md:mx-12 mx-2'><img class='w-full h-full mb-9' alt='bank' src={dashboard} />
      <img class='w-full h-full mb-9' alt='bank' src={page2} />
      <img class='w-full h-full mb-9' alt='bank' src={borrow} />
      <img class='w-full h-full' alt='bank' src={borrow2} />
      <img class='w-full h-full' alt='bank' src={page4} />
      <img class='w-full h-full' alt='bank' src={page5} /></div>
      <div class='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work </div>
      <div class='inline-flex md:h-[300px]'>
        <a href='/Fortune-Daily' class='lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Daily} /></a>
        <a href='/DPS' class='md:ml-8 ml-1 lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={sre} /></a>
        <a href='/Decentralized-Exchange' class='md:ml-8 ml-1 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={dex} /></a>
        <a href='/Fortune-Rush' class='md:ml-8 ml-1 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Rush} /></a>
      </div>
      <Thanks />
      <Scroll />
      </div>
  )
}

export default Bank