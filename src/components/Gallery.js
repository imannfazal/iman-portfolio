import React, { useState } from 'react'
// import img from '../assets/work.png'
import './Gallery.css'
import SRE from '../assets/SRE.png'
import Daily from '../assets/daily.png'
import Rush from '../assets/rush.png'
import dex from '../assets/dex.png'
import bank from '../assets/bank.png'
import Card from './Card'
import Image from './Card'

const Gallery = () => {
    return (
        <div>
            <div class="inline-flex mt-[20px] text-[#5f5f5f] text-[20px]">
                <div class='lift cursor-pointer'><Image text='indexx Fortune Daily' src={Daily} /></div>
                <div class='ml-24 lift cursor-pointer'><Image text='Discipline Planning System' src={SRE} /></div>
                <div class='ml-24 lift cursor-pointer'><Image text='indexx Bank' src={bank} /></div>
                {/* <img class='lift cursor-pointer h-[300px] w-[390px] rounded-[5px]' alt='work' src={Daily} /> */}
                {/* <img class='lift cursor-pointer ml-24 h-[300px] w-[390px] rounded-[5px]' alt='work' src={SRE} />
                <img class='lift cursor-pointer ml-24 h-[300px] w-[390px] rounded-[5px] ' alt='work' src={dex} /> */}
            </div>
            <div class="inline-flex mt-[50px] text-[#5f5f5f] text-[20px]">
            <div class='lift cursor-pointer'><Image text='indexx Decentralized Exchange' src={dex} /></div>
            <div class='ml-24 lift cursor-pointer'><Image text='indexx Rush' src={Rush} /></div>
            {/* <img class='h-[300px] w-[390px] lift cursor-pointer ml-24' alt='work' src={img} /> */}
            </div>
        </div>
    )
}

export default Gallery