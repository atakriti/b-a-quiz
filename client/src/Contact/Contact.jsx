import React, { useState, useEffect } from 'react'
// import Header from '../Header/Header';
// import Logo from "../images/logo.png"
import "./Contact.scss"
import emailjs from '@emailjs/browser';



function Contact() {

    let [value, setValue] = useState({ name: "", tel: "", email: "", message: "" })
    console.log("🚀 ~ file: Contact.jsx ~ line 7 ~ Contact ~ value", value)

    let handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })

    }

    let handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, e.target, process.env.REACT_APP_YOUR_PUBLIC_KEY)

            .then((result) => {
                alert(result.text)
            }, (error) => {
                alert(error.text)
            });
        setValue({ name: "", tel: "", email: "", message: "" })
    }

    return (
        <article >
            <div className='contact-container'>
                <div className='contact'>
                    <form onSubmit={handleSubmit}>
                        <h1>Contact Us</h1>
                        <input required value={value.name} onChange={handleChange} type="text" name="name" id="" placeholder='Enter your Full Name...' />
                        <input required value={value.tel} onChange={handleChange} type="number" name="tel" id="" placeholder='Enter your Mobile Number...' />
                        <input required value={value.email} onChange={handleChange} type="email" name="email" id="" placeholder='Enter your E-Mail...' />
                        <textarea required value={value.message} onChange={handleChange} name="message" id="" cols="30" rows="10" placeholder='Write your Message here...' />
                        <button disabled={value.message === ""}>Send</button>
                    </form>
                </div>
            </div>

        </article>

    )
}

export default Contact