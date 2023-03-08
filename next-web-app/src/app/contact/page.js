'use client'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const isValidEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const submit = () => {
    if (name && email && message) {
      // send mail
      const serviceId = 'service_x1nfuht'
      const templateId = 'template_kqtouqf'
      const userId = 'fWr-9aee-87hhbco-'
      const templateParams = {
        name,
        email,
        message,
      }

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error))
      //DONE
      setName('')
      setEmail('')
      setMessage('')
      setEmailSent(true)
    } else {
      alert('Please fill in all fields.')
    }
  }

  return (
    <main>
      <div className="contact-form">
        <h1>Contact us</h1>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={submit}>Send Message</button>
        <span>
          {emailSent
            ? 'Thank you for your message, we will be in touch in no time!'
            : null}
        </span>
      </div>
    </main>
  )
}
