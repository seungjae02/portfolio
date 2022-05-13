import './Landing.css'
import React, { Component } from 'react';
import ReactFloaterJs from 'react-floaterjs';
import SpaceBung from '../images/space_bung.png'

import Stars from '../components/Stars'
import NeonSign from '../components/NeonSign'


function Landing() {
    return(  
        <div>

            <Stars/>
        
            <div className="flexbox-container center">
                <NeonSign className="neonSign"/>
                        
                <ReactFloaterJs className="floatingBung">
                    <img src={SpaceBung}/>
                </ReactFloaterJs>
            </div>
        </div>
    );
}
 
export default Landing;