import React from 'react'
import Daily from '../../assets/daily.png'
import bank from '../../assets/bank.png'
import dex from '../../assets/dex.jpg'
import Rush from '../../assets/rush.png'
import activities from '../../assets/sre/activities.png'
import home from '../../assets/sre/Home.png'
import welcome from '../../assets/sre/Welcome.png'
import info from '../../assets/sre/personal-info.png'
import report from '../../assets/sre/report.png'
import Thanks from './Thanks'
import Scroll from './Scroll'
const SRE = () => {
  return (
    <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>
      <div class='md:text-[14px] text-[7px] font-medium'>Project</div>
      <div class='md:text-[54px] text-[20px] font-medium'>DISCIPLINE PLANNING <div className='-mt-2'>SYSTEM</div></div>
      <div class='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light md:w-[800px] w-[250px]'>Designed the user interface of Discipline Planning System using Figma.  </div>
      <div class='md:mx-12 mx-2'><img class='w-full h-full mb-9' alt='bank' src={home} />
      <img class='w-full h-full mb-9' alt='bank' src={welcome} />
      <img class='w-full h-full mb-9' alt='bank' src={info} />
      <img class='w-full h-full mb-9' alt='bank' src={activities} />
      <img class='w-full h-full' alt='bank' src={report} /></div>
      <div class='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work </div>
      <div class='inline-flex md:h-[300px]'>
        <a href='/iman-portfolio/#/Fortune-Daily' class='lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Daily} /></a>
        <a href='/iman-portfolio/#/indexxBank' class='md:ml-8 ml-1 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' text='indexx Bank' src={bank} /></a>
        <a href='/iman-portfolio/#/Decentralized-Exchange' class='md:ml-8 ml-1 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={dex} /></a>
        <a href='/iman-portfolio/#/Fortune-Rush' class='md:ml-8 ml-1 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Rush} /></a>
      </div>
      <Thanks />
      <Scroll />
    </div>
  )
}

export default SRE