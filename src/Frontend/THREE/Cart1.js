import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Link } from "react-router-dom";

function Cart1() {
  return (
    <div>
       <div className="w-25 h-full absolute top-0  bg-white right-0 z-10 mt-10">
        <div className="flex flex-col bg-white mt-20">
          <h1 className="ml-12 font-bold text-2xl font-sans">Shopping Cart</h1>
          <Row>
            <Col>
              <img
                className="ml-12 mt-10"
                src="https://binyousaf.pk/wp-content/uploads/2022/11/b1-600x750.jpg"
                width={70}
                height={70}
              />
            </Col>
            <Col className="mt-10 mr-36 hover:text-yellow-700">
              Black Boski
              <p>8 × ₨ 2,450</p>
            </Col>
          </Row>
          <h1 className="ml-12 mt-6 font-bold">
            Subtotal: <span className="font-medium ml-40">₨ 19,600</span>
          </h1>
          <Button
            className="bg-zinc-800 hover:bg-yellow-700 w-80 h-14 ml-10 mt-8 text-base "
            style={{ borderRadius: "0", border: "none" }}
          >
            <Link to="/viewCart">View cart</Link>
          </Button>
          <Button
            className="bg-zinc-800 hover:bg-yellow-700 w-80 h-14 ml-10 mt-2 text-base "
            style={{ borderRadius: "0", border: "none" }}
          >
            <Link to="/checkOut">Checkout</Link>
          </Button>
        </div>
      </div>
{/*
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="mt-10 m-10">
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}
    </div>
  );
}

export default Cart1;
