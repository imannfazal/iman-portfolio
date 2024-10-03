import React from 'react';
const Image = (props) => (
    <div class="md:max-w-sm max-w-xs rounded overflow-hidden shadow-lg ">
        <img class="md:h-[320px] h-[100px] md:w-[390px] w-[270px]" src={props.src} alt="Sunset in the mountains" />
        <div class="md:px-6 px-2 md:py-4 py-1 bg-[#6d3661] bg-opacity-70">
            <div class="md:text-[11px] text-[6px] md:text-[#9F9E9E] md:mb-2 mb-[2px]">{props.role}</div>
            <div class="md:text-[15px] text-[7px] text-[#ffffff] md:mb-2 mb-[1px]">{props.text}</div>
        </div>
    </div>
);

export default Image;