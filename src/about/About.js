
import React, { Component } from 'react';
import './About.css';
import ScrollDown from '../components/ScrollDownArrow';


function About() {
    return (
        <div>
            <section id="prelude">
                <p className="prelude">
                    A long time ago...
                    In a galaxy far, far away...
                </p>
                <ScrollDown section="about"/>

            </section>

            <section id="about">
                <div className="star-wars about-section-container">
                        <div className="about-message-container">
                            <div className="crawl-container">
                                <div className="crawl">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="sw-title">
                                        <p>Seung Jae Yang</p>
                                        <h1>Aspiring Software Engineer</h1>
                                    </div>
                                    <p>Currently a junior (year 3) Computer Engineering student at the University of Toronto.</p>
                                    <p>Loves programming and designing and implementing intricate solutions to real-life problems.</p>
                                    <p>Has a career goal to create pragmatic solutions that empower users and make a lasting impact.</p>
                                    <p>Enjoys playing and making music as hobby. Recently picked up keyboard building as hobby.</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>    
                </div>
            </section>
        </div>
    );
}

export default About;

