import React from 'react'
import '../index.css'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact'
import Intro from './Intro';

const App = () => {
    return (
        <div>
            <div className='alltextblack'>
                <div>
                    <Navbar />
                </div>
                <Intro />
                <About />
                <Skills />
                <Projects />
                <Contact />

                <div>
                <p>Copyrights © reserved 2024</p>
                </div>
            </div>

        </div>
    )
}

export default App