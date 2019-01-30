import React, { Component } from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
import { throttle } from "throttle-debounce";

class PictureCollageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isMedium: false,
      isLarge: false,
      isExtraLarge: false
    };
  }

  throttledWindowResize = throttle(200, () => {
    this.setState({
      isMobile: window.innerWidth < 480,
      isMedium: window.innerWidth > 480 && window.innerWidth <= 768,
      isLarge: window.innerWidth > 768 && window.innerWidth <= 992,
      isExtraLarge: window.innerWidth > 992
    });
  });

  componentDidMount() {
    // this.setState({ isMobile: window.innerWidth < 480 });
    this.setState({
      isMobile: window.innerWidth < 480,
      isMedium: window.innerWidth > 480 && window.innerWidth <= 768,
      isLarge: window.innerWidth > 768 && window.innerWidth <= 992,
      isExtraLarge: window.innerWidth > 992
    });
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
          {/* First Row First Column */}
          <Col
            xs={3}
            lg={2}
            // Mobile style commented out
            style={{ backgroundColor: "orange", height: "100px" }}
            // Medium style commented out
            // style={{ backgroundColor: "orange", height: "150px" }}
            // Large style commented out
            // style={{ backgroundColor: "orange", height: "200px" }}
            // style={{ height: "100px" }}
            // className="align-self-end mr-2 p-0"
            className={
              "align-self-end p-0 " +
              (this.state.isLarge || this.state.isExtraLarge ? "mr-n5" : "mr-2")
            }
          >
            <Image
              src={require("../images/ishan-seefromthesky-341261.jpg")}
              className="w-100 h-100"
              // style={{ minWidth: "100%", height: "100%" }}
              // alt="testing"
              fluid
            />
          </Col>
          {/* First Row Second Column */}
          <Col
            xs={3}
            lg={2}
            // Mobile style commented out
            style={{ backgroundColor: "blue", height: "90px", zIndex: 10 }}
            // Medium style commented out
            // style={{ backgroundColor: "blue", height: "140px", zIndex: 10 }}
            // style={{ backgroundColor: "blue", height: "190px", zIndex: 10 }}
            // style={{ height: "90px", zIndex: 10 }}
            // className="align-self-center mr-n2 p-0"
            className="align-self-center mr-n5 p-0"
          >
            <Image
              className="w-100 h-100"
              src={require("../images/ishan-seefromthesky-341261.jpg")}
              fluid
            />
          </Col>
          {/* First Row Third Column */}
          <Col
            xs={6}
            lg={4}
            // Mobile style commented out
            style={{ backgroundColor: "green", height: "150px", zIndex: 9 }}
            // Medium style commented out
            // style={{ backgroundColor: "green", height: "200px", zIndex: 9 }}
            // style={{ backgroundColor: "green", height: "250px", zIndex: 9 }}
            // className="align-self-end mb-n3 p-0"
            className="align-self-end mb-n5 p-0"

            // style={{ height: "150px", zIndex: 9 }}
          >
            <Image
              src={require("../images/ishan-seefromthesky-341261.jpg")}
              className="w-100 h-100"
              fluid
            />
          </Col>
          {/* First Row Conditional Fourth Column */}
          <Col
            lg={5}
            className="d-none d-lg-block p-0"
            style={{ height: "150px" }}
          >
            <Image
              src={require("../images/ishan-seefromthesky-341261.jpg")}
              className="w-100 h-100"
              fluid
            />
          </Col>
        </Row>
        {/* Second Row */}
        <Row>
          <Col
            xs={{ offset: 1, span: 5 }}
            // Mobile style commented out
            style={{ backgroundColor: "yellow", zIndex: 8, height: "200px" }}
            // Medium style commented out
            // style={{ backgroundColor: "yellow", zIndex: 8, height: "250px" }}
            // style={{ backgroundColor: "yellow", zIndex: 8, height: "300px" }}
            // style={{ zIndex: 8, height: "200px" }}
            className="align-self-end, mt-n4 p-0"
          >
            <Image
              style={{
                zIndex: 99
              }}
              className="align-self-end h-100 w-100"
              src={require("../images/ishan-seefromthesky-341261.jpg")}
              fluid
            />
          </Col>
          <Col
            xs={{ span: 4 }}
            // Mobile style commented out
            style={{ backgroundColor: "red", zIndex: 8, height: "110px" }}
            // Medium style commented out
            // style={{ backgroundColor: "red", zIndex: 8, height: "160px" }}
            // style={{ backgroundColor: "red", zIndex: 8, height: "210px" }}
            // style={{ zIndex: 8, height: "110px" }}
            className=" align-self-center mt-n4 ml-2 p-0"
          >
            <Image
              src={require("../images/ishan-seefromthesky-341261.jpg")}
              style={{ zIndex: 99 }}
              className="align-self-end w-100 h-100"
              fluid
            />
          </Col>
        </Row>
        {/* Third Row */}
        <Row>
          <Col
            xs={{ offset: 2, span: 5 }}
            // Mobile style commented out
            style={{ backgroundColor: "brown", zIndex: 9, height: "150px" }}
            // Medium style commented out
            // style={{ backgroundColor: "brown", zIndex: 9, height: "200px" }}
            // style={{ backgroundColor: "brown", zIndex: 9, height: "250px" }}
            // style={{ zIndex: 9, height: "150px" }}
            className="align-self-start mt-n5 p-0"
          >
            <Image
              src={require("../images/ishan-seefromthesky-341261.jpg")}
              className="w-100 h-100"
              fluid
            />
          </Col>
          <Col
            xs={{ offset: 1, span: 4 }}
            // Mobile style commented out
            style={{ backgroundColor: "purple", height: "100px" }}
            // Medium style commented out
            // style={{ backgroundColor: "purple", height: "150px" }}
            // style={{ backgroundColor: "purple", height: "200px" }}
            // style={{ height: "100px" }}
            className="align-self-start mt-n5 p-0"
          >
            <Image
              src={require("../images/ishan-seefromthesky-341261.jpg")}
              className="w-100 h-100"
              fluid
            />
          </Col>
        </Row>
        {/* Fourth Row */}
        <Row>
          <Col
            xs={{ span: 4 }}
            // Mobile style commented out
            style={{ backgroundColor: "grey", height: "100px" }}
            // Medium style commented out
            // style={{ backgroundColor: "grey", height: "150px" }}
            // style={{ backgroundColor: "grey", height: "200px" }}
            // style={{ height: "100px" }}
            className="align-self-start mt-n3 p-0"
          >
            <Image
              src={require("../images/ishan-seefromthesky-341261.jpg")}
              className="w-100 h-100"
              fluid
            />
          </Col>
          <Col
            xs={{ offset: 2, span: 6 }}
            // Mobile style commented out
            style={{ backgroundColor: "magenta", height: "150px", zIndex: 5 }}
            // Medium style commented out
            // style={{ backgroundColor: "magenta", height: "200px", zIndex: 5 }}
            // style={{ backgroundColor: "magenta", height: "250px", zIndex: 5 }}
            // style={{ height: "150px" }}
            className="align-self-start mt-n5 p-0"
          >
            <Image
              src={require("../images/ishan-seefromthesky-341261.jpg")}
              className="w-100 h-100"
              fluid
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PictureCollageContainer;
