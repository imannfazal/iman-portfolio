import React, { useState, useEffect } from 'react';
import './Scroll.css'; // Import the CSS file
import top from '../../assets/top.png'

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const scrollFunction = () => {
            if (window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction); // Cleanup event listener on unmount
        };
    }, []);

    const topFunction = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <button
                onClick={topFunction}
                id="myBtn"
                className={isVisible ? 'visible' : ''}
                title="Go to top"
            >
                <img alt='button' class='h-[25px]' src={top} />
            </button>
        </div>
    );
};

export default Scroll;
