import React from 'react'

import Navbar from './Navbar'
import About from './About'
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact'

const App = () => {
    return (
        <div>
            <div className='alltextblack'>
                <Navbar />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>

        </div>
    )
}

export default App