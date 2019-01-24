import React, { Component } from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
import { throttle } from "throttle-debounce";

class PictureCollageContainer extends Component {
  state = {
    isMobile: false
  };

  throttledWindowResize = throttle(200, () => {
    this.setState({ isMobile: window.innerWidth < 480 });
  });

  componentDidMount() {
    this.setState({ isMobile: window.innerWidth < 480 });
    window.addEventListener("resize", this.throttledWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.throttledWindowResize);
  }

  render() {
    const { isMobile } = this.state;

    return (
      <Container className="px-0 mt-2" fluid>
        {/* First Row */}
        <Row>
          <Col
            xs={3}
            style={{ backgroundColor: "orange", height: "100px" }}
            className="align-self-end mr-2"
          >
            <Image />
          </Col>
          <Col
            xs={3}
            style={{ backgroundColor: "blue", height: "90px", zIndex: 10 }}
            className="align-self-center mr-n2"
          >
            <Image />
          </Col>
          <Col
            xs={6}
            md={{ offset: 2, span: 2 }}
            className="align-self-end mb-n3"
            style={{ backgroundColor: "green", height: "150px", zIndex: 9 }}
          >
            <Image />
          </Col>
        </Row>
        {/* Second Row */}
        <Row>
          <Col
            xs={{ offset: 1, span: 5 }}
            style={{ backgroundColor: "yellow", zIndex: 8, height: "200px" }}
            className="align-self-end, mt-n4"
          >
            <Image style={{ zIndex: 99 }} className="align-self-end" />
          </Col>
          <Col
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", zIndex: 8, height: "110px" }}
            className=" align-self-center mt-n4 ml-2"
          >
            <Image style={{ zIndex: 99 }} className="align-self-end" />
          </Col>
        </Row>
        {/* Third Row */}
        <Row>
          <Col
            xs={{ offset: 2, span: 5 }}
            style={{ backgroundColor: "brown", zIndex: 9, height: "150px" }}
            className="align-self-start mt-n5"
          >
            <Image />
          </Col>
          <Col
            xs={{ offset: 1, span: 4 }}
            style={{ backgroundColor: "purple", height: "100px" }}
            className="align-self-start mt-n5"
          >
            <Image />
          </Col>
        </Row>
        {/* Fourth Row */}
        <Row>
          <Col
            xs={{ span: 4 }}
            style={{ backgroundColor: "grey", height: "100px" }}
            className="align-self-start mt-n3"
          >
            <Image />
          </Col>
          <Col
            xs={{ offset: 2, span: 6 }}
            style={{ backgroundColor: "magenta", height: "150px" }}
            className="align-self-start mt-n5"
          >
            <Image />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PictureCollageContainer;
