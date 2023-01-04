import React from 'react'
import "./about.scss"
import baha from "../images/baha.jpg"
import anwar from "../images/anwar.jpeg"
function About() {
  return (
      <div className='about'>
          <div className="title_about">
              <h1>About Us</h1>
              <p>We are a team of creative professionals Developers who are passionate about designing and building beautiful and functional websites and applications.</p>
          </div>
          <div className="about_container">
              {/* ================ anwar ========== */}
              <span>
              <svg viewBox="0 0 1024 1024" className="testimonial-card3-icon">
        <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
                  </svg>
                  <p>Started learning Web Dev since dec.2021. My lovely friend is the Computer</p>
                  <a target={'_blank'} href='https://www.anwar-dev.com'><img src={anwar} alt="" /></a>
                  <h4>Anwar Takriti</h4>
              </span>
              {/* ================ Baha ========== */}
              
              <span>
              <svg viewBox="0 0 1024 1024" className="testimonial-card3-icon">
        <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
                  </svg>
                  <p>A Web Developer.  spend my whole day studying new technology practically.</p>
                  <a target={'_blank'} href='www-baha.vercel.app/' ><img src={baha} alt="" /></a>
                    <h4>Baha Alden Hasim</h4>
              </span>
          </div>
    </div>
  )
}

export default About