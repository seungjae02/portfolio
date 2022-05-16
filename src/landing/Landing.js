import './Landing.css'
import React, { Component } from 'react';
import ReactFloaterJs from 'react-floaterjs';
import SpaceBung from '../images/space_bung.png'

import Stars from '../components/Stars'
import NeonSign from '../components/NeonSign'
import TypeAnimation from 'react-type-animation';


function Landing() {
    return(  
        <div>

            <Stars/>
        
            <div className="flexbox-container center">
                <div className="landing-message-container landing-message-style">
                        <h1>
                            Hi, my name is Jay and I am a
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                'Aspiring Software Engineer',
                                3000,
                                'Computer Engineering Student',
                                3000,
                                ]}
                                repeat={Infinity}
                            />
                        </h1>
                </div>

                
                        
                <ReactFloaterJs className="floatingBung">
                    <img src={SpaceBung}/>
                </ReactFloaterJs>
            </div>
        </div>
    );
}
 
export default Landing;