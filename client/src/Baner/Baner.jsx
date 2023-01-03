import React from 'react'
import "./baner.scss"
import logo from "../images/logo.png"
import Register from "../Register/Register"
function Baner() {
  return (
    <div className='baner'>

<a ><img src={logo} alt="" /></a>
      <div className="baner_text">
          <p>B & A is for the students who wants to kick off with the languages, take the quizes, complete them and then take your Certificate as a gift from us, to be confident and to remember that you could make it</p>
          </div>
    <div className="baner_two"></div>
     
          
    </div>
  )

}

export default Baner