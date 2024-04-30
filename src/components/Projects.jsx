import React from 'react'
import '../project.css'
import phishingImage from '../image/phishing.jpeg'
import todoImage from '../image/todo.png'

const Projects = () => {
    const openProject1 = () => {
        window.open('https://github.com/NagarajanSanthosh/URL-based-phishing.git', '_blank')
    }
    const openProject2 = () => {
        window.open('https://github.com/NagarajanSanthosh/todo-react.git', '_blank')
    }
    return (
        <div id='project'>
            <p  className='text-starter'>My Recent</p>
            <p className='title'>Projects</p>
            <div>
                <div>

                    <img className='' src={phishingImage} alt='project1' />
                    <div>
                        <h3>Url Based phishing detection</h3>
                        <button onClick={openProject1}>GitHub</button>
                    </div>
                </div>
                <div>

                    <img src={todoImage} alt='project12' />
                    <div>
                        <h3>Todo List</h3>
                        <button onClick={openProject2}>GitHub</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects