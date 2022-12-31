
import './Landing.css';
import React, {useState,useEffect} from 'react';
import ReactFloaterJs from 'react-floaterjs';
import SpaceBung from '../images/space_bung.png'
import { Typewriter } from 'react-simple-typewriter'
import ScrollDown from '../components/navigation/ScrollDownArrow';
import {Row, Col, Container} from 'react-bootstrap';


function Landing() {
    const [resume, setResume] = useState("");

    useEffect(() => {
        fetch("https://api.airtable.com/v0/" + process.env.REACT_APP_AIRTABLE_BASE_ID
                + "/resume?api_key=" + process.env.REACT_APP_AIRTABLE_API_KEY)
        .then((res) => res.json())
        .then((data) => {
            setResume(data.records[0].fields.resume[0].url);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return(
        <section id="landing">
            <Container fluid>
                <Row className="responsive-margin justify-content-md-center align-items-center">
                    <Col md={5}>
                        <h1 className="mb-3 landing-message-style">
                            Hi! <span className="wave">👋</span> 
                            <br/>
                            I am Jay and I am a:
                            <div className="whoisbung">
                                <Typewriter
                                    words={['Problem Solver', 'Team Worker', 'Self Learner']}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </div>
                        </h1>
                        <Row>                 
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/sj-yang/">
                                    <i className="fab fa-linkedin-in icon"></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/seungjae02">
                                    <i className="fab fa-github icon"></i></a>
                                </li>
                                <li>
                                    <a href="mailto:seungjae.yang@mail.utoronto.ca">
                                    <i className="fa fa-envelope icon"></i></a></li>
                                <li>
                                    <a href={resume}>
                                    <i className="fa fa-file icon"></i></a></li>
                            </ul>
                        </Row>         
                    </Col>

                    <Col md={5} className="justify-content-center align-items-center">
                        <ReactFloaterJs>
                            <img src={SpaceBung} className="responsive-floatingBung"/>
                        </ReactFloaterJs>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Landing;