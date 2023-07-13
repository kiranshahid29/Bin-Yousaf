import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Innerfooter() {
  return (
    <div>
      <footer className="text-white mt-20">
        <Container fluid>
          <Row className='bg-neutral-800 '>

            <Col md={4} className="mb-3  mb-md-0">
              <h1 className='font-bold mt-10'>Subscribe to receive Moren News</h1>
              <hr className='mt-4'/>
              <InputGroup className="mb-3 mt-10">
                <Form.Control className='bg-neutral-700 text-white h-14 ' style={{border:'0', borderRadius:'0'}}
                  placeholder="Email" />
                <InputGroup.Text id="basic-addon2" className='text-white bg-stone-900' style={{border:'0', borderRadius:'0'}}>Sign Up</InputGroup.Text>
              </InputGroup>
            </Col>

            <Col md={4} className="mb-3  mb-md-0">
              <h1 className='font-bold mt-10'>Help</h1>
              <hr className='mt-4' />
              <p className='mt-6 hover:text-yellow-700 text-sm'>Shipping <span className='ml-60'>Contect Us</span></p>
              <p className='mt-4 hover:text-yellow-700 text-sm'>Returns/Exchange</p>
            </Col>

            <Col md={4} className="mb-3 mb-md-0">
              <h1 className='font-bold mt-10'>Explore</h1>
              <hr className='mt-4' />
              <p className='mt-6 hover:text-yellow-700 text-sm'>About Us</p>
              <p className='mt-4 hover:text-yellow-700 text-sm'>Get the look</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Innerfooter
