import React from 'react'
import img from '../assets/work.png'
import './Gallery.css'

const Gallery = () => {
    return (
        <div>
            <div class="inline-flex ml-[90px] mt-[50px] text-[#5f5f5f] text-[20px]">
                <img class='lift cursor-pointer  h-[332px] lift w-[422px]' alt='work' src={img} />
                <img class='lift cursor-pointer ml-28' alt='work' src={img} />
                <img class='lift cursor-pointer ml-28' alt='work' src={img} />
            </div>
            <div class="inline-flex w-[1500px] h-[370px] ml-[90px] mt-[50px] text-[#5f5f5f] text-[20px]">
                <img class='drop-shadow-none hover:drop-shadow-xl  h-[332px] lift w-[422px]  cursor-pointer' alt='work' src={img} />
                <img class='h-[332px] w-[422px] lift cursor-pointer ml-28' alt='work' src={img} />
                <img class='h-[332px] w-[422px] lift cursor-pointer ml-28' alt='work' src={img} />
            </div>
        </div>
    )
}

export default Gallery