import React, { useState } from 'react';
import Pdf from '../assets/resume.pdf'
import img from '../assets/Logo.png'
import hover_img from '../assets/hover-logo.png'


const Header2 = () => {

    const [image, setImg] = useState(img);

    return (
        <div class="inline-flex ml-[70px] mt-[50px] text-[#ffffff] text-[20px]">
            <a href='/'> <img class='cursor-pointer' width="52" alt='logo' src={image}
                onMouseEnter={() => setImg(hover_img)}
                onMouseOut={() => setImg(img)} /></a>
            <div class='ml-[570px] inline-flex'>
                <div className='text-[16px] md:'>
                    <div class='font-medium text-[19px] mb-5'>Services</div>
                    Website Design
                    <br /> Frontend Development
                    <br /> Graphic Design
                    <br /> Video Editing Design
                </div>
                <div className='ml-[130px]'>
                    <div class='font-medium text-[19px] mb-5'>Contact</div>
                    <a class='text-[#fffff] hover:text-[#808080] text-[16px]' href="mailto:imannfazal@gmail.com">imannfazal@gmail.com</a>

                </div>
                <div className='font-medium ml-[130px] cursor-pointer text-[#fffff] hover:text-[#808080]'  > <a href={Pdf} rel="noreferrer" target="_blank">Résumé</a></div>
            </div>

        </div>
    )
}

export default Header2