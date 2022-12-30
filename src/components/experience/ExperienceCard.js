import React from "react";
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./ExperienceCard.css";



function ExperienceCard({company, img, position, link, description, startend, techs}) {
  return (
    <Container fluid className="project-card">
        <Row>
            <div className="col-12 mt-3">
                <Card horizontal className="project-card-view">
                    <div className="card-horizontal">
                        <Card.Img className="experience-img" src={img} />
                        <div className="card-body">
                            <h4 className="card-title">{company}</h4>
                            <p className="card-text">
                            {description}
                            </p>
                            <p>
                            Link: {link}
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </Row>
    </Container>
  );
}
export default ExperienceCard;