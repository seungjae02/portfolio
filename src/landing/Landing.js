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
                <div className="message-social-media-container">
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

                    <ul className="social-media-links">
                        <li>
                            <a href="https://www.linkedin.com/in/sj-yang/">
                            <i class="fab fa-linkedin-in icon"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/seungjae02">
                            <i class="fab fa-github icon"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/jay.yang.752861">
                            <i class="fab fa-facebook-f icon"></i></a></li>
                        <li>
                            <a href="mailto:seungjae.yang@mail.utoronto.ca">
                            <i class="fa fa-envelope icon"></i></a></li>
                    </ul>
                </div>

                
                        
                <ReactFloaterJs className="floatingBung">
                    <img src={SpaceBung} className="responsive-floatingBung"/>
                </ReactFloaterJs>
            </div>
        </div>
    );
}
 
export default Landing;