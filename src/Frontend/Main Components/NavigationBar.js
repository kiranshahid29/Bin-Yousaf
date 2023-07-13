// import React from 'react'
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";

const NavigationBar = () => {
  const [navSize, setnavSize] = useState("4rem");
  const [navColor, setnavColor] = useState("transparent");
  const [topNav, setTopNav] = useState(30);
  const [lgShow, setLgShow] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("6rem");
    window.scrollY > 10 ? setTopNav(0) : setTopNav(30);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div>
      <nav
        className="fixed w-100 mx-0 "
        style={{
          backgroundColor: navColor,
          height: navSize,
          top: topNav,
          zIndex: "2",
        }}
      >
        {/* Navbar content */}
        {[false].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            id="navbar"
            className="p-2  mx-0 mb-5"
          >
            <Container fluid>
              <p>Menu</p>
               {/* <h1 className='ml-2 mt-1'><TfiMenuAlt/></h1> */}
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Brand href="#" className="mx-auto">
                <img
                  src="https://binyousaf.pk/wp-content/uploads/2022/11/logo.png"
                  width={100}
                  height={80}
                />
              </Navbar.Brand>
              <div className="flex column">
                <h1>
                  <AiOutlineSearch />
                </h1>
                <h1>
                  <AiOutlineShoppingCart />
                </h1>
                <h1>
                  <FaFacebookF />
                </h1>
                <h1>
                  <IoLogoInstagram />
                </h1>
              </div>
              <Navbar.Offcanvas
                className="bg-dark text-light"
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton className="bg-light">
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-6 ">
                    <Nav.Link
                      href="/"
                      className="ml-5 text-xl hover:text-yellow-700"
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      href="BlackBoski"
                      className="ml-5 text-xl hover:text-yellow-700"
                    >
                      Boski
                    </Nav.Link>
                    <Nav.Link
                      href="/boskiDesign"
                      className="ml-5 text-xl hover:text-yellow-700"
                    >
                      Wash & wear
                    </Nav.Link>
                    <Nav.Link
                      href="Kurta"
                      className="ml-5 text-xl hover:text-yellow-700"
                    >
                      Kurta
                    </Nav.Link>
                    <Nav.Link
                      href="Men Shawl"
                      className="ml-5 text-xl hover:text-yellow-700"
                    >
                      Men Shawl
                    </Nav.Link>
                    <Nav.Link
                      href="Cotton"
                      className="ml-5 text-xl hover:text-yellow-700"
                    >
                      Cotton
                    </Nav.Link>
                    <Nav.Link
                      href="Karandi"
                      className="ml-5 text-xl hover:text-yellow-700"
                    >
                      Karandi
                    </Nav.Link>
                    <Nav.Link
                      href="Contact Us"
                      className="ml-5 text-xl hover:text-yellow-700"
                    >
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </nav>
    </div>
  );
};

export default NavigationBar;
