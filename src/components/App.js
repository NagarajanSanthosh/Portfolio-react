import React from 'react'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
import Skills from './Skills'

import ParticlesComponent from './ParticlesComponent'

const App = () => {
    return (
        <div>
            <div className='alltextblack'>

                <h1>Santhosh N</h1>
                <About />
                <Contact />
                <Resume />
                <Skills />
                
            </div>
            <ParticlesComponent id="particles" />

        </div>
    )
}

export default App