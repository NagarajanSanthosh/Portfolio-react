import React from 'react'

const Skills = () => {
  return (
    <div id='skills'>
      <p  className='text-starter'>Explore My Skills</p>
      <p className='title'>Skills</p>
      <div>
        <div>
          <div>
            <h5>Software Developer</h5>
            <p>I have always like to write a clean and maintable code.</p>
            <p>I like to code in Java, JavaScript, Node, C, MySQL, Python.</p>
            <h6>Tools</h6>
            <ul>
              <li>Vs Code</li>
              <li>IntelliJ IDEA</li>
              <li>Eclipse</li>
              <li>Google Colab</li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h5>Front-end Developer</h5>
            <p>I enjoy  creating some visible transitions and effects on frontend and bringing new concepts to life.
            </p>
            <h6>Skills</h6>
            <p>HTML, CSS, JavaScript, Bootstrap, React Js, Redux, Firebase, Git.</p>
            <h6>Tools</h6>
            <ul>
              <li>Vs Code</li>
              <li>GitHub</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills