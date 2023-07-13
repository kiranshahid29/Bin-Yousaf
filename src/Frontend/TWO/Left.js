import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Left() {
  return (
    <div>
      <Container className="flex mt-32 ml-10">
        <Row>
          <Col className="mt-10">
            <Link></Link>
            <br />
            <Link to="/">
              <p className="font-bold text-xl">Categories</p>
            </Link>
            <br />
            <Link to="/">
              <p>Men</p>
            </Link>
            <br />
            <Link to="/">
              <p className="mt-2">Boski</p>
            </Link>
            <br />
            <Link to="/">
              <p>Wash & Wear</p>
            </Link>
            <br />
            <Link to="/">
              <p>Kurta</p>
            </Link>
            <br />
            <Link to="/">
              <p>Men Shawl</p>
            </Link>
            <br />
            <Link to="/">
              <p>Cotton</p>
            </Link>
            <br />
            <Link to="/">
              <p>Karandi</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Left;
