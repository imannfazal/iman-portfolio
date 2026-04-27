import React, { useState } from 'react';
import Pdf from '../assets/resume2.pdf'
import img from '../assets/Logo.png'
import hover_img from '../assets/hover-logo.png'


const Header2 = () => {

    const [image, setImg] = useState(img);

    return (
        <div class="inline-flex md:mx-[70px] mx-[10px] mt-[30px] md:mt-[50px] text-[#ffffff] md:text-[20px] text-[12px]">
            <a href='/iman-portfolio'> <img class='md:w-[52px] w-[30px] cursor-pointer' alt='logo' src={image}
                onMouseEnter={() => setImg(hover_img)}
                onMouseOut={() => setImg(img)} /></a>
            <div class='md:ml-[570px] ml-[40px] inline-flex'>
                <div className='md:text-[16px] text-[10px]'>
                    <div class='font-medium md:text-[19px] text-[12px] mb-5'>Services</div>
                    Website Design
                    <br /> Frontend Development
                    <br /> Graphic Design
                    <br /> Video Editing
                </div>
                <div className='md:ml-[130px] ml-[12px]'>
                    <div class='font-medium md:text-[19px] text-[12px] mb-5'>Contact</div>
                    <a class='text-[#fffff] hover:text-[#808080] md:text-[16px]' href="mailto:imannfazal@gmail.com">imannfazal@gmail.com</a>

                </div>
                <div className='font-medium md:ml-[130px] ml-[12px] cursor-pointer text-[#fffff] hover:text-[#808080]'  > <a href={Pdf} rel="noreferrer" target="_blank">Résumé</a></div>
            </div>

        </div>
    )
}

export default Header2