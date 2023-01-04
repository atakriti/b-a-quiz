import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { context } from "../Context";
import data from "../data";
import "./singleCourse.scss"
import congrats from "../images/congrats.gif"
function SingleCourse() {
    let navigate = useNavigate()
    let { signedIn, users,fetchingUsers,setUsers,setIsDownload } = useContext(context)
    let findUser = users.find(user => user.email === signedIn.email)
    let [findUserState,setFindUserState] = useState(findUser)
    let { type } = useParams();
    // let findCourse = findUserState?.includes(type)
    // console.log("🚀 ~ file: SingleCourse.jsx:12 ~ SingleCourse ~ findCourse", findCourse)
    let [switchQuiz, setSwitchQuiz] = useState(0);
    let [isFalse, setIsFalse] = useState(false)
    let [clickedIndex, setClickedIndex] = useState()
    let [attempts, setAttempts] = useState(0)
  let [isCongrats, setIsCongrats] = useState(false)
  let handleNext = async (i, item) => {
     
        if (switchQuiz === data[type]?.length - 1 && item?.isCorrect ) {
          setFindUserState({ ...findUserState, [type]: true })
         
         
            await axios.put(`/update/${findUserState._id}`, { ...findUserState, [type]: true })
            
          
            setIsCongrats(true)
            setTimeout(() => setIsCongrats(false), 3000)
            setTimeout(() => navigate("/"), 3000)
       fetchingUsers().then(result => setUsers(result)) 
       if (switchQuiz === data?.b1?.length - 1 && type === 'b1') {
        setIsDownload(true)
       }
          
        } else if (item?.isCorrect) {
            setSwitchQuiz(switchQuiz + 1)
            setIsFalse(false)
            setAttempts(0)
        } else if (attempts === 2) {
            setSwitchQuiz(0)
            setAttempts(0)
            setIsFalse(false)
            
        }   else {
            // alert("Its not correct")
            setIsFalse(true)
            setClickedIndex(i)
            setAttempts(attempts + 1)
        }
       
    }
    useEffect(() => {
        setFindUserState(findUser)
    },[users])
  return (
      <div className="singleCourse">
          {isCongrats && (
              <div className="congratsContainer">
                <img className="congrats" src={congrats} alt="" />
              </div>
          )}
         
      <div className="singleCourseContainer">
        <h1 className="welcome_">Welcome to {type[0].toUpperCase() + type.slice(1)}</h1>
              <h3>You have only 2 attempts</h3>
              <h2>Attempts {attempts}</h2>
              <h4>{switchQuiz} out of {data[type]?.length} – {(switchQuiz / data[type]?.length * 100).toFixed(0)}%</h4>
              <span className="precentage" style={{width:`${switchQuiz / data[type]?.length * 100}%`}}></span>
        <ul>
        <h1>{data[type][switchQuiz]?.question}</h1>
          {data[type][switchQuiz]?.options.map((item,i) => (
            <li className={i === clickedIndex && isFalse && "false"} onClick={()=>handleNext(i,item)}>{item?.answer}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SingleCourse;
