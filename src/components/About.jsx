import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../about.css'; // Import your custom CSS for the About component
import aboutImage from '../image/web-fotor.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div id='about' style={{ background: '#fff', color: '#000', padding: '50px 0' }}>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} className='text-center mb-4'>
            <p className='intro-text'>Get to Know More</p>
            <h5 className='intro-heading'>About</h5>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col lg={6}>
            <img src={aboutImage} alt='about-image' className='img-fluid' style={{ borderRadius: '10px' }} />
          </Col>
          <Col lg={6}>
            <div>
              <h5>Education</h5>
              <p>B.Tech. Bachelor's Degree</p>
              <p>H.S.C. Higher Secondary</p>
            </div>
            <div>
              <p>I am a self-motivated, final-year student with a bachelor's degree. I am looking forward to contributing to the growing industry with my potential skills.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
