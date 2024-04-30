import React from 'react'
import image from '../image/profile2.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import '../index.css'
const Intro = () => {
    const openPDF = () => {
        window.open('https://drive.google.com/file/d/1SiwTAbO2DALuv1Sj7HuWFfpfXUf625Wo/view?usp=sharing', '_blank');
    }
    return (
        <div  >
            <Container className='profile'>
                <Row>

                    <Col className='image-container'>
                        <div >
                            <img className='image-style' src={image} alt='profile' />
                        </div>
                    </Col>
                    <Col className='text-container'>
                        <div className=''>
                            <p>Hi, I'm</p>
                            <h1>Santhosh</h1>
                            <p>Frontend Developer</p>
                            <button className='btn btn-dark' onClick={openPDF}>Resume</button>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Intro