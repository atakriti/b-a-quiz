import React, { useContext, useEffect, useState } from 'react'
import { context } from '../Context'
import "./certificate.scss"
import jsPDF from 'jspdf';
import logo from "../images/logo.png"
function Certificate() {
    let { signedIn,users,setIsDownload } = useContext(context)
  let findUser = users.find(user => user.email === signedIn.email)
    let [findUserState, setFindUserState] = useState(findUser)
   
    const pdf = new jsPDF();
    let text = `                     Thank you for visiting our Course \n
        Congratulation ${findUserState?.username} you completed the course \n
           This Certificate is for fun, it is Fake and not Real \n
               only to remember that you could make it \n
              Your B & A Team want to let you know that, \n
        you can repeat the course by clicking on start again \n
        and downloading the certificate again from the Menu \n


      `
    pdf.addImage(logo, "png", 73, 0, 70, 70) //! Not touche it
    pdf.text(text,30,80)
    let handleDownload = () => {
        pdf.save('certificate.pdf');
        setIsDownload(false)
    }





    useEffect(() => {
        setFindUserState(findUser)
      },[users])
  return (
      <div className='certificate'>
          <div className="certificate_container">
              <h3 onClick={()=>setIsDownload(false)}>X</h3>
          <h1>Congratulation</h1>
          <h2 >Now you can download your Certificate</h2>
            <button onClick={handleDownload}>Download</button>
          </div>
    </div>
  )
}

export default Certificate