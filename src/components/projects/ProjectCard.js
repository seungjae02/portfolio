import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import TechChips from "../techchips/TechChips";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import "./ProjectCard.css";

function ProjectCard(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <TechChips techs={props.techs}/>
                <Card.Text style={{ textAlign: "justify" }}>
                {props.description}
                </Card.Text>
                <Button className="btn-github" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
                </Button>
                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                {!props.isBlog && props.demoLink && (
                <Button
                    className="btn-demo"
                    href={props.demoLink}
                    target="_blank"
                    style={{ marginLeft: "10px" }}
                >
                    <CgWebsite /> &nbsp;
                    {"Demo"}
                </Button>
                )}
            </Card.Body>
        </Card>
    );
}
export default ProjectCard;