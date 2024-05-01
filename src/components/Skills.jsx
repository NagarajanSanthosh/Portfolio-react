import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Skills = () => {
  return (
    <div id='skills' className='mt-4 mb-4'>
      <p className='fs-5 text-center'>Explore My Skills</p>
      <h2 className='text-center mb-4'>Skills</h2>

      <Container>
        <Row className='gx-4'>
          <Col md={6} className='border p-4'>
            <div className='d-flex flex-column h-100 justify-content-center align-items-start'>
              <h4>Software Developer</h4>
              <p>I have always liked writing clean and maintainable code.</p>
              <p>I like to code in Java, JavaScript, Node.js, C, MySQL, Python.</p>
              <h5>Tools</h5>
              <ul>
                <li>Vs Code</li>
                <li>IntelliJ IDEA</li>
                <li>Eclipse</li>
                <li>Google Colab</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className='border p-4'>
            <div className='d-flex flex-column h-100 justify-content-center align-items-start'>
              <h4>Front-end Developer</h4>
              <p>I enjoy creating visually appealing transitions and effects on the frontend and bringing new concepts to life.</p>
              <h5>Skills</h5>
              <p>HTML, CSS, JavaScript, Bootstrap, React.js, Redux, Firebase, Git.</p>
              <h5>Tools</h5>
              <ul>
                <li>Vs Code</li>
                <li>GitHub</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Skills;
