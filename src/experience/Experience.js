import React, { useEffect, useState } from "react";
import { Card,Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "../components/experience/ExperienceCard";
import TestImg from "./chance.jpeg";
import NeonSign from "../components/neonsign/NeonSign";
import AOS from 'aos';
import './Experience.css'

function Experience() {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        AOS.init();

        fetch("https://api.airtable.com/v0/" + process.env.REACT_APP_AIRTABLE_BASE_ID
                + "/experience?api_key=" + process.env.REACT_APP_AIRTABLE_API_KEY)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.records)
            setExperience(data.records.map(exp => ({
                company: exp.fields.company,
                logo: exp.fields.logo[0].url,
                position: exp.fields.position,
                startend: exp.fields.startend,
                description: exp.fields.description,
                tech: exp.fields.technologies,
                link: exp.fields.link,
                order: exp.fields.order,
                location: exp.fields.location
            })
            )
            );
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    experience.sort((a, b) => (a.order > b.order) ? 1: -1);
    const listOfExperience = experience.map((exp) => {
        return (
                <div data-aos={"slide-" + ((exp.order%2 === 0) ? "left" : "right")} 
                    data-aos-easing="exponential"
                    data-aos-duration="1000">
                    <ExperienceCard company={exp.company} img={exp.logo} position={exp.position} location={exp.location}
                    startend={exp.startend} description={exp.description} techs={exp.tech} link={exp.link}/>
                </div>
            );
        });
    
    return (
        <section id="experience">
            <Col>
                <Row>
                    <NeonSign message="My Work Experience"/>
                </Row>
                <Row className="hide-overflow">
                    {listOfExperience}
                </Row>
            </Col>
        </section>

      );
}

export default Experience;


