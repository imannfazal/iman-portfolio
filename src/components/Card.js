import React from 'react';
const Image = (props) => (
    <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <img class="h-[320px] w-[390px]" src={props.src} alt="Sunset in the mountains" />
        <div class="px-6 py-4 bg-[#6d3661] bg-opacity-70">
            <div class="text-[11px] text-[#9F9E9E] mb-2">{props.role}</div>
            <div class="text-[15px] text-[#ffffff] mb-2">{props.text}</div>
        </div>
    </div>
);

export default Image;