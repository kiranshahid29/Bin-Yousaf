import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { FcCheckmark } from "react-icons/fc";
import Button from "react-bootstrap/Button";
function CheckOut() {
  return (
    <div>
      <Container className="mt-32">
        <h1
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "50px",
          }}
          className="bg-gray-100 h-14 "
        >
          <FcCheckmark />
          <p className="ml-2 mt-4 text-sm">
            Returning Custmor?{" "}
            <span className="hover:text-yellow-700">Click here to login</span>
          </p>
        </h1>
        <h1
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "30px",
          }}
          className="bg-gray-100 h-14"
        >
          <FcCheckmark />
          <p className="ml-2 mt-4 text-sm">
            Have a coupon?{" "}
            <span className="hover:text-yellow-700">
              Click here to enter your code
            </span>
          </p>
        </h1>

        <Row>
          <Col xs={8}>
            <h1 className="ml-2 mt-10 text-2xl font-bold">Billings details</h1>
            <p
              style={{ borderColor: "orange" }}
              className="border-b-2 mt-4"
            ></p>

            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2 mt-8"
                  htmlFor="username"
                >
                  First name*
                </label>
                <input
                  className="border border-gray-400 p-2 w-80"
                  id="username"
                  name="username"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Company name(optional)
                </label>
                <input
                  className="border border-gray-400 p-2 w-full h-14"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">s
                  Country / Region*
                </label>
                <input
                  className="border border-gray-400 p-2 w-full h-14"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Street address*
                </label>
                <input
                  className="border border-gray-400 p-2 w-full h-14"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Home number and street name"
                />
                <input
                  className="border border-gray-400 p-2 w-full mt-4 h-14"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Apartment, suite, unit, etc.(optional)"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Town / City*
                </label>
                <input
                  className="border border-gray-400 p-2 w-full h-14"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Postcode / ZIP*
                </label>
                <input
                  className="border border-gray-400 p-2 w-full h-14"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Phone*
                </label>
                <input
                  className="border border-gray-400 p-2 w-full h-14"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Email address*
                </label>
                <input
                  className="border border-gray-400 p-2 w-full h-14"
                  id="password"
                  name="password"
                  type="email"
                />
              </div>

              <Form.Check
                style={{ borderRadius: "0" }}
                required
                label="Ship to different address?"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />

              <Form.Group
                className="mb-3 mt-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Order notes(optional)</Form.Label>
                <Form.Control
                  className="h-40"
                  as="textarea"
                  rows={3}
                  placeholder="Notes about your order,e.g. special notes for delivery"
                />
              </Form.Group>
            </form>
          </Col>
          <Col>
            <h1 className="ml-2 mt-10 text-2xl font-bold">Your Order</h1>
            <p
              style={{ borderColor: "orange" }}
              className="border-b-2 mt-4"
            ></p>
            <p className="mt-8 text-sm">
              Product <span className="ml-72">Subtotal</span>
            </p>
            <p className="border-b-2 mt-2"></p>
            <p className="mt-8 text-sm">
              Black Boski x8 <span className="ml-60">Rs 19,600</span>
            </p>
            <p className="border-b-2 mt-2"></p>
            <p className="mt-8 text-sm">
              Subtotal<span className="ml-72">Rs 19,600</span>
            </p>
            <p className="border-b-2 mt-2"></p>
            <p className="mt-8 text-sm">
              Shipping<span className="ml-72">Flat rate</span>
            </p>
            <p className="border-b-2 mt-2"></p>
            <p className="mt-8 text-sm">
              Total<span className="ml-72 font-bold text-xl">Rs 19,600</span>
            </p>
            <p className="border-b-2 mt-2"></p>

            <p className="mt-10 text-sm">Pay with cash upon delivery.</p>
            <p className="mt-10 text-sm">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>

            <Button
              className="bg-zinc-800 hover:bg-yellow-700 w-96 h-14 mt-8 text-base"
              style={{ borderRadius: "0", border: "none" }}
            >
              Place Order
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CheckOut;
