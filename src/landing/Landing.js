import './Landing.css';
import React, { Component } from 'react';
import ReactFloaterJs from 'react-floaterjs';
import SpaceBung from '../images/space_bung.png'
import TypeAnimation from 'react-type-animation';
import ScrollDown from '../components/ScrollDownArrow';


function Landing() {
    return(  
        <section id="landing">
            <div className="flexbox-container">
                <div className="message-social-media-container">
                    <div className="landing-message-container landing-message-style">
                        <h1>
                            Hi! <span class="wave">👋</span> 
                            <br/>
                            My name is SeungJae and I'm a
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
                    
                    <div className="social-media-links">                             
                        <ul>
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
                </div>

                <ReactFloaterJs className="floatingBung">
                    <img src={SpaceBung} className="responsive-floatingBung"/>
                </ReactFloaterJs>
            </div>
            <ScrollDown section='prelude'/>
        </section>
    );
}
 
export default Landing;