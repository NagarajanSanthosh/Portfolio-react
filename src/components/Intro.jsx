import React from 'react'
import image from '../image/profile2.jpg'
import '../index.css'
const Intro = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-8'>
                    <img className='rounded-circle  image-style rounded mx-auto my-5 d-block' src={image} alt='profile' />
                </div>
                <div className='col-lg-4  d-flex align-items-center'>
                    <p className='ms-5 fs-3 align-items-center'>Hi, I am</p><br />
                    <p className='ms-5 fs-3 align-items-center'>Santhosh Nagarajan</p>
                </div>
            </div>
        </div>
    )
}

export default Intro