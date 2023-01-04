
import './LandingPage.scss';

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import video from "./BNA-Team-video-2.mp4";
// import Register from "./Register/Register";

import Highlight from '../Highlight/Highlight'
import Point from '../Point/Point'
import Footer from '../Footer/Footer'
import './LandingPage.scss'

const LandingPage = (props) => {
  let navigate = useNavigate()
  return (
    <div className="home-container">
      <Helmet>
        <title>B&A</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="B&amp;A" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-hero">
          <div className="home-content">
            <h1 className="home-title">
              B &amp; A International Educational Quizzes For German Language
            </h1>
            <span className="home-caption">
            We Have different levels. the Students entering these Tests should have a minimum knowledge level of the German Language.
            </span>
            <div className="home-hero-buttons">
              <div className="home-i-o-s-btn">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-zmzg.svg"
                  className="home-apple"
                />
                <span className="home-caption1">Download for iOS</span>
              </div>
              <div className="home-android-btn">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ld65.svg"
                  className="home-android"
                />
                <span className="home-caption2">Download for Android</span>
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-column">
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxsZWFybmluZ3xlbnwwfHx8fDE2NzI0OTQ2MjQ&amp;ixlib=rb-4.0.3&amp;w=300"
                className="home-pasted-image"
              />
            </div>
            <div className="home-column1">
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxsZWFybnxlbnwwfHx8fDE2NzI0OTA5OTc&amp;ixlib=rb-4.0.3&amp;w=500"
                className="home-pasted-image1"
              />
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxsZWFybnxlbnwwfHx8fDE2NzI0OTA5OTc&amp;ixlib=rb-4.0.3&amp;w=500"
                className="home-pasted-image2"
              />
            </div>
            <img
              alt="pastedImage"
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGxlYXJufGVufDB8fHx8MTY3MjQ5MDk5Nw&amp;ixlib=rb-4.0.3&amp;w=400"
              className="home-pasted-image3"
            />
          </div>
        </div>
      </div>
      <div className="home-video">
        <div className="home-content1">
          <div className="home-header1">
            <h2 className="home-text">
              Built specifically for people who want faster German Learning
            </h2>
          </div>
          <div className="home-video-container">
            <video
            src={video} type="video/mp4"
              // src="https://share.synthesia.io/32ce1054-2e94-4ded-9d3b-fbab964d3344"
              controls
        controlsList="nodownload"
              className="home-video1"
            ></video>
            <div className="home-heading-container">
              <div className="home-heading">
                <span className="home-text01">
                  Build your dream career with us!
                </span>
                <span className="home-text02">
                Test yourself to see your level and there is a prize at the end. You will get a certificate.
                </span>
              </div>
              <div className="home-explore">
                <span style={{textDecoration:"underline"}} onClick={()=>navigate("/singleCourse/demo")} className="home-text03">Explore our Quizzes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sections">
        <div className="home-section">
          <div className="home-image">
            <div className="home-image-highlight">
              <span className="home-text04">
                <span>B&amp;A App always on your in Hand</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-content2">
            <h2 className="home-text07">Everything you get with B&amp;A App</h2>
            <Highlight
              Title="Welcome to our world of German Language "
              Description="Easy to access the tests"
            ></Highlight>
            <Highlight
              Title="Discover your current German level "
              Description="Take our multiple choice test in minutes"
            ></Highlight>
            <div className="home-explore1">
              <span style={{textDecoration:"underline"}} onClick={()=>navigate("/singleCourse/demo")} >Explore our Quizzes </span>
            </div>
          </div>
        </div>
        <div className="home-section1">
          <div className="home-content3">
            <div className="home-heading1">
              <h2 className="home-text09">Keep track your Answers</h2>
              <span className="home-text10">
              This test is designed to assess your understanding of German grammar, vocabulary and phrasing. Each question is in the format of multiple choice and you will have a choice of 4 possible answers..
              </span>
            </div>
            <div className="home-content4">
              <div className="home-points">
                <Point text="Understand your German level"></Point>
                <Point text="Find resources for your level"></Point>
                <Point text="Improve your German level"></Point>
              </div>
              <Link to="/register" className="home-navlink">
                <div className="home-get-started">
                  <span className="home-sign-up">Get started now</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-image1"></div>
        </div>
      </div>
      <div className="home-f-a-q">
        <div className="home-content5">
          <div className="home-header2">
            <div className="home-tag">
              <span className="home-text11">
                <span>FAQ</span>
                <br></br>
              </span>
            </div>
            <div className="home-heading2">
              <h2 className="home-text14">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="home-rows">
            <div className="home-column2">
              <div className="Question">
                <span className="home-title1">
                  B &amp; A Quiz, Who we are ?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description">
                We are B & A "Baha and Anwar" International Educational Quizzes, a group of Web Developers who Built this project specifically for people who want faster the language Learning
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="Question">
                <span className="home-title2">
                What are the desired goals of this project ?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description1">
                  <span>
                  Our highly qualified German Quizzes are by your side and provide you with the right tools to help you interact confidently in the real world and achieve the professional and personal success you are working towards.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                 
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
            <div className="home-column3">
              <div className="home-question2 Question">
                <span className="home-title3">
                Why there’s no better way to learn German than online
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description2">
                A study by Coursera found that 87% of people who take online professional development quizzes and courses gain a direct benefit to their career afterward, such as getting a promotion, a raise, or starting a new career.
                </span>
              </div>
              <div className="home-question3 Question">
                <span className="home-title4">
                Learn from anywhere
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description3">
                As long as you have a phone or laptop, you can take online German quizzes and courses from anywhere, even the comfort of your own bed (although we don’t recommend it). By avoiding an unnecessary commute to class, you can save yourself lots of time.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-get-started1">
        <div className="home-content6">
          <div className="home-heading3">
            <h2 className="home-text18">
              Get started with B&amp;A Quiz now!
            </h2>
            <span className="home-text19">
            That’s pretty impressive, especially since you can gain all these benefits in a completely flexible way.
            </span>
          </div>
          <div className="home-hero-buttons1">
            <div className="home-i-o-s-btn1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-zmzg.svg"
                className="home-apple1"
              />
              <span className="home-caption3">Download for iOS</span>
            </div>
            <div className="home-android-btn1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-ld65.svg"
                className="home-android1"
              />
              <span className="home-caption4">Download for Android</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage
