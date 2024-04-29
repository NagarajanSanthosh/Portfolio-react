import React from 'react'
import image from '../image/profile2.jpg'
import '../index.css'
const Intro = () => {
    const openPDF = () => {
        window.open('https://drive.google.com/file/d/1SiwTAbO2DALuv1Sj7HuWFfpfXUf625Wo/view?usp=sharing', '_blank');
    }
    return (
        <div>
            <div >
                <div >
                    <div >
                        <div >
                            <p>Hi, I'm</p>

                        </div>
                        <div>
                            <p>Santhosh Nagarajan</p>
                        </div>
                        <div>
                            <p>Frontend Developer</p>

                        </div>
                        </div>
                        <button onClick={openPDF}>Resume</button>
                </div>

                <div>
                    <img className='image-style' src={image} alt='profile' />
                </div>

            </div>
            
        </div>
    )
}

export default Intro