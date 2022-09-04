import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { projectList } from "../components/projectData";
import Header from "../components/Header";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="project-container">
        {/* <h1>My recent works</h1> */}
        <Container fluid m={5}>
          <Row xs={1} md={2} lg={3}>
            {projectList.map((project) => (
              <Col key={project.id} className="g-5">
                <Card border="light">
                  <Card.Img variant="top" src={project.img} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    {project?.react && (
                      <Badge pill bg="info">
                        {project.react}
                      </Badge>
                    )}
                    {project?.js && (
                      <Badge pill bg="info">
                        {project.js}
                      </Badge>
                    )}
                    {project?.css && (
                      <Badge pill bg="info">
                        {project.css}
                      </Badge>
                    )}
                    {project?.paw && (
                      <Badge pill bg="warning">
                        {project.paw}
                      </Badge>
                    )}

                    <div className="hover-container">
                      <Card.Text>{project.desc}</Card.Text>
                      <div className="d-flex justify-content-xl-between">
                        <Button variant="light" href={project.src} size="sm">
                          See project
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          href={project.code}
                        >
                          Souce Code
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;
