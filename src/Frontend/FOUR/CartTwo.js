import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"

function CartTwo() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} className="mt-20 ml-20">
            <Row flex flex-row>
              <Col xs={6}>
                {" "}
                Product
                <img
                  className=" mt-10"
                  src="https://binyousaf.pk/wp-content/uploads/2022/11/b1-600x750.jpg"
                  width={70}
                  height={70}
                />
              </Col>
              <Col sm>
                Price
                <p className="mt-16">₨ 2,450</p>
              </Col>
              <Col sm>
                Quantity
                {/* <button className='border p-2'
          onClick={() => setCount(count - 1)}>
         </button>
            <p className='border p-2'> {count}</p>

         <button className='border p-2'
         onClick={() => setCount(count + 1)}>
         </button> */}
              </Col>
              <Col sm>
                Subtotal
                <p className="mt-16">₨ 7,350</p>
              </Col>
            </Row>
            <p className="border-b mt-10"></p>
          </Col>

          <Col className="ml-10 mt-20 mr-40 bg-gray-100">
            <p className="mt-6 ml-6 font-semibold">Cart totals</p>
            <p className="mt-10 ml-6 text-sm">
              Subtotal <span className="ml-48">₨ 9,800</span>
            </p>
            <p className="mt-4 ml-6 text-sm">
              Shipping <span className="ml-48">Flate rate</span>
            </p>
            <p className="ml-52 mt-2 text-sm">
              Shipping to <span className="font-bold">Punjab</span>
            </p>
            <p className="ml-60 mt-2 text-sm hover:text-yellow-700">
              Change address
            </p>
            <p className="border-b mt-4 text-zinc"></p>
            <p className="mt-2 ml-6">
              Total <span className="ml-56">₨ 9,800</span>
            </p>
            <Button
              className="bg-zinc-800 hover:bg-yellow-700 w-full h-14 mt-8 text-sm"
              style={{ borderRadius: "0", border: "none", padding: "0" }}
            >
              <Link to="/checkOut">PROCEED TO CHECKOUT</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CartTwo
