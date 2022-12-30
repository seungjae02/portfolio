
import React, { useEffect } from 'react';
import './About.css';
import ScrollDown from '../components/navigation/ScrollDownArrow';
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
    useEffect(() => {
        AOS.init();
        const crawlDiv = document.getElementById("crawl-div");
        if (crawlDiv) {
            console.log("ASD")
            
        }
    }, [])


    return (
        <div>
            <section id="prelude">
                <p className="prelude" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="3000">
                    Not so long ago...
                    In a galaxy not so far away...
                </p>
                <ScrollDown section="about"/>

            </section>

            <section id="buffer-section"></section>

            <section id="about">
                <div className="star-wars about-section-container">
                        <div className="about-message-container">
                            <div className="crawl-container">
                                <div id="crawl-div" className="crawl">
                                    <div className="inner-crawl">
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
                </div>
            </section>
        </div>
    );
}

export default About;

