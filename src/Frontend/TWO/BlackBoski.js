import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Left from "./Left";
import Right from "./Right";

function BlackBoski() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} className="hidden md:block">
            <Left />
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} xl={9}>
            <Right />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} className="md:hidden block">
            <Left />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlackBoski;
