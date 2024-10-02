import React from 'react'
import img from '../assets/work.png'
import './Gallery.css'
import SRE from '../assets/SRE.png'
import Daily from '../assets/daily.png'
import Rush from '../assets/rush.png'
import dex from '../assets/dex.png'
import bank from '../assets/bank.png'

const Gallery = () => {
    return (
        <div>
            <div class="inline-flex mt-[20px] text-[#5f5f5f] text-[20px]">
                <img class='lift cursor-pointer h-[300px] w-[390px]' alt='work' src={Daily} />
                <img class='lift cursor-pointer ml-24 h-[300px] w-[390px]' alt='work' src={SRE} />
                <img class='lift cursor-pointer ml-24 h-[300px] w-[390px]' alt='work' src={dex} />
            </div>
            <div class="inline-flex mt-[50px] text-[#5f5f5f] text-[20px]">
                <img class='h-[300px] w-[390px] lift cursor-pointer' alt='work' src={Rush} />
                <img class='h-[300px] w-[390px] lift cursor-pointer ml-24' width='100%' alt='work' src={bank} />
                {/* <img class='h-[300px] w-[390px] lift cursor-pointer ml-24' alt='work' src={img} /> */}
            </div>
        </div>
    )
}

export default Gallery