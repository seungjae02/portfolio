
import React, { useEffect } from 'react';
import './About.css';
import ScrollDown from '../components/navigation/ScrollDownArrow';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container'


function About() {
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <section>
            <Container>
                <section id="prelude">
                    <p className="prelude" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="3000">
                        Not so long ago...
                        In a galaxy not so far away...
                    </p>
                </section>
            </Container>

            <Container>
                <section id="about">
                    <div className="star-wars about-section-container" data-aos="fade-in" data-aos-delay="300" data-aos-duration="3000">
                            <div className="about-message-container">
                                <div className="crawl-container">
                                    <div className="crawl">
                                        <h1 className="sw-title">About Me:</h1><br/>
                                        <p>Hi! My name is Jay and I enjoy creating things by programming, circuit-ing, etc!</p><br/>
                                        <p>My interest in engineering started back in 2013 when I decided to build fully-functional candy machines out of Lego.
                                            In 2020, I transitioned to a virtual way of building — computer programming! </p><br/>
                                        <p>Today, I've had the priveledge to work at a <a href="https://about.google/">big tech company</a>, 
                                            a <a href="https://www.bankofcanada.ca/">big bank</a>,
                                            a <a href="https://yourenext.ca/">student-led career organization</a>, 
                                            an <a href="https://outreach.engineering.utoronto.ca/">engineering program</a> as a mentor,
                                             and a <a href="https://fibos.ca/">start-up</a>.</p><br/>
                                        <p>I study <a href="https://www.ece.utoronto.ca/">Electrical & Computer Engineering at the University of Toronto</a>, 
                                            learning tools to help me implement intricate solutions to real-life problems.</p><br/>
                                        <p>My career goal is to create pragmatic solutions that empower users and make a lasting impact.</p>
                                    </div>
                                </div>
                            </div>    
                    </div>
                </section>
            </Container>
        </section>
    );
}

export default About;

