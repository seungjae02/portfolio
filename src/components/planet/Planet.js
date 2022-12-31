import React, { useRef } from 'react'
import Container from "react-bootstrap/Container"
import ReactFloaterJs from 'react-floaterjs';
import './Planet.css';

function Planet({img}) {
    return (
        <div className="planet-container">
            <ReactFloaterJs>
                <img src={img} className="experience-img"/>
                {/* <div className="ring1"/>
                <div className="ring2"/> */}
            </ReactFloaterJs>
        </div>
    );
}

export default Planet