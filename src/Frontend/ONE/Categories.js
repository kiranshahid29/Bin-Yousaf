import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Categories() {
    return (
        <div>
            <p className='text-center mt-28 text-4xl font-bold'>MEN</p>
            <p className='text-center text-orange-700'>COLLECTIONs 2022</p>
            <Container  className='mt-4'>
                <Row className='py-34 px-24'>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
                        <img src="https://binyousaf.pk/wp-content/uploads/2022/11/Boski.jpg" />
                        <p className='text-center text-2xl font-bold text-gray-400 mt-2'>Boski</p>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
                        <img src="https://binyousaf.pk/wp-content/uploads/2022/11/Wash-and-wear.jpg" />
                        <p className='text-center text-2xl font-bold text-gray-400 mt-2'>Wash & Wear</p>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
                        <img src="https://binyousaf.pk/wp-content/uploads/2022/11/kurta.jpg" />
                        <p className='text-center text-2xl font-bold text-gray-400 mt-2'>Kurta</p>
                    </Col>
                </Row>

                <Row className='py-34 px-24 mt-5'>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
                        <img src="https://binyousaf.pk/wp-content/uploads/2022/11/shawls.jpg" />
                        <p className='text-center text-2xl font-bold text-gray-400 mt-2'>Men Shawl</p>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
                        <img src="https://binyousaf.pk/wp-content/uploads/2022/11/cotton.jpg" />
                        <p className='text-center text-2xl font-bold text-gray-400 mt-2'>Cotton</p>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={12}>
                        <img src="https://binyousaf.pk/wp-content/uploads/2022/11/karandi.jpg" />
                        <p className='text-center text-2xl font-bold text-gray-400 mt-2'>Karandi</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Categories
