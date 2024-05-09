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
        <div className='App'>

            <div className='alltextblack'>
                
                    <div>
                        <Navbar />
                    </div>
                
                <main>
                    <Intro />
                    <About />
                    <Skills />
                    <Projects />
                </main>
                <footer>
                    <Contact />
                </footer>
            </div>

        </div>
    )
}

export default App