import React, { useContext, useEffect, useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { context } from '../Context'
import {BsFillLockFill,BsFillUnlockFill} from "react-icons/bs"
import {IoMdDoneAll} from "react-icons/io"
import "./courses.scss"
function Courses() {
  let navigate = useNavigate()
  let {users,signedIn,isSignedIn} = useContext(context)
  let findUser = users?.find(user => user?.email === signedIn?.email)
    let [findUserState,setFindUserState] = useState(findUser)

  let a1 = () => {
    // to={`${findUserState?.a1 === true ? "/" : "/singleCourse/a1"}`}
    if (isSignedIn) {
      if (findUserState?.a1) {
        navigate("/")
      } else {
        navigate("/singleCourse/a1")
      }
    } else {
      alert("Please Sign in")
    }
  }



  let a2 = () => {
    if (isSignedIn) {
      if (findUserState?.a2 === true) {
        navigate("/")
      } else if (findUserState?.a1 === true) {
        navigate("/singleCourse/a2")
        
      } else {
          navigate("/")
      }
    } else {
      alert("Please Sign in")
    }
   
  }
  let b1 = () => {
    if (isSignedIn) {
      if (findUserState?.b1 === true) {
        navigate("/")
      } else if (findUserState?.a1 && findUserState?.a2) {
        navigate("/singleCourse/b1")
        
      } else {
          navigate("/")
      }
    } else {
      alert("Please Sign in")
    }
     
    


  
  }



  useEffect(() => {
    setFindUserState(findUser)
  },[users])
  return (
    <div className='courses'>
      {/* ================================= Demo ==================== */}
      <div className="cours_"><Link to="/singleCourse/demo">Demo</Link></div>
      {/* ================================= A1 ==================== */}
      <div  onClick={a1} className="cours_">

        <div className="icons_">
          {isSignedIn && <BsFillUnlockFill />}
        
        {findUserState?.a1 && <IoMdDoneAll/>}
        </div>
        <a >A1</a>
      </div>
      {/* ================================= A2 ==================== */}
      <div onClick={a2} className="cours_">
        <div className="icons_">
          
        {findUserState?.a1 === false && <BsFillLockFill/>}
        {findUserState?.a1 && <BsFillUnlockFill/>}
        {findUserState?.a2 && <IoMdDoneAll/>}
        </div>
        <a  >A2</a>
      </div>
      {/* ================================= B1 ==================== */}
      <div onClick={b1} className="cours_">
        <div className="icons_">
        { findUserState?.a2 === false   && <BsFillLockFill/>}
        {findUserState?.a1 === true && findUserState?.a2 === true && <BsFillUnlockFill />}
        {findUserState?.b1 && <IoMdDoneAll/>}
        </div>
        <a >B1</a>
      </div>
    </div>
  )
}

export default Courses