import React, { Component } from 'react'
import './ScrollDownArrow.css';

function ScrollDownArrow ({section, text}) {
    const handleClickScroll = () => {
        const element = document.getElementById(section);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="scrolldown-container">
            <div id="scrolldown">
                <a onClick={handleClickScroll}><span></span></a>
            </div>
        </div>
    )
}

export default ScrollDownArrow;

 