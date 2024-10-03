import React from 'react'
import pred from '../../assets/prediction/prediction.png'
import leader from '../../assets/prediction/leader.png'
import info from '../../assets/prediction/info.png'
import Daily from '../../assets/daily.png'
import sre from '../../assets/SRE.png'
import dex from '../../assets/dex.jpg'
import Rush from '../../assets/rush.png'
import Thanks from './Thanks'

const Prediction = () => {
    return (
        <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>
            <div class='md:text-[14px] text-[7px] font-medium'>Project</div>
            <div class='md:text-[54px] text-[20px] font-medium'>iNDEXX <div class='-mt-3'>PREDICTION BETA</div></div>
            <div class='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light md:w-[800px] w-[250px]'>Designed the user interface of Prediction Beta using Figma. </div>
            <div class='md:mx-12 mx-2'> <img class='w-full h-full mb-9' alt='bank' src={pred} />
                <img class='w-full h-full mb-9' alt='bank' src={leader} />
                <img class='w-full h-full mb-9' alt='bank' src={info} />
            </div>
            <div class='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work </div>
            <div class='inline-flex md:h-[300px]'>
                <a href='/Fortune-Daily' class='lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Daily} /></a>
                <a href='/DPS' class='ml-8 lift cursor-pointer '><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={sre} /></a>
                <a href='/Decentralized-Exchange' class='ml-8 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={dex} /></a>
                <a href='/Fortune-Rush' class='ml-8 lift cursor-pointer'><img alt='bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Rush} /></a>
            </div>
            <Thanks />
        </div>
    )
}

export default Prediction