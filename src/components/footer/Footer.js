import './Footer.css';
import { Container, Row } from "react-bootstrap";
import React, { Component } from 'react';

export default function Footer() {
    return (
        <footer id="footer">
            <Container fluid>
                <Row>
                    <div class="text-center" style={{padding:'2.5em'}}>
                        <FooterIcons/>
                        <FooterText/>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}

// If Font Awesome icons are not working, check the Font Awesome DDN key in index.html file inside the head tags
const FooterIcons = () => {
    return (
        <Row>
            <div class="social-media">
                <div class="icons-wrapper">
                    <div class="icon">
                        <a href="https://www.linkedin.com/in/seung-jae-yang-4829881aa/" target="_blank" rel="noopener noreferrer">
                            <span class="fa-stack">
                                <i class="fab fa-linkedin fa-stack-2x" style={{color: 'white'}}></i>
                            </span>
                        </a>
                    </div>
                    <div class="icon">
                        <a href="seungjae.yang@mail.utoronto.ca" target="_blank" rel="noopener noreferrer">
                            <span class="fa-stack">
                                <i class="fas fa-envelope fa-stack-2x" style={{color: 'white'}}></i>
                            </span>
                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://github.com/seungjae02" target="_blank" rel="noopener noreferrer">
                            <span class="fa-stack">
                                <i class="fa fa-github fa-stack-2x" style={{color: 'white'}}></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </Row>
    );
}

const FooterText = () => {
    return (
        <div class="footer-text">
            <p>Email me at: <strong>seungjae.yang@mail.utoronto.ca</strong></p>
            <p>Developed by Seung Jae Yang</p>
            <p>&copy; 2022 Seung Jae Yang</p>
        </div>
    );
}