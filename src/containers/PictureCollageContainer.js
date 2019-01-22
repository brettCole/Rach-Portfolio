import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";

const PictureCollageContainer = () => {
  return (
    <Container className="px-0" fluid>
      <Row>
        <Col lg={4} xl={4}>
          <Image />
        </Col>
      </Row>
    </Container>
  );
};

export default PictureCollageContainer;
