import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
// import Magnifier from "react-magnifier";

function Right() {
  return (
    <div>
      <Container className="mt-40">
        <Row>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
          <Link to="/BlackBoski/blackBoskiDesign">
            <img src="https://binyousaf.pk/wp-content/uploads/2022/11/b1.jpg" />
            {/* <Magnifier src={"https://binyousaf.pk/wp-content/uploads/2022/11/b1.jpg"} width={500} /> */}
            <p className="text-center mt-2 font-bold text-lg">Black Boski</p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.2,450</span>
            </p>
            </Link>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2022/11/2-5.jpg" />
            <p className="text-center mt-2 font-bold text-lg">Camel Boski</p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2022/11/B2_11zon.jpg" />
            <p className="text-center mt-2 font-bold text-lg">
              Classical Boski
            </p>
            <p className="text-orange-700 text-base ml-2 text-center">
              Rs.8,500
            </p>
          </Col>
        </Row>
        <Row className="mt-8">
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2023/02/6.jpg" />
            <p className="text-center mt-2 font-bold text-lg">Greenish Boski</p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2023/02/5.jpg" />
            <p className="text-center mt-2 font-bold text-lg">Grey Boski</p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2022/11/4-4.jpg" />
            <p className="text-center mt-2 font-bold text-lg">
              Light Green Boski
            </p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
        </Row>
        <Row className="mt-8">
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2022/11/do-gorah-1.jpg" />
            <p className="text-center mt-2 font-bold text-lg">Premium Boski</p>
            <p className="text-xs text-center text-gray-400">
              Rs.18,000
              <span className="text-orange-700 text-base ml-2">Rs.11,000</span>
            </p>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2022/11/1.jpg" />
            <p className="text-center mt-2 font-bold text-lg">
              Roman Silk Boski
            </p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2023/02/7.jpg" />
            <p className="text-center mt-2 font-bold text-lg">
              Rose Gold Boski
            </p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
        </Row>
        <Row className="mt-8" s>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2022/11/3-6.jpg" />
            <p className="text-center mt-2 font-bold text-lg">Silver Boski</p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2022/11/b1_11zon.jpg" />
            <p className="text-center mt-2 font-bold text-lg">Standard Boski</p>
            <p className="text-orange-700 text-base ml-2 text-center">
              Rs.6,500
            </p>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
            <img src="https://binyousaf.pk/wp-content/uploads/2022/11/1-5.jpg" />
            <p className="text-center mt-2 font-bold text-lg">White Boski</p>
            <p className="text-xs text-center text-gray-400">
              Rs.4,000
              <span className="text-orange-700 text-base ml-2">Rs.1,990</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Right;
