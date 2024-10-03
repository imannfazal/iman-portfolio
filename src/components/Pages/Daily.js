import React from 'react'
import main from '../../assets/Daily/main.png'
import profile from '../../assets/Daily/profile.png'
import edit from '../../assets/Daily/edit.png'
import buy from '../../assets/Daily/buy.png'
import sre from '../../assets/SRE.png'
import pred from '../../assets/prediction.jpg'
import dex from '../../assets/dex.jpg'
import Rush from '../../assets/rush.png'
import Thanks from './Thanks'

const Daily = () => {
  return (
    <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>
      <div class='md:text-[14px] text-[7px] font-medium'>Project</div>
      <div class='md:text-[54px] text-[20px] font-medium'>FORTUNE DAILY</div>
      <div class='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light md:w-[800px] w-[250px]'>Designed and developed the frontend of indexx Fortune Daily utilizing Figma, ReactJS and TailwindCSS, ensuring a seamless user experience. </div>
      <div class='md:mx-12 mx-2'><img class='w-full h-full mb-9' alt='bank' src={main} />
      <img class='w-full h-full mb-9' alt='bank' src={profile} />
      <img class='w-full h-full mb-9' alt='bank' src={edit} />
      <img class='w-full h-full' alt='bank' src={buy} /></div>
      <div class='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work </div>
      <div class='inline-flex md:h-[300px]'>
        <a href='/Fortune-Daily' class='lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={pred} /></a>
        <a href='/DPS' class='md:ml-8 ml-1 lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={sre} /></a>
        <a href='/Decentralized-Exchange' class='md:ml-8 ml-1 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={dex} /></a>
        <a href='/Fortune-Rush' class='md:ml-8 ml-1 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Rush} /></a>
      </div>
      <Thanks />
    </div>
  )

}

export default Daily