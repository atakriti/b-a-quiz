import React, { useContext, useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./header.scss"
import logo from "../images/logo-2.png"
import { context } from '../Context'
import jsPDF from 'jspdf';
import logo1 from "../images/logo.png"
import axios from 'axios'
import { useMediaQuery } from 'react-haiku';
import {HiMenuAlt3} from "react-icons/hi"
function Header() {
      const breakpoint = useMediaQuery('(max-width: 800px)');
      let [isOpen, setIsOpen] = useState(false)
      let [animateMenu,setAnimateMenu] = useState(false)
  let { isSignedIn,setIsSignedIn,setSignedIn,setSignedInValue,signedIn,users,fetchingUsers,setUsers,setIsDownload } = useContext(context)
  let findUser = users.find(user => user.email === signedIn.email)
  let [findUserState,setFindUserState] = useState(findUser)
      let handleSignout = () => {
            setAnimateMenu(!animateMenu)
            setTimeout(()=>(setIsOpen(!isOpen)),300)
            setIsSignedIn(false)
       fetchingUsers().then(result => setUsers(result)) 

            setSignedIn({
                  email: "",
                  password:""
            })
            setSignedInValue({
                  email: "",
                  password:""
            })
      }
      let handleStart = async () => {
            setAnimateMenu(!animateMenu)
            setTimeout(()=>(setIsOpen(!isOpen)),300)
            setFindUserState({...findUserState,a1:false,a2:false,b1:false})
            await axios.put(`/update/${findUserState?._id}`, { ...findUserState, a1: false, a2: false, b1: false })
       fetchingUsers().then(result => setUsers(result)) 

            alert("The Quiz are reset it")
      }
      // =================================== Download ============================

      const pdf = new jsPDF();
      let text = `                     Thank you for visiting our quizzes \n
        Congratulation ${findUserState?.username} you completed the quizzes \n
           This Certificate is for fun, it is Fake and not Real \n
               only to remember that you could make it \n
              Your B & A Team want to let you know that, \n
        you can repeat the quizzes by clicking on start again \n
        and downloading the certificate again from the Menu \n


      `
      pdf.addImage(logo1, "png", 73, 0, 70, 70) //! Not touche it
      pdf.text(text,30,80)
      let handleDownload = () => {
            setAnimateMenu(!animateMenu)
            setTimeout(()=>(setIsOpen(!isOpen)),300)
          pdf.save('certificate.pdf');
            setIsDownload(false)
           
      }
      // ======================================== End Download ========================
      let handleIsOpen = () => {
            setAnimateMenu(!animateMenu)
            setTimeout(()=>(setIsOpen(!isOpen)),300)
            
      }


      useEffect(() => {
            setFindUserState(findUser)
          },[users])
  return (
      <header className='header'>
          <div className="logo">
              <Link to="/" ><img src={logo} alt="" /></Link>
              </div>
              

              {breakpoint && (
                    <div className="hamburgerMenu">
                          <div onClick={handleIsOpen} className="hamburger">
                          <HiMenuAlt3 style={isOpen && {fill:"white"}}/>
                          </div>
                          {isOpen && (
                                  <div style={animateMenu ? {animation:"menuOpen 0.5s forwards"}:{animation:"menuClose 0.5s forwards"}} className="menu_">
                                  <Link onClick={handleIsOpen}  to="/">Home</Link>
                      <Link onClick={handleIsOpen}  to="/about">About</Link>
                            <Link onClick={handleIsOpen}  to="/contact">Contact</Link>
                            {findUserState?.b1 && (
                                  <a onClick={handleDownload}>Download Certificate</a>
                    )}
        
        
                            {isSignedIn && (
                                  <Link onClick={handleStart} to="/">Start again</Link>
                      )}
                {isSignedIn ? (
                      <Link onClick={handleSignout} to="/">Sign out</Link>
        
                ): (
                    
                      <Link onClick={handleIsOpen}  to="/register">Sign in</Link>
                            )}
                                  </div>
                        )}


                    </div>
            )}

{/* ========================== To hide over 800px ================ */}

              {!breakpoint && (
                    
          <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                {findUserState?.b1 && (
                      <a onClick={handleDownload}>Download Certificate</a>
        )}


                {isSignedIn && (
                      <Link onClick={handleStart} to="/">Start again</Link>
          )}
    {isSignedIn ? (
          <Link onClick={handleSignout} to="/">Sign out</Link>

    ): (
        
          <Link to="/register">Sign in</Link>
                )}
               
                          
      </nav>
)}
    </header>
  )
}

export default Header