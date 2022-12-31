import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./ExperienceCard.css";
import Planet from "../planet/Planet";
import TechChips from "../techchips/TechChips";



function ExperienceCard({company, img, position, link, description, startend, techs, location}) {
  return (
        <Card horizontal className="experience-card-view">
            <div className="card-horizontal">
                <Col className="d-flex justify-content-center align-items-center">
                    <Planet img={img}/>
                </Col>
                <Col>
                <div className="card-body">
                    <h4 className="card-title"><a className="company-style" href={link}>{company}</a> - {position}</h4>
                    <h5>{startend + " | "}{location}</h5>
                    <TechChips techs={techs}/>

                    <ul>
                        {description.map(bpoint => {return (<li>{bpoint}</li>);})}
                    </ul>
                </div>
                </Col>
            </div>
        </Card>
  );
}
export default ExperienceCard;