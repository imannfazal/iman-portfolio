import React from 'react'
import pred from '../../assets/prediction/prediction.png'
import leader from '../../assets/prediction/leader.png'
import info from '../../assets/prediction/info.png'
import Daily from '../../assets/daily.png'
import sre from '../../assets/SRE.png'
import dex from '../../assets/dex.jpg'
import Rush from '../../assets/rush.png'

const Prediction = () => {
    return (
        <div className='mx-20 py-20 text-[#ffffff]'>
            <div class='text-[14px] font-medium'>Project</div>
            <div class='text-[54px] font-medium'>iNDEXX <div class='-mt-3'>PREDICTION BETA</div></div>
            <div class='mb-12 mt-7 text-[18px] font-light w-[800px]'>Designed the user interface of Prediction Beta using Figma. </div>
            <div class='mx-12'> <img class='w-full h-full mb-9' alt='bank' src={pred} />
                <img class='w-full h-full mb-9' alt='bank' src={leader} />
                <img class='w-full h-full mb-9' alt='bank' src={info} />
            </div>
            <div class='mt-12 mb-7 text-[18px] font-light w-[800px]'>More work </div>
            <div class='inline-flex h-[300px]'>
                <a href='/Fortune-Daily' class='lift cursor-pointer '><img alt='bank' className='w-[320px] h-[260px]' src={Daily} /></a>
                <a href='/DPS' class='ml-8 lift cursor-pointer '><img alt='bank' className='w-[320px] h-[260px]' src={sre} /></a>
                <a href='/Decentralized-Exchange' class='ml-8 lift cursor-pointer'><img alt='bank' className='w-[320px] h-[260px]' src={dex} /></a>
                <a href='/Fortune-Rush' class='ml-8 lift cursor-pointer'><img alt='bank' className='w-[320px] h-[260px]' src={Rush} /></a>
            </div>
            <div class='text-[19px] mt-12 font-light'>Thanks for looking around.</div>
            <div class='text-[19px] pt-6 pb-2 font-light'>Stay in touch,</div>
            <a class='text-[#fffff] text-[20px]' href="mailto:imannfazal@gmail.com">imannfazal@gmail.com</a>
        </div>
    )
}

export default Prediction