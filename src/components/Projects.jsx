import React from 'react'
import '../project.css'
import phishingImage from '../image/phishing.jpeg'
import todoImage from '../image/todo.png'
import { Container, Row, Col } from 'react-bootstrap'
const Projects = () => {
    const openProject1 = () => {
        window.open('https://github.com/NagarajanSanthosh/URL-based-phishing.git', '_blank')
    }
    const openProject2 = () => {
        window.open('https://github.com/NagarajanSanthosh/todo-react.git', '_blank')
    }
    return (
        <div id='project' className='bottom-style'>
            <p className='text-starter text-description'>My Recent</p>
            <p className='title'>Projects</p>

            <Container>
                <Row>
                    <Col>
                        <div className="card" style={{ width: '20rem', height: '20rem' }}>
                            <img src={phishingImage} className="card-img-top" alt="phishing-image" />
                            <div className="card-body">
                                <h5 className="card-title">Url Based phishing detection</h5>
                                <button className='btn btn-dark rounded-pill rounded' onClick={openProject1}>GitHub</button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card" style={{ width: '20rem', height: '20rem' }}>
                            <img src={todoImage} className="card-img-top" alt="todo-image" />
                            <div className="card-body">
                                <h5 className="card-title">Todo List</h5>
                                <button className='btn btn-dark rounded-pill rounded' onClick={openProject2}>GitHub</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Projects