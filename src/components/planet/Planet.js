import React, { useRef } from 'react'
import Container from "react-bootstrap/Container"
import ReactFloaterJs from 'react-floaterjs';
import './Planet.css';

function Planet({img}) {
    return (
        <div className="planet-container">
            <img src={img} className="experience-img"/>
        </div>
    );
}

export default Planet