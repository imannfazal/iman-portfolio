import React from 'react'
import './Gallery.css'
import SRE from '../assets/SRE.png'
import Daily from '../assets/daily.png'
import Rush from '../assets/rush.png'
import dex from '../assets/dex.png'
import bank from '../assets/bank.png'
import Image from './Card'

const Gallery = () => {
    return (
        <div>
            <div class="inline-flex mt-[20px] text-[#5f5f5f] text-[20px]">
                <div class='lift cursor-pointer'><Image text='indexx Fortune Daily' src={Daily} /></div>
                <div class='ml-24 lift cursor-pointer'><Image text='Discipline Planning System' src={SRE} /></div>
                <div class='ml-24 lift cursor-pointer'><Image text='indexx Bank' src={bank} /></div>
            </div>
            <div class="inline-flex mt-[50px] text-[#5f5f5f] text-[20px]">
            <div class='lift cursor-pointer'><Image text='indexx Decentralized Exchange' src={dex} /></div>
            <div class='ml-24 lift cursor-pointer'><Image text='indexx Rush' src={Rush} /></div>
            </div>
        </div>
    )
}

export default Gallery