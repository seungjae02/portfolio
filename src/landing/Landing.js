import './Landing.css'
import React, { Component } from 'react';
import ReactFloaterJs from 'react-floaterjs';
import Bung from '../images/bung2.png'

import Stars from '../components/Stars'
import NeonSign from '../components/NeonSign'


function Landing() {
    return(  
        <div>

            <Stars/>
        
            <div className="flexbox-container center">
                <NeonSign className="neonSign"/>
                        
                <ReactFloaterJs className="floatingBung">
                    <img src={Bung}/>
                </ReactFloaterJs>
            </div>
        </div>
    );
}
 
export default Landing;