import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import '../main.css'


const Navbar = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        showNavBar(); // Close the navbar after clicking on a link
    };
    return (
        <header>
            <h1>Santhosh N</h1>
            <nav ref={navRef}>
                <a href='/#' onClick={() => scrollToSection('')}>Home</a>
                <a href='/#' onClick={() => scrollToSection('about')}>About</a>
                <a href='/#' onClick={() => scrollToSection('contact')}>Contact</a>
                <a href='/#' onClick={() => scrollToSection('skills')}>Skills</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar