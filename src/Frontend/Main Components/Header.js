import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <div>
      <Container fluid className='text-center bg-dark text-light py-2'>
      <Row>
        <Col className='hover:text-yellow-600'><p>FREE STANDER DELIVERY WITH MIN.SPEND OF $60</p></Col>
      </Row>
    </Container>
    </div>
  )
}

export default Header
