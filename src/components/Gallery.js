import React from 'react'
import img from '../assets/work.png'
import './Gallery.css'

const Gallery = () => {
    return (
        <div>
            <div class="inline-flex mt-[20px] text-[#5f5f5f] text-[20px]">
                <img class='lift cursor-pointer h-[300px] w-[400px]' alt='work' src={img} />
                <img class='lift cursor-pointer ml-24 h-[300px] w-[400px]' alt='work' src={img} />
                <img class='lift cursor-pointer ml-24 h-[300px] w-[400px]' alt='work' src={img} />
            </div>
            <div class="inline-flex mt-[50px] text-[#5f5f5f] text-[20px]">
                <img class='h-[300px] w-[400px] lift cursor-pointer' alt='work' src={img} />
                <img class='h-[300px] w-[400px] lift cursor-pointer ml-24' alt='work' src={img} />
                <img class='h-[300px] w-[400px] lift cursor-pointer ml-24' alt='work' src={img} />
            </div>
        </div>
    )
}

export default Gallery