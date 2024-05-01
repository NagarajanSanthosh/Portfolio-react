import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../about.css'
import aboutImage from '../image/web-fotor.jpg'
import { Container, Row, Col } from 'react-bootstrap'
const About = () => {
  return (
    <div id='about' className='bottom-style'>
      <div>
        <p className='text-starter text-description'>Get to Know More</p>
        <h5 className='title'>
          About
        </h5>
      </div>
      <div >

        <Container>
          <Row>
            <Col>
              <img src={aboutImage} alt='about-image' className='image-container' />
            </Col>
            <Col className='text-container'>
              <div>
                <h5>Education</h5>
                <p>B.Tech. Bachelor's Degree</p>
                <p>H.S.C. Higher Secondary</p>
              </div>
              <div>
                <p>I am a self-motivated, final-year student with bachelor's degree. I am looking forward to contribute to the growing industry with my potential skills.</p>
              </div>
            </Col>

          </Row>

        </Container>

      </div>
    </div >
  )
}

export default About