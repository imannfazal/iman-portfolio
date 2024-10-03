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
            <div class="inline-flex mt-[20px] text-[#5f5f5f] text-[20px]">
                <a href='/Fortune-Daily' class='lift cursor-pointer'><Image role='Website Design and Development' text='indexx Fortune Daily' src={Daily} /></a>
                <a  href='/DPS' class='ml-24 lift cursor-pointer'><Image role='Website Design' text='Discipline Planning System' src={SRE} /></a>
                <a href='/indexxBank' class='ml-24 lift cursor-pointer'><Image role='Website Design and Development' text='indexx Bank' src={bank} /></a>
            </div>
            <div class="inline-flex mt-[50px] text-[#5f5f5f] text-[20px]">
                <a href='/Decentralized-Exchange' class='lift cursor-pointer'><Image role='Website Design and Development' text='indexx Decentralized Exchange' src={dex} /></a>
                <a href='/Fortune-Rush' class='ml-24 lift cursor-pointer'><Image role='Website Design and Development' text='indexx Rush' src={Rush} /></a>
                <a href='/prediction' class='ml-24 lift cursor-pointer'><Image role='Website Design' text='indexx Rush' src={pred} /></a>

            </div>
        </div>
    )
}

export default Gallery