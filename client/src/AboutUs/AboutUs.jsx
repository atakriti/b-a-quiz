import React from 'react'

import { Helmet } from 'react-helmet'

import TestimonialCard3 from './components/testimonial-card3'
import './AboutUs.scss'


const AboutUs = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Real Spectacular Hedgehog</title>
        <meta property="og:title" content="Real Spectacular Hedgehog" />
      </Helmet>
      <div className="home-testimonial">
        <h1 className="home-text">About Us</h1>
        <span className="home-text1">
          We are a team of creative professionals Developers who are passionate
          about designing and building beautiful and functional websites and
          applications.
        </span>
        <div className="home-container1">
          <a
            href="https://clothes-online.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <TestimonialCard3
              picture_src="/playground_assets/pics2-200h.jpeg"
              rootClassName="rootClassName"
              quote="Started learning Web Dev since dec.2021. My lovely friend is the Computer"
              name=" Anwar Takriti"
              className="home-component"
            ></TestimonialCard3>
          </a>
          <a
            href="https://bhasim.github.io/protfolio-Baha/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <TestimonialCard3
              picture_src="/playground_assets/img2-200w.jpg"
              rootClassName="rootClassName"
              name="Baha Alden Hasim"
              quote="A Web Developer.  spend my whole day studying new technology practically."
              className="home-component1"
            ></TestimonialCard3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
