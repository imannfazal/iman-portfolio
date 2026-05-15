import React from 'react'
import './Gallery.css'
import SRE from '../assets/SRE.png'
import Daily from '../assets/daily.png'
import Rush from '../assets/rush.png'
import dex from '../assets/dex.jpg'
import bank from '../assets/bank.png'
import pred from '../assets/prediction.jpg'
import Image from './Card'

const Gallery = () => {
    return (
        <div>
            <div class="grid grid-cols-3 md:gap-9 gap-3 mt-[20px] text-[#5f5f5f] text-[20px]">
                <a href='/iman-portfolio/#/indexxBank' class='lift cursor-pointer'><Image role='Website Design and Development' text='indexx Bank' src={bank} /></a>
                <a href='/iman-portfolio/#/Fortune-Daily' class='lift cursor-pointer'><Image role='Website Design and Development' text='Fortune Daily' src={Daily} /></a>
                <a href='/iman-portfolio/#/DPS' class='lift cursor-pointer'><Image role='Website Design' text='Discipline Planning System' src={SRE} /></a>

                <a href='/iman-portfolio/#/Decentralized-Exchange' class='lift cursor-pointer'><Image role='Website Design and Development' text='indexx Decentralized Exchange' src={dex} /></a>
                <a href='/iman-portfolio/#/Fortune-Rush' class='lift cursor-pointer'><Image role='Website Design and Development' text='Fortune Rush' src={Rush} /></a>
                <a href='/iman-portfolio/#/prediction' class='lift cursor-pointer'><Image role='Website Design' text='Prediction Beta' src={pred} /></a>
            </div>
        </div>
    )
}

export default Gallery