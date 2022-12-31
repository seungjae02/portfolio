import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import './GetInTouch.css';

function GetInTouch() {
    return (
        <div id="getintouch" className="d-flex text-align-center">
            <Row className="getintouch-container" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                <h1 className="getintouch-header">Get In Touch</h1>
                <h4 className="getintouch-body">I am currently seeking positions between August 2023 to September 2024. 
                                                Feel free to reach out to me at <a href="mailto:seungjae.yang@mail.utoronto.ca">seungjae.yang@mail.utoronto.ca</a> if you
                                                have any position that may be of my interest!</h4>
            </Row>
        </div>
    );  
}
export default GetInTouch