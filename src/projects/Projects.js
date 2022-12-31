import React, {useState, useEffect} from "react";
import AOS from 'aos';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/projects/ProjectCard";
import './Projects.css'

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        AOS.init();

        fetch("https://api.airtable.com/v0/" + process.env.REACT_APP_AIRTABLE_BASE_ID
                + "/projects?api_key=" + process.env.REACT_APP_AIRTABLE_API_KEY)
        .then((res) => res.json())
        .then((data) => {
            setProjects(data.records.map(proj => ({
                title: proj.fields.title,
                image: proj.fields.image[0].url,
                description: proj.fields.description,
                techs: proj.fields.techs,
                github: proj.fields.github,
                demo: proj.fields.demo,
                order: proj.fields.order
            })
            )
            );
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);


    return (
        <Container fluid className="project-section">
          <Container>
          <     Row data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                    <h1 className="experience-header">My <span className="experience">Personal Projects</span></h1>
                    <h4 className="experience-header">Here are a few projects I've worked on.</h4>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {projects.map(proj => {
                        return (
                                <Col md={4} className="project-card" data-aos="slide-up" data-aos-duration="1000">
                                    <ProjectCard
                                    imgPath={proj.image}
                                    isBlog={false}
                                    title={proj.title}
                                    description={proj.description}
                                    ghLink={proj.github}
                                    demoLink={proj.demo}
                                    />
                                </Col>
                        )
                    ;})}
                </Row>
          </Container>
        </Container>
      );
}

export default Projects;


