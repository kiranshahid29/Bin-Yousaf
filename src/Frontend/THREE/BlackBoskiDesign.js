import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import LeftCarousel from './LeftCarousel';
import RightCategory from './RightCategory';

function BlackBoskiDesign() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={6} className='mt-24'>
            <LeftCarousel/>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} xl={6} className='mt-24'>
            <RightCategory />
          </Col>
          {/* <Col xs={12} sm={12} md={3} lg={3} xl={3} className="md:hidden block">
            <LeftCarousel/>
          </Col> */}
        </Row>
      </Container>

      <Container>
        <Row className="mt-10">
          <h1 className="text-center font-extrabold text-3xl font-sans md:font-Roboto">
            Related Products
          </h1>
          <Col className="mt-16">
            <img
              src="https://binyousaf.pk/wp-content/uploads/2023/02/7.jpg"
              width={400}
              height={500}
            />
            <p className="text-center mt-2 font-bold text-lg">
              Rose Gold Boski
            </p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
          <Col className="mt-16">
            <img
              src="https://binyousaf.pk/wp-content/uploads/2022/11/2-5.jpg"
              width={400}
              height={500}
            />
            <p className="text-center mt-2 font-bold text-lg">Camel Boski</p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
          <Col className="mt-16">
            <img
              src="https://binyousaf.pk/wp-content/uploads/2023/02/5.jpg"
              width={400}
              height={500}
            />
            <p className="text-center mt-2 font-bold text-lg">Grey Boski</p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
          <Col className="mt-16">
            <img
              src="https://binyousaf.pk/wp-content/uploads/2022/11/B2_11zon.jpg"
              width={400}
              height={500}
            />
            <p className="text-center mt-2 font-bold text-lg">
              Classical Boski
            </p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlackBoskiDesign
