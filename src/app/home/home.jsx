import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

export default class Home extends Component {
  render() {
    return (
      <Container fluid="true" id="home" className="fullpage">
        {/* <Container className="fullpage"> */}
        <Row className="fullscreen center">
          <Col sm="6" className="gradient-right-orange fullscreen center">
            <img src={logo} alt="devoneru" className="logo" />
          </Col>
          <Col sm="6" className="text-left fullscreen center orange">
            <div>
              <h1 className="name">Heru Julyanto E</h1>
              <h3 className="job">Mobile Developer</h3>
              <p className="desc">
                I’m a Professional Mobile Developer, passionate about design &
                creative work. Curently Working as a fulltime mobile dev and
                freelance mobile dev. I read books and comics, play video game
                and watch movie in my freetime.
              </p>
            </div>
          </Col>
        </Row>
        {/* </Container> */}
      </Container>
    );
  }
}
