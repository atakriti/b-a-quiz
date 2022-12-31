import React, { useContext, useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./header.scss"
import logo from "../images/logo-2.png"
import { context } from '../Context'
import jsPDF from 'jspdf';
import logo1 from "../images/logo.png"
import axios from 'axios'
function Header() {
  let { isSignedIn,setIsSignedIn,setSignedIn,setSignedInValue,signedIn,users,fetchingUsers,setUsers,setIsDownload } = useContext(context)
  let findUser = users.find(user => user.email === signedIn.email)
  let [findUserState,setFindUserState] = useState(findUser)
      let handleSignout = () => {
            setIsSignedIn(false)
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
            setFindUserState({...findUserState,a1:false,a2:false,b1:false})
            await axios.put(`http://localhost:4000/update/${findUserState._id}`, { ...findUserState, a1: false, a2: false, b1: false })
       fetchingUsers().then(result => setUsers(result)) 

            alert("The courses are reset it")
      }
      // =================================== Download ============================

      const pdf = new jsPDF();
      let text = `                     Thank you for visiting our Course \n
        Congratulation ${findUserState?.username} you completed the course \n
           This Certificate is for fun, it is Fake and not Real \n
               only to remember that you could make it \n
              Your B & A Team want to let you know that, \n
        you can repeat the course by clicking on start again \n
        and downloading the certificate again from the Menu \n


      `
      pdf.addImage(logo1, "png", 73, 0, 70, 70) //! Not touche it
      pdf.text(text,30,80)
      let handleDownload = () => {
          pdf.save('certificate.pdf');
          setIsDownload(false)
      }
      // ======================================== End Download ========================



      useEffect(() => {
            setFindUserState(findUser)
          },[users])
  return (
      <header>
          <div className="logo">
              <Link to="/" ><img src={logo} alt="" /></Link>
          </div>
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
    </header>
  )
}

export default Header