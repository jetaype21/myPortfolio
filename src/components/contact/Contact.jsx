import React, { useRef } from 'react'
import './contact.css'

import {AiFillMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from 'emailjs-com'

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_919gjnn', 'template_wz9drfv', form.current, '0hCDKyUnuMChC9r2u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiFillMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jetaypedev@gmail.com</h5>
            <a href="mailto:jetaypedev@gmail.com" target='_blank'>Send message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>JE taype</h5>
            <a href="https://m.me/je.taypeescobar" target='_blank'>Send message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>🟥⬜🟥 935747422</h5>
            <a href="https://wa.me/+51935747422" target='_blank'>Send message</a>
          </article>
        </div>

        {/* End of contacts options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your Email'  required />
          <textarea name="message" rows="7" placeholder='Your message' required ></textarea>

          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
