import React, { useEffect, useState } from "react";
import { Card,Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "../components/experience/ExperienceCard";
import TestImg from "./chance.jpeg";
import './Experience.css'

function Experience() {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
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
                description: exp.fields.desscription,
                tech: exp.fields.technologies,
                link: exp.fields.link
            })
            )
            );
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
                                    
    const listOfExperience = experience.map(exp => {
        return (
            <ExperienceCard company={exp.company} img={exp.logo} position={exp.position} 
                startend={exp.startend} description={exp.description} techs={exp.tech} link={exp.link}/>)
        });
    
    return (
        <section id="experience">
            <Col>
                {listOfExperience}
            </Col>
        </section>

      );
}

export default Experience;


