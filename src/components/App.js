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
                <div className='flex items-end'>
                    <Navbar />
                </div>
                <Intro />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>

        </div>
    )
}

export default App