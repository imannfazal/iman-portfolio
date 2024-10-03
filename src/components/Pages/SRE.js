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
const SRE = () => {
  return (
    <div className='mx-20 py-20 text-[#ffffff]'>
      <div class='text-[14px] font-medium'>Project</div>
      <div class='text-[54px] font-medium'>DISCIPLINE PLANNING <div>SYSTEM</div></div>
      <div class='mb-12 mt-7 text-[18px] font-light w-[800px]'>Designed the user interface of Discipline Planning System using Figma.  </div>
      <img class='w-full h-full mb-9' alt='bank' src={home} />
      <img class='w-full h-full mb-9' alt='bank' src={welcome} />
      <img class='w-full h-full mb-9' alt='bank' src={info} />
      <img class='w-full h-full mb-9' alt='bank' src={activities} />
      <img class='w-full h-full' alt='bank' src={report} />
      <div class='mt-12 mb-7 text-[18px] font-light w-[800px]'>More work </div>
      <div class='inline-flex h-[300px]'>
        <a href='/Fortune-Daily' class='lift cursor-pointer '><img alt='bank' className='w-[320px] h-[260px]' src={Daily} /></a>
        <a href='/indexxBank' class='ml-8 lift cursor-pointer'><img alt='bank' className='w-[320px] h-[260px]' text='indexx Bank' src={bank} /></a>
        <div class='ml-8 lift cursor-pointer'><img alt='bank' className='w-[320px] h-[260px]' src={dex} /></div>
        <div class='ml-8 lift cursor-pointer'><img alt='bank' className='w-[320px] h-[260px]' src={Rush} /></div>
      </div>
      <div class='text-[19px] mt-12 font-light'>Thanks for looking around.</div>
      <div class='text-[19px] pt-6 pb-2 font-light'>Stay in touch,</div>
      <a class='text-[#fffff] text-[20px]' href="mailto:imannfazal@gmail.com">imannfazal@gmail.com</a>
    </div>
  )
}

export default SRE