import React from 'react'
import '../contact.css'
const Contact = () => {
  return (
    <div id='contact' className='bottom-style'>
      <p className='starter text-description'>Get in Touch</p>
      <p className='title contact'> Contact
      </p>
      <div className='contact-info-out'>
        <div className='contact-info-border'>
          <div className='contact-info-in'>

            <p>Email{` `}
              <a href='mailto:santhoshn2982@gmail.com'>santhoshn2982@gmail.com</a>
            </p>
          </div>
          <div className='contact-info-in'>
            <p>LinkedIn{` `}
              <a href='https://www.linkedin.com/in/santhosh-nagarajan-98686923b/' target='_blank'>Linked/Santhosh</a>
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact