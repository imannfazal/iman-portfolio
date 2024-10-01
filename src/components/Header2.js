import React, { useState } from 'react';
import Pdf from '../assets/resume.pdf'
import img from '../assets/Logo.png'
import hover_img from '../assets/hover-logo.png'


const Header2 = () => {

    const [image, setImg] = useState(img);

    return (
        <div class="inline-flex ml-[90px] mt-[50px] text-[#ffffff] text-[20px]">
            <div> <img class='cursor-pointer' width="52" alt='logo' src={image}
                onMouseEnter={() => setImg(hover_img)}
                onMouseOut={() => setImg(img)} /></div>
            <div className=' ml-[500px]'>
                <div class='font-medium'>Services</div>
                <br /> Website Design
                <br /> Frontend Development
                <br /> Graphic Design
                <br /> Video Editing Design
            </div>
            <div className='ml-[200px]'>
                <div class='font-medium'>Contact</div>
                <br />
                {/* <button  class='text-[#fffff] hover:text-[#808080]' onClick={() => navigator.clipboard.writeText('imannfazal@gmail.com')}>
                    imannfazal@gmail.com
                </button> */}
                <a class='text-[#fffff] hover:text-[#808080]' href="mailto:imannfazal@gmail.com">imannfazal@gmail.com</a>
                
            </div>
            <div className='font-medium ml-[200px] cursor-pointer text-[#fffff] hover:text-[#808080]'  > <a href = {Pdf} target = "_blank">Résumé</a></div>

        </div>
    )
}

export default Header2