import React from "react";
import "./Section.css";
import { Container, Row, Col } from "react-bootstrap";

const section = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-evenly">
        <Col md={6}>
          <img className="sampleImage" src="images/sampleImage.png" alt="sample"></img>
        </Col>
        <Col md={6}>
          <span className="sampleText">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipi t lobortis laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad mi nim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default section;
